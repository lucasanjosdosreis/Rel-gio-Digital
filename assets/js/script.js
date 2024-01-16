const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const seguntos = document.getElementById('segundos');

const relogio  = setInterval(function timer(){
    let dateToday = new Date();
    let hr  = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s =  dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;
    
    if(min < 10) s = '0' + min;

    if(s < 10) m = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    seguntos.textContent = s;

})