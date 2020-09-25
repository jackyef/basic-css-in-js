import { getPrefixedStyleString } from './prefixer';
import { sheet, getSheet } from './sheet';

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
export { getSheet };
