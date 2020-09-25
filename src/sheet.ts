// const isBrowser = typeof window !== 'undefined';
const isBrowser = false;

const mockSheet = () => {
  // the mock sheet need to have at least 2 properties
  // 1. cssRules: an array of rules in the sheet
  // 2. insertRule: a method to insert rules to the sheet
  const cssRules: string[] = [];

  return {
    cssRules,
    insertRule: (rule: string) => {
      cssRules.push(rule);
    },
    extract: () => cssRules.join(''),
  };
};

const sheet = isBrowser
  ? (document.head.appendChild(document.createElement('style'))
      .sheet as CSSStyleSheet)
  : mockSheet();

const getSheet = () => sheet;

export { sheet, getSheet };
