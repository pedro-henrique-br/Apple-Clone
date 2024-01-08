// Selecionando elementos

const iphoneImg = document.getElementById("iphone-img")

const btnIphoneVerde = document.getElementById("btn-verde")
const btnIphonePrateado = document.getElementById("btn-prateado")
const btnIphoneGrafite = document.getElementById("btn-grafite")
const btnIphoneAzul = document.getElementById("btn-azul")
const btnIphoneDourado = document.getElementById("btn-dourado")

btnIphoneVerde.addEventListener ("click", () => {
  iphoneImg.src = `/assets/iphone_green.jpg`
  iphoneImg.classList.toggle("active")
})

btnIphoneDourado.addEventListener ("click", () => {
  iphoneImg.src = `/assets/iphone_golden.jpg`
  iphoneImg.classList.toggle("active")
})

btnIphoneGrafite.addEventListener ("click", () => {
  iphoneImg.src = `/assets/iphone_grafite.jpg`
  iphoneImg.classList.toggle("active")
})

btnIphoneAzul.addEventListener ("click", () => {
  iphoneImg.src = `/assets/iphone_blue.jpg`
  iphoneImg.classList.toggle("active")
})

btnIphonePrateado.addEventListener ("click", () => {
  iphoneImg.src = `/assets/iphone_silver.jpg`
})
