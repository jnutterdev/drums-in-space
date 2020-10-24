
//pull the data from the API

fetch('http://api.open-notify.org/astros.json') 
    .then((response) => response.json()) // translate data to Json
    .then((data) => { 
        document.getElementById('space-fact').innerHTML = (renderPeopleInSpaceFacts(data)); // display the space facts 
            
    });

let renderPeopleInSpaceFacts = (peopleInSpace) => {
    return `
    
    <h3><b>HOW MANY PEOPLE ARE IN SPACE RIGHT NOW?</b></h3>
        <p>There are currently ${peopleInSpace.number} people in space. Unfortunately, none of them made this page.</p>
    
    `
}



