const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");

const drumKit = [
    new Tone.Player("../sounds/kick.wav"),
    new Tone.Player("../sounds/clap.wav"),
    new Tone.Player("../sounds/hihat.wav")
];

drumKit.forEach(drum => drum.toMaster());

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


Tone.loaded().then(() => {
    startButton.addEventListener('click', () => {
        Tone.Transport.setLoopPoints(0, "1m");
        Tone.Transport.bpm.rampTo(110);
        Tone.Transport.scheduleRepeat(repeat, '8n');
        Tone.Transport.start();
    });

    stopButton.addEventListener('click', () => {
        Tone.Transport.stop();
    });

});