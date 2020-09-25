import { prefixProperty } from 'tiny-css-prefixer';

const prefix = (prop: string, value: string) => {
  const flag = prefixProperty(prop);

  let css = `${prop}: ${value};\n`;
  if (flag & 0b001) css += `-ms-${css}`;
  if (flag & 0b010) css += `-moz-${css}`;
  if (flag & 0b100) css += `-webkit-${css}`;
  return css;
};

const getPrefixedStyleString = (styleString: string) => {
  let temp = styleString
    .trim()
    .split(';')
    .map(s => {
      const [prop, value] = s.split(':');

      if (prop && value) {
        return prefix(prop.trim(), value);
      }

      return '';
    });

  return temp.join('');
};

const sheet = document.head.appendChild(document.createElement('style'))
  .sheet as CSSStyleSheet;

function interleave(strings: TemplateStringsArray, interpolations: any[]) {
  return strings.reduce((final: string, str: string, i: number) => {
    let interpolated = '';

    if (interpolations[i] !== undefined) {
      if (typeof interpolations[i] === 'function') {
        interpolated = interpolations[i]();
      } else {
        interpolated = interpolations[i];
      }
    }

    return final + str + interpolated;
  }, '');
}

const _base = (prefix: string) => (
  strings: TemplateStringsArray,
  ...interpolations: any[]
) => {
  const styleString = getPrefixedStyleString(
    interleave(strings, interpolations)
  );

  const lastIndex = sheet.cssRules.length;
  const className = `css-${lastIndex.toString(36)}`;

  const rule = `${prefix}${className} { ${styleString} }`;

  sheet.insertRule(rule, lastIndex);

  return className;
};

export const css = _base('.');
export const keyframes = _base('@keyframes ');
