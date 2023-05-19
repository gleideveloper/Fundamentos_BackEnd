function toUpper(str) {
  return str.toUpperCase();
}
function createLink(filename) {
  return `<a href="/${filename}">${filename}<a/><br>`;
}
function createVoltar() {
  return `<a href="/">Voltar<a/><br>`;
}

export default { toUpper, createLink, createVoltar };
