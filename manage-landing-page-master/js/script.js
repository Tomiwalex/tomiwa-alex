var ham = document.getElementById('hamburger');
var overlay = document.getElementById('overlay');
var menu = document.getElementById('menu');


ham.addEventListener('click', addopen);

function addopen(){
    if (ham.classList.contains('open')){
        ham.classList.remove('open');
        menu.classList.remove('fade-in');
        overlay.classList.remove('fade-in');
        menu.classList.add('fade-out');
        overlay.classList.add('fade-out');
    }
    else{
        ham.classList.add('open');
        menu.classList.add('fade-in');
        overlay.classList.add('fade-in');
        menu.classList.remove('fade-out');
        overlay.classList.remove('fade-out');
    }
}