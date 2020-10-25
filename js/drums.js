function playSound(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0;

    audio.play();
    key.classList.add('playing');
}

function clickedSound() {
    const kick = document.querySelector('#kick');
    const hihat = document.getElementById('hihat');
    const clap = document.getElementById('clap');
    const snare = document.getElementById('snare');
    const cowbell = document.getElementById('cowbell');
    const tom = document.getElementById('tom');
    const zap = document.getElementById('zap');
    const crash = document.getElementById('crash');
    const laser = document.getElementById('laser');


    if (!kick && !hihat && !crash && !clap && !snare && !cowbell && !tom && !zap && !laser) return;
    kick.currentTime = 0;
    hihat.currentTime = 0;
    crash.currentTime = 0;
    clap.currentTime = 0;
    zap.currentTime = 0;
    laser.currentTime = 0;
    snare.currentTime = 0;
    tom.currentTime = 0;
    cowbell.currentTime = 0;

    // kick.play();
    // hihat.play();
    // clap.play();
    // snare.play();
    // cowbell.play();
    // tom.play();
    // zap.play();
    // crash.play();
    // laser.play();


    key.classList.add('playing');

}


function removeTransition(g) {

    if (g.propertyName !== 'transform') return;
    this.classList.remove('playing');
}



const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
document.addEventListener('keydown', playSound);