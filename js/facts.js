/* Saving this for now
var randomBite;
var count;
var bites = new Object();

function showRandomBite() {
	// load the data
	var myUrl = "http://astrocast.herokuapp.com/bites";
	// workaround the cross-domain getJSON issue
	var astrocastApi = "proxy.php?url=" + encodeURIComponent(myUrl);
 	var myOutput = $.getJSON(astrocastApi, function(myBites) {
 		bites = myBites;
		count = Object.keys(myBites).length;
		printRandomBite(count, bites);
	})
	.fail(function() {
		console.log('fail!');
	});
}

function printRandomBite(count, bites) {
	// empty the div
	$('#randombite').empty();
	// pick a random index
	var index = Math.floor(Math.random() * (count));
	randomBite = bites[index].name;
	// generate the google search link
	var randomBiteToURL = encodeURI('https://www.google.com/search?q=' + randomBite);
	var content = '<a href="' + randomBiteToURL + '" target="_blank">' + randomBite+ '</a>';
	// put the bite and the link into the div.
	$('#randombite').append(content);
}

$(document).ready(function() {

	showRandomBite();

	$('#randomBiteButton').click(function () {
		printRandomBite(count, bites);
	}); 
});
*/

//selects the space fact container in HTML

fetch('https://api.le-systeme-solaire.net/rest/bodies/') 
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        document.getElementById('space-fact').innerHTML =(renderSpaceFacts(data));
            
    });

let renderSpaceFacts = (spaceArray) => {
    let randomArrayItem = Math.floor((Math.random() * 286) +1);
    console.log(spaceArray);
    return `
    <h3>SPACE FACT OF THE DAY</h3>
    <div class="facts-container">
        <div class="space-fact">
            The planet ${spaceArray.bodies[randomArrayItem].englishName} was discovered by ${spaceArray.bodies[randomArrayItem].discoveredBy} and is named "${spaceArray.bodies[randomArrayItem].id}" in French.
        </div>
    </div>
    `
}



