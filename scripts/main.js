document.querySelector('img').onclick = function(){
    alert('Oye! Deja de tocarme!')
}

let miImage = document.querySelector('img');
miImage.onmouseover = function(){
    let miSrc = miImage.getAttribute('src');
    if (miSrc==='images/erizo-pigmeo.jpg'){
        miImage.setAttribute('src', 'images/erizo-pigmeo-happy.jpg');
    } else {
        miImage.setAttribute('src', 'images/erizo-pigmeo.jpg')
    }
}

miImage.onmouseout = function(){
    let miSrc = miImage.getAttribute('src');
    if (miSrc==='images/erizo-pigmeo-happy.jpg'){
        miImage.setAttribute('src', 'images/erizo-pigmeo.jpg');
    } else {
        miImage.setAttribute('src', 'images/erizo-pigmeo-happy.jpg')
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.getElementById('nombre');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, dale un nombre.');
    if (!miNombre){
        estableceNombreUsuario()
    } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Su nombre es ' + miNombre;
    }
}

miBoton.style.backgroundColor = '#8080809C'
miBoton.style.color = 'white'

miBoton.onclick = function() {
    estableceNombreUsuario();
}

let Variantes = document.getElementById('variantes');
Variantes.onclick = function(){
    let mySrc = Variantes.getAttribute('src');
    if (mySrc==='images/¡ELIGE TU ERIZO!.jpg'){
        Variantes.setAttribute('src', 'images/Pigmeo.jpg');
    } 
    else if (mySrc==='images/Pigmeo.jpg') {
        Variantes.setAttribute('src', 'images/Blanco.jpg');
    } 
    else if (mySrc==='images/Blanco.jpg') {
        Variantes.setAttribute('src', 'images/Albino.jpg')
    }
    else {
        Variantes.setAttribute('src', 'images/Pigmeo.jpg')
    }
}

