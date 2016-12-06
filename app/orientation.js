function printOrientation() {
    var titleLR;
    var titleFB;
    var direction;
    
    if (window.DeviceOrientationEvent) {
        console.log("orientation supported")
        window.addEventListener('deviceorientation', function(event) {
           titleLR = event.gamma.toFixed(2); // right-to-left
           titleFB =  event.beta.toFixed(2); // front-to-back
           direction = event.alpha.toFixed(2);
        });
    }
    
    setInterval(function() {
        var lrVal = titleLR;
        var outputEl = document.getElementById('device-orientation');
        outputEl.innerHTML = '<b><br>Orientation:</b>'
           + ' LR: ' + lrVal + ' FB: ' + titleFB + ' direction: ' + direction
    }, 1/3000);
}
