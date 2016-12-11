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

    setInterval(function() {
        var temp = Math.floor(titleFB);
        var direction = temp > 0 ? "left" : "right";
        var opposite = direction == "left" ? "right" : "left";
        var temp = Math.abs(temp);
        for (var i = 0; i <= 7; i++) {
            var num = direction == "right" ? i : 7 - i;
            if (temp > 3 && i * 11 <= temp) {
                $('span.' + direction + '-arr' + num).css('color', 'cyan');
            } else {
                $('span.' + direction + '-arr' + num).css('color', '#4e5d6c');
            }
            $('span.' + opposite + '-arr' + i).css('color', '#4e5d6c');
        }
    }, 1/3000);
}
