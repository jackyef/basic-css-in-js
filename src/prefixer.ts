import { prefixProperty } from 'tiny-css-prefixer';

const prefix = (prop: string, value: string) => {
  const flag = prefixProperty(prop);

  let css = `${prop}:${value};\n`;

  if (flag & 0b001) css += `-ms-${css}`;
  if (flag & 0b010) css += `-moz-${css}`;
  if (flag & 0b100) css += `-webkit-${css}`;

  return css;
};

export const getPrefixedStyleString = (styleString: string) => {
  let temp = styleString
    .trim()
    .split(';')
    .map(s => {
      const [prop, value] = s.split(':');

      if (prop && value) {
        return prefix(prop.trim(), value);
      }

      return prop || value;
    });

  return temp.join('');
};
