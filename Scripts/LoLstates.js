let key = "a753563a18msh7a9137445add32bp1cbbd4jsn380619d2fca7";
let urlAPI = "rapidapi.com";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a753563a18msh7a9137445add32bp1cbbd4jsn380619d2fca7',
		'X-RapidAPI-Host': 'league-of-legends-stats.p.rapidapi.com'
	}
};

fetch('https://league-of-legends-stats.p.rapidapi.com/champions', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));