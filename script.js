const btn = document.querySelector(".btn_service");
const size = document.querySelector("input#medida");
const res = document.querySelector("div#res");
const img = document.createElement("img");

const radioButtons = document.querySelectorAll('input[name="fan"]');
let valorRadio = "";

radioButtons.forEach(function (radioButton) {
  radioButton.addEventListener("change", function () {
    valorRadio = this.value;
  });
});

// Construindo uma string para acessar o nome de uma img
const imgService = function (str, img, valorRadio) {
  img.src = `img/${valorRadio}-${size.value}.png`;
};

//Adicionando evento de click no botão e capturando o input feito pelo usuario
btn.addEventListener("click", function () {
  if (size.value.length == 0) {
    alert("Digite uma medida!!");
  } else {
    imgService(size.value, img, valorRadio); //Construinfo
  }
  res.style.textAlign = "center";
  res.innerHTML = `Tamanho: <strong>${size.value}</strong> - Link do`;
  res.appendChild(img);
});
