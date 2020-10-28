
function setup() {

    var canvas = createCanvas(2000, 170);
    canvas.parent('visualizer');
    frameRate(30)
    background(0)
    line(50, 50, 500, height);
    fill(100)
    stroke(500)
    createLoop({
        gif: {fileName: "noiseLoop1d.gif", render: false},
        noiseRadius: 0.2 
        
    })

}

function draw() {
    background(26, 31, 36)
    translate(5, height/1.5);
    const distributionFrequency = 0.02
    for (let x = 0; x < width; x++) {
        const y = animLoop.noise1D(x * distributionFrequency) * height /2.5
        ellipse(x, y, 3)
    }
 
    
}

