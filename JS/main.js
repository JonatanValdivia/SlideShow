'use strict';
//Uma estrutura que faça o carregamento dinâmico
const images = [
  {
    'id': '1', 
    'url': './images/AHS.jpg'
  },
  {
    'id': '2', 
    'url': './images/alemDaImaginacao.jpg'
  },
  {
    'id': '3',
    'url': './images/carnivialRow.jpg'
  },
  {
    'id': '4',
    'url': './images/desencanto.jpg'
  },
  {
    'id': '5',
    'url': './images/hanna.jpeg'
  },
  {
    'id': '6',
    'url': './images/outlander.jpg'
  },
  {
    'id': '7',
    'url':'./images/spartacus.jpg'
  }   
]

let horas = new Date();
let hora =  horas.getHours;

//Alterar o fundo de acordo com as horas do dia:
if(hora >= 1 && hora <= 12){
  document.body.style.backgroundColor = 'white';
}else if(hora > 12 && hora <= 18){
  document.body.style.backgroundColor = '#b9846f';
}else{
  document.body.style.backgroundColor = '#1e1a1a';
}

const containerItems = document.querySelector('#container-items');

const loadImages = (images, container) => {
  images.forEach(image => {
    container.innerHTML += `
      <div class="item">
      <img src="${image.url}">   
      </div>
    `; 
  })
};

loadImages(images, containerItems);
//itens do slide. 
let items = document.querySelectorAll('.item');
let text = document.getElementById('text');

let transition = () =>{
  text.style.marginTop = '33%';
  text.style.marginLeft = '40px';
  text.style.transitionProperty = 'all'; 
  text.style.transitionTimingFunction = 'ease-in';
  
}

const previous = () =>{
  /*appendChild sempre vai adicionar no final*/
  containerItems.appendChild(items[0])
  /*Deve-se tembém atualizar novamente a lista, chamando-a.*/
  items = document.querySelectorAll('.item');
}

const next = () =>{
  const lastItem = items[items.length - 1];
  containerItems.insertBefore(lastItem, items[0]);
  items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);

//Troca de imagem automática:
var sliderAuto = setInterval(next, 4000);