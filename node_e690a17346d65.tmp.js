function random(){
    const adivinha = Math.random() 
    return Math.floor(adivinha);
}
const min = 0
const max = 50
let contador = random()

while(contador !== 10){
    contador = random()
    console.log(contador)
contador++}