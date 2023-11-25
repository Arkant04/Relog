function copiarHoraActual(texto) {
  navigator.clipboard.writeText(texto)
    .then(() => {
      console.log('Hora copiada al portapapeles: ' + texto);
    })
    .catch(err => {
      console.error('Error al copiar al portapapeles: ', err);
    });
}
const reloj = document.querySelector("#reloj")
reloj.addEventListener('click', clicEnReloj);
function clicEnReloj() {
  copiarHoraActual(updateHours());
}

  

function select(tag){
const val = document.querySelector(tag)
return val

}

function updateTag(tag, contenido){
const mi_tag = select(tag)
mi_tag.innerHTML = contenido
}

function updateHours(){
const now = new Date();
const options = { hour: '2-digit', minute: '2-digit', second:'2-digit', hour12: false };
const horaEnFormato24Horas = now.toLocaleTimeString('es-ES', options);
const [hora, minuto, segundo] = horaEnFormato24Horas.split(":")

updateTag("#horas", hora)
updateTag("#minutos", minuto)
updateTag("#segundos", segundo)

copiarHoraActual(horaEnFormato24Horas);

}

let backgrounds =[
`https://i.kym-cdn.com/photos/images/original/002/630/918/95f.gif`,
`https://media.tenor.com/_79S5KkGf8QAAAAC/donkey-kong-mario.gif`,
`https://media1.giphy.com/media/BqijAlej4RV7O/giphy.gif?cid=6c09b952j8g6cgb4g5u18t1lpsjn37gr7lt2ai2i1das8o0z&ep=v1_gifs_search&rid=giphy.gif&ct=g`,
`https://media.tenor.com/4UOH3jyLLU4AAAAC/luigi-mario.gif`,
`https://media.tenor.com/FFqEsaG6uJsAAAAC/smg4-luigi.gif`, `https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYW1uYTZlajM1bTY1eW1ubHZuNm5zbHh1OW1icXA2b2VvbHYyMDJ6cyZlcD12MV92aWRlb3Nfc2VhcmNoJmN0PXY/vlQSRqL84RPj5BVYqz/giphy.gif`, 
]
window.onload = function() {
let SetBackGroung = Math.floor(Math.random() * backgrounds.length);
document.body.style.backgroundImage = `url(${backgrounds[SetBackGroung]})`;
}

setInterval(updateHours,500)
