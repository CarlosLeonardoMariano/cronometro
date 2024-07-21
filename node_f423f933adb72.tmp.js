  function relogio(){
    let data = new Date()
    return data.toLocaleTimeString('pt-BR',{
    hour24:false})
}
setInterval(function(){console.log(relogio())},1000)


