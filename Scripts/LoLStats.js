// Armazena a chave da API e as URLs da API de estatísticas e mestria de campeão
let key = "?api_key=RGAPI-e791f80a-2534-4ebc-979e-a13b47191e75";
let urlAPIStats = "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/";
let urlApiMasteries = "https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/";

// Concatena o ID do invocador armazenado no armazenamento local com a chave da API e as URLs para obter as URLs de chamada à API de estatísticas e mestria de campeão
let urlFinishStats = urlAPIStats + localStorage.getItem("id") + key;
let urlFinishMasteries = urlApiMasteries + localStorage.getItem("id") + key;

// Atualiza os elementos da página com o nome de invocador e o nível armazenados no armazenamento local
document.getElementById("nickName").innerHTML = localStorage.getItem("name")
document.getElementById("level").innerHTML = localStorage.getItem("level")

// Função que redireciona para a página principal e limpa o armazenamento local
function back() {
    location.href = "http://127.0.0.1:5500/Main%20Page/Index-main.html"
	localStorage.clear();
}

// Faz uma chamada à API de estatísticas de finalização de partida
fetch(urlFinishStats)
	.then(response => response.json())
	.then(response => {
	// Atualiza os elementos da página com as estatísticas de finalização de partida
	document.getElementById("tier").innerHTML = response[0].tier;
	document.getElementById("wins").innerHTML = response[0].wins;
	document.getElementById("losses").innerHTML = response[0].losses;
	document.getElementById("winRate").innerHTML = ((response[0].wins / (response[0].wins + response[0].losses)) * 100).toFixed(1) + "%";
	});

// Faz uma chamada à API de mestria de campeão
fetch(urlFinishMasteries)
.then(response => response.json()) 
	.then(response => {
		// Armazena o ID do campeão em questão no armazenamento local
		localStorage.setItem("championId", parseInt(response[0].championId))
	});

// Faz uma chamada à API de campeões do League of Legends
fetch("http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json")
    .then(response => response.json()) 
    .then(response => {
        // Itera sobre cada campeão
		for (let key in response.data) {
			if (response.data.hasOwnProperty(key)) {
				value = response.data[key];
				//console.log(key, value);
			}
			// Se o ID do campeão atual corresponder ao ID armazenado no armazenamento local, atualiza o elemento da página com o nome do campeão
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