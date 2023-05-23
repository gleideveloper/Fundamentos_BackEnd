function createLink(filename) {
  return `<a href=/${filename}>${filename}</a><br>`;
}
function createVoltar() {
  return `<a href="/">Voltar<a/><br>`;
}

module.exports = {
  createLink,
  createVoltar,
};
