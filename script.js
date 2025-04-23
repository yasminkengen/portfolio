
document.getElementById("btn-leia-mais").addEventListener("click", function () {
  const pontos = document.getElementById("pontos");
  const maisTexto = document.getElementById("mais-texto");
  const btn = document.getElementById("btn-leia-mais");

  if (maisTexto.classList.contains("show")) {
    maisTexto.classList.remove("show");
    pontos.style.display = "inline";
    btn.innerText = "Ler mais";
  } else {
    maisTexto.classList.add("show");
    pontos.style.display = "none";
    btn.innerText = "Ler menos";
  }
});
