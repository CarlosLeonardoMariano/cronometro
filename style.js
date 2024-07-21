function criarSegundo(segundos){
  let data = new Date(segundos*1000);
  return data.toLocaleTimeString('pt-BR',{
    hour12:false,
    timeZone:'UTC'
  })
}

let relogio = document.querySelector('.relogio')
let iniciar = document.querySelector('.iniciar')
let pausar = document.querySelector('.pausar')
let zerar = document.querySelector('.zerar')
let segundos = 0;
let timer;

function iniciarRelogio(){
  timer = setInterval(function(){
    segundos++
    relogio.innerHTML = criarSegundo(segundos)},1000)
}
document.addEventListener('click',function(evento){
  console.log(evento.target)
})



iniciar.addEventListener('click',function(evento){
  relogio.classList.remove('pausado')
  relogio.classList.add('iniciar')
  clearInterval(timer)

 iniciarRelogio()
})

pausar.addEventListener('click',function(evento){
  relogio.classList.add('pausado')
  relogio.classList.remove('iniciar')
  clearInterval(timer)
  


  
})

zerar.addEventListener('click',function(evento){
  clearInterval(timer)
  relogio.classList.remove('pausado')

relogio.innerHTML = `00:00:00`
segundos = 0
})