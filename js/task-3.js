function getElementWidth(content, padding, border) {
  const contentAll = parseFloat(content);
  const paddingAll = parseFloat(padding) * 2;
  const borderAll = parseFloat(border) * 2;
  return contentAll + paddingAll + borderAll;
}

console.log(getElementWidth("50px", "8px", "4px"));
//console.log(getElementWidth("60px", "12px", "8.5px"));
//console.log(getElementWidth("200px", "0px", "0px"));
