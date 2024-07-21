  function relogio(){
    let data = new Date()
    return data.toLocaleTimeString('pt-BR',{
    hour12:false
  })
}
setInterval(function(){
    console.log(relogio())}
,1000)


