/* creator: Victor Galvan 
last updated: 3/30/22
description: implementing API 
*/ 
function wordSearch() {
    document.getElementById('searchResult').style.visibility = 'visible';
    var word = document.getElementById('word');
    var definition = document.getElementById('definition');
    var lookUpSomething = document.getElementById('searchBox').value;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
		'X-RapidAPI-Key': 'e69a495a83mshf629c562a0fef14p1345b5jsn64f7f6500e9e'
	}
};

fetch('https://wordsapiv1.p.rapidapi.com/words/incredible/definitions', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}