function random(){
    const adivinha = Math.random() 
    return Math.floor(adivinha);
}
const min = 0
const max = 50
let contador = random(min,max)

while(contador !== 10){
    contador = random(min,max)
    console.log(contador)}