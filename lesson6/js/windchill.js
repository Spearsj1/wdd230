const temp = parseFloat(document.getElementById('temp').value);
const speed = parseFloat(document.getElementById('speed').value);

function windChill() {
    if (temp <= 45 && speed >= 3) {
        const t = 45;
        const s = 5;

        const f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s,0.16);
        document.getElementById("wind").innerHTML = windChill();
    }


    else {
        document.getElementById("wind").innerHTML = "N/A";
    }
}