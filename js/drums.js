function playSound(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function kickDrum() {
    const kick = document.getElementById('kick');
    kick.currentTime = 0;
    if (!kick) return;
    kick.play();
}

function hihatDrum() {
    const hihat = document.getElementById('hihat');
    hihat.currentTime = 0;
    if (!hihat) return;
    hihat.play();
}

function snareDrum() {
    const snare = document.getElementById('snare');
    snare.currentTime = 0;
    if (!snare) return;
    snare.play();
}

function crashDrum() {
    const crash = document.getElementById('crash');
    crash.currentTime = 0;
    if (!crash) return;
    crash.play();
}

function clapdrum() {
    const clap = document.getElementById('clap');
    clap.currentTime = 0;
    if (!clap) return;
    clap.play();
}

function tomDrum() {
    const tom = document.getElementById('tom');
    tom.currentTime = 0;
    if (!tom) return;
    tom.play();
}

function cowbellDrum() {
    const cowbell = document.getElementById('cowbell');
    cowbell.currentTime = 0;
    if (!cowbell) return;
    cowbell.play();
}

function zapDrum() {
    const zap = document.getElementById('zap');
    zap.currentTime = 0;
    if (!zap) return;
    zap.play();
}

function laserDrum() {
    const laser = document.getElementById('laser');
    laser.currentTime = 0;
    if (!laser) return;
    laser.play();
}


function removeTransition(g) {

    if (g.propertyName !== 'transform') return;
    this.classList.remove('playing');
}



const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
document.addEventListener('keydown', playSound);