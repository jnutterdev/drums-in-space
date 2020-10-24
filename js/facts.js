
//pull the data from the API

fetch('https://api.le-systeme-solaire.net/rest/bodies/') 
    .then((response) => response.json()) // translate data to Json
    .then((data) => { 
        document.getElementById('space-fact').innerHTML = (renderSpaceFacts(data)); // display the space facts 
            
    });

let renderSpaceFacts = (spaceArray) => {
    let randomArrayItem = Math.floor((Math.random() * 286) +1); // choose random number to find that item in array 
    return `
    <h3><b>SPACE FACT OF THE DAY</b></h3>
            The planet ${spaceArray.bodies[randomArrayItem].englishName} was discovered by ${spaceArray.bodies[randomArrayItem].discoveredBy} and is called "${spaceArray.bodies[randomArrayItem].id}" in French.
    `
}



