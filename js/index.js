var elem = document.documentElement;

function openFullscreen() {
    document.getElementById("btnActivar").remove();
    setInterval(ChangeBG, 180);
    var x = document.getElementById("sonido").play();        

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

function ChangeBG() {
    let R= getRndInteger(1,255);
    let G= getRndInteger(1,255);
    let B= getRndInteger(1,255);
    let BGColor = RGBToHex(R,G,B);

    document.body.style.background = BGColor;
    navigator.vibrate([getRndInteger(100,300), getRndInteger(400,500), getRndInteger(100,500),getRndInteger(10,200)]);
}
   
function RGBToHex(r,g,b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length == 1)
        r = "0" + r;
    if (g.length == 1)
        g = "0" + g;
    if (b.length == 1)
        b = "0" + b;

    return "#" + r + g + b;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function decimalToHexString(number) {
    if (number < 0){
        number = 0xFFFFFFFF + number + 1;
    }

    return number.toString(16).toUpperCase();
}

function preventBack(){
    window.history.forward();
}