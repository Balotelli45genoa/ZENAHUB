

let foglio = document.getElementById('foglio');

let disegno = foglio.getContext('2d');

disegno.fillStyle = 'yellow'

disegno.fillRect(150,250,100,200)

disegno.fillStyle = 'green'

disegno.fillRect(200,250,200,100)

disegno.fillStyle = 'red'

disegno.fillRect(100,150,100,200)