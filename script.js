document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector(".slider");
  
    let images = [
      "https://images.pexels.com/photos/27852643/pexels-photo-27852643/free-photo-of-cidade-meio-urbano-linha-do-horizonte-horizonte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/572420/pexels-photo-572420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/114294/pexels-photo-114294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/26124934/pexels-photo-26124934/free-photo-of-natureza-campo-area-zebra.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/17708522/pexels-photo-17708522/free-photo-of-mulher-de-pe-animais-bichos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];
  
    let imagemAtual = 0;
    let totalImagens = images.length;
    let tempoMudanca = 1500;
  
    function mudarImagemDeFundoAtual(index) {
        carousel.style.backgroundImage = `url(${images[index]})`
    }
  
    function proximaImagem() {
        imagemAtual = (imagemAtual + 1) % totalImagens
        mudarImagemDeFundoAtual(imagemAtual)
    }
  
    mudarImagemDeFundoAtual(imagemAtual)
  
    setInterval(proximaImagem, tempoMudanca)
  });
  