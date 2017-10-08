import Stats from 'stats.js'

window.onload = () => {
    var stats = new Stats();

    document.body.appendChild(stats.dom);

    requestAnimationFrame(function loop() {
        stats.update();
        requestAnimationFrame(loop)
    });
};
