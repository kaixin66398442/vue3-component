// BEM规范 block代码块 element元素 modifier装饰

// k-button-box__element--modifier
function _bem(
  prefixName: string,
  blockSuffix?: string,
  element?: string,
  modifier?: string
) {
  if (blockSuffix) {
    prefixName = prefixName + "-" + blockSuffix;
  }
  if (element) {
    prefixName = prefixName + "__" + element;
  }
  if (modifier) {
    prefixName = prefixName + "--" + modifier;
  }
  return prefixName;
}

function createBEM(prefixName: string) {
  const b = (blockSuffix: string = "") => _bem(prefixName, blockSuffix, "", "");
  const e = (element: string = "") =>
    element ? _bem(prefixName, "", element, "") : ""; // element没有值不能返回一个block，返回一个空字符串
  const m = (modifier: string = "") => _bem(prefixName, "", "", modifier);
  const be = (blockSuffix: string = "", element: string = "") =>
    blockSuffix && element ? _bem(prefixName, blockSuffix, element, "") : "";
  const bm = (blockSuffix: string = "", modifier: string = "") =>
    blockSuffix && modifier ? _bem(prefixName, blockSuffix, "", modifier) : "";
  const em = (element: string = "", modifier: string = "") =>
    element && modifier ? _bem(prefixName, "", element, modifier) : "";
  const bem = (
    blockSuffix: string = "",
    element: string = "",
    modifier: string = ""
  ) =>
    blockSuffix && element && modifier
      ? _bem(prefixName, blockSuffix, element, modifier)
      : "";

  const is = (name: string, state) => (state ? `is-${name}` : "");
  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is,
  };
}

export function createNamespace(name: string) {
  const prefixName = `k-${name}`;
  return createBEM(prefixName);
}

// const bem = createNamespace("button");
// console.log(bem.b("box"));
// console.log(bem.e());
// console.log(bem.be("box", "element"));
// console.log(bem.bm("box", "modifier"));
// console.log(bem.em("element", "modifier"));
// console.log(bem.bem("box", "element", "modifier"));
// console.log(bem.is("disabled", true));
// console.log(bem.is("checked", false));
// console.log(bem.is("checked", true));