function copiarHoraActual(texto) {   navigator.clipboard.writeText(texto)
  .then(() => {
    console.log("La hora ha sido copiada con exito: " + texto)
      });
     const reloj = document.querySelector("#reloj")
    reloj.addEventListener('click', clicReloj);
      function clicReloj() {
   copiarHoraActual(updateHours());
    }
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
  
  setInterval(updateHours,500)