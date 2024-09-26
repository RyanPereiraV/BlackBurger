/*window.onload = function () {
  Swal.fire({
    title: "Bem vindo!",
    text: "A melhor hamburgeria do bairro",
    imageUrl: "Assets/Imagens/Logo_Curta.png",
    imageWidth: 200,
    imageHeight: 200,
    background: "#000000",
    imageAlt: "Custom image"
  });
}
*/
document.getElementById("topo").addEventListener("click", function() {
  window.scrollTo({
      top: 0,
      behavior: "smooth" // Define a rolagem suave
  });
});