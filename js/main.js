// Selecionando elementos

const iphoneImg = document.getElementById("iphone-img")
const buttons = document.getElementsByClassName("btn");


// Transformando o objeto buttons em array com rest parameter 

const btn = [...buttons]


// Funções 

btn.forEach((btn) => {
  btn.addEventListener("click", (e) => { /* Evento de click */
    iphoneImg.src = `/assets/${e.target.id}.jpg`;
    iphoneImg.classList.add("active");
    btn.classList.add("selected")
    setTimeout(() => { /* SetTimeout para desativar a classe do css */
    iphoneImg.classList.toggle("active");
    btn.classList.remove("selected")
  }, 300)
  })
  })
