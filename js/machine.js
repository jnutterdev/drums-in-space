const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");

const drumKit = [
    new Tone.Player("../sounds/kick.wav"),
    new Tone.Player("../sounds/hihat.wav"),
    new Tone.Player("../sounds/snare.wav"),
    new Tone.Player("../sounds/crash.wav"),
    new Tone.Player("../sounds/clap.wav"),
    new Tone.Player("../sounds/tom.wav"),
    new Tone.Player("../sounds/cowbell.wav"),
    new Tone.Player("../sounds/zap.wav")
];

drumKit.forEach(drum => drum.toDestination());

const rows = document.body.querySelectorAll('div > div'),
    notes = ['c1', 'c2', 'c3'];
let index = 0;

function repeat(time) {
    let step = index % 8;
    for (let i = 0; i < rows.length; i++) {
        let drum = drumKit[i],
            note = notes[i],
            row = rows[i],
            input = row.querySelector(`input:nth-child(${step + 1})`);
        if (input.checked) drum.start();
    }
    index++;
}

var now = Tone.now();

Tone.loaded().then(() => {
    startButton.addEventListener('click', () => {
        Tone.context.resume().then(() => {
            Tone.Transport.start(now + 0.1);
            Tone.Transport.setLoopPoints(0, "1m");
            Tone.Transport.bpm.rampTo(110);
            Tone.Transport.scheduleRepeat(repeat, '8n');
        });


    })


    stopButton.addEventListener('click', () => {
        Tone.Transport.stop(now);

    });

});