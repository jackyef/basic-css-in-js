const sheet = document.head.appendChild(document.createElement('style')).sheet as CSSStyleSheet;

function interleave(strings: TemplateStringsArray, interpolations: any[]) {
  return strings.reduce(
    (final: string, str: string, i: number) => 
      final + str + (interpolations[i] === undefined ? '' : interpolations[i]),
    '',
  );
}

export const css = (strings: TemplateStringsArray, ...interpolations: any[]) => {
  const styleString = interleave(
    strings,
    interpolations
  );
  const lastIndex = sheet?.cssRules.length;
  const className = `css-${lastIndex?.toString(36)}`;

  const rule = `.${className} { ${styleString} }`;

  sheet.insertRule(rule, lastIndex);

  return className;
};

export const keyframes = (strings: TemplateStringsArray, ...interpolations: any[]) => {
  const styleString = interleave(
    strings,
    interpolations
  );
  const lastIndex = sheet?.cssRules.length;
  const className = `css-${lastIndex?.toString(36)}`;

  const rule = `@keyframes ${className} { ${styleString} }`;

  sheet.insertRule(rule, lastIndex);

  return className;
};
