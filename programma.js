

let foglio = document.getElementById('foglio');

let disegno = foglio.getContext('2d');

disegno.fillStyle = 'green'

disegno.fillRect(0,350,100,250)

disegno.fillStyle = 'blue'

disegno.fillRect(0,0,200,200)

disegno.fillStyle = 'yellow'

disegno.fillRect(100,0,400,350)

disegno.fillStyle = 'black'

disegno.fillRect(100,0,10,500)

disegno.fillStyle ='black'

disegno.fillRect(0,350,500,10)

disegno.fillStyle ='black'

disegno.fillRect(0,200,100,10)

disegno.fillStyle ='black'

disegno.fillRect(350,350,10,300)


let foglio2 = document.getElementById('foglio2');

let disegno2 = foglio2.getContext('2d');
foglio2.addEventListener('click',(evento) => {
    disegno2.strokeRect(evento.offsetX, evento.offsetY,500 * Math.random(),500 * Math.random())
});