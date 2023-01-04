let key = "?api_key=RGAPI-91ab67dd-0065-4709-a473-3d0b3c6caf56";
let urlAPIStats = "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/";
let urlApiMasteries = "https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/";
let urlFinishStats = urlAPIStats + localStorage.getItem("id") + key;
let urlFinishMasteries = urlApiMasteries + localStorage.getItem("id") + key;

document.getElementById("nickName").innerHTML = localStorage.getItem("name")
document.getElementById("level").innerHTML = localStorage.getItem("level")

function back() {
    location.href = "http://127.0.0.1:5500/Main%20Page/Index-main.html"
	localStorage.clear();
}

fetch(urlFinishStats)
	.then(response => response.json())
	.then(response => {
	//console.log(response[0])
	document.getElementById("tier").innerHTML = response[0].tier;
	document.getElementById("wins").innerHTML = response[0].wins;
	document.getElementById("losses").innerHTML = response[0].losses;
	document.getElementById("winRate").innerHTML = ((response[0].wins / (response[0].wins + response[0].losses)) * 100).toFixed(1) + "%";
	});

fetch(urlFinishMasteries)
	.then(response => response.json())
	.then(response => {
		//console.log(response[0].championId)
		localStorage.setItem("championId", parseInt(response[0].championId))
	});

fetch("http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json")
    .then(response => response.json())
    .then(response => {
        //console.log(response.data)
		
		for (let key in response.data) {
			if (response.data.hasOwnProperty(key)) {
				value = response.data[key];
				//console.log(key, value);
			}
			if (value.key == localStorage.getItem("championId")) {
			document.getElementById("championMasteries").innerHTML = value.name;
		}
		}
		
    });
















//Api 2
/*
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a753563a18msh7a9137445add32bp1cbbd4jsn380619d2fca7',
		'X-RapidAPI-Host': 'league-of-legends-stats.p.rapidapi.com'
	}
};

fetch('https://league-of-legends-stats.p.rapidapi.com/champions/ekko/stats', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
	*/