function addClass() {
  // Obtendo todos os elementos com a classe "col-6"
  const elementos = document.querySelectorAll(".col-6");
  // Iterando sobre os elementos
  elementos.forEach((elemento, index) => {
    // Adicionando a classe "sobe" ou "desce" dependendo do índice
    if (index % 2 === 0) {
      elemento.classList.add("sobe");
    } else {
      elemento.classList.add("desce");
    }
  });
}
