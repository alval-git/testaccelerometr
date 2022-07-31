const body = document.getElementById("body")
body.innerHTML = 2
window.addEventListener('devicemotion', function () {
        body.innerHTML = event.acceleration.x
    });