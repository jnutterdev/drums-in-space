
function setup() {
    createCanvas(2000, 170);
    frameRate(30)
    background(0)
    line(50, 50, 500, height);
    fill(127)
    stroke(500)
    createLoop({
        gif: {fileName: "noiseLoop1d.gif", render: false},
        noiseRadius: 0.2 
        
    })
    
   /*  document.getElementById('defaultCanvas0').classList.add('visualizer'); */
   
}

function draw() {
    background(26, 31, 36)
    translate(5, height/2);
    const distributionFrequency = 0.03
    for (let x = 0; x < width; x++) {
        const y = animLoop.noise1D(x * distributionFrequency) * height /2
        ellipse(x, y, 3)
    }
    
    
}

