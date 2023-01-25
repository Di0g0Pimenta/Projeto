// Armazena a chave da API e as URLs da API de estatísticas e mestria de campeão
let key = "?api_key=RGAPI-1d252bd7-5cbb-4a88-a5b5-0c603e798f87";
let urlAPIStats = "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/";
let urlApiMasteries = "https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/";

// Concatena o ID do invocador armazenado no armazenamento local com a chave da API e as URLs para obter as URLs de chamada à API de estatísticas e mestria de campeão
let urlFinishStats = urlAPIStats + localStorage.getItem("id") + key;
let urlFinishMasteries = urlApiMasteries + localStorage.getItem("id") + key;

// Atualiza os elementos da página com o nome de invocador e o nível armazenados no armazenamento local
document.getElementById("nickName").innerHTML = localStorage.getItem("name")
document.getElementById("level").innerHTML = localStorage.getItem("level")

// Faz uma chamada à API de estatísticas de finalização de partida
fetch(urlFinishStats)
	.then(response => response.json())
	.then(response => {
		//console.log(response[0])
		// Atualiza os elementos da página com as estatísticas de finalização de partida
		document.getElementById("tier").innerHTML = response[0].tier;
		//document.getElementById("wins").innerHTML = response[0].wins;
		//document.getElementById("losses").innerHTML = response[0].losses;
		document.getElementById("myChart").innerHTML = ((response[0].wins / (response[0].wins + response[0].losses)) * 100).toFixed(1) + "%";

		var total = response[0].wins + response[0].losses;
		//var winPercentage = (response[0].wins / total) * 100;
		var lossPercentage = (response[0].losses / total) * 100;
		document.getElementById("myChart").style.setProperty("--percentage", "WR: " + lossPercentage + "%");

		switch (response[0].tier) {
			case "BRONZE":
				document.getElementById("IconTier").innerHTML = '<img src="/image/ranked-emblems/Emblem_Bronze.png">';
				break;
			case "CHALLENGER":
				document.getElementById("IconTier").innerHTML = '<img src="/image/ranked-emblems/Emblem_Challenger.png">';
				break;
			case "DIAMOND":
				document.getElementById("IconTier").innerHTML = '<img src="/image/ranked-emblems/Emblem_Diamond.png">';
				break;
			case "GOLD":
				document.getElementById("IconTier").innerHTML = '<img src="/image/ranked-emblems/Emblem_Gold.png">';
				break;
			case "GRANDMASTER":
				document.getElementById("IconTier").innerHTML = '<img src="/image/ranked-emblems/Emblem_Grandmaster.png">';
				break;
			case "IRON":
				document.getElementById("IconTier").innerHTML = '<img src="/image/ranked-emblems/Emblem_Iron.png">';
				break;
			case "MASTER":
				document.getElementById("IconTier").innerHTML = '<img src="/image/ranked-emblems/Emblem_Master.png">';
				break;
			case "PLATINUM":
				document.getElementById("IconTier").innerHTML = '<img src="/image/ranked-emblems/Emblem_Platinum.png">';
				break;
			case "SILVER":
				document.getElementById("IconTier").innerHTML = '<img src="/image/ranked-emblems/Emblem_Silver.png">';
				break;
		}

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
						localStorage.setItem("Value", value);
					}
					// Se o ID do campeão atual corresponder ao ID armazenado no armazenamento local, atualiza o elemento da página com o nome do campeão
					if (value.key == localStorage.getItem("championId")) {
						document.getElementById("championMasteries").innerHTML = '<a href="../Pages/Masteries-champions-stats.html" id="championMasteries" style="color: black !important;">' + value.name + '</a>';
						localStorage.setItem("championName", value.name)
					}
				}
			});

		// Cria uma variável para armazenar o IconID do invocador
		let iconId = localStorage.getItem("icon");

		// Cria uma variável para armazenar o link da imagem do ícone do invocador
		let iconUrl = "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/" + iconId + ".png";

		// Atribui a imagem do link ao elemento com o ID "IconID" do arquivo HTML
		document.getElementById("IconID").innerHTML = '<img src="' + iconUrl + '">';

		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'a753563a18msh7a9137445add32bp1cbbd4jsn380619d2fca7',
				'X-RapidAPI-Host': 'league-of-legends-stats.p.rapidapi.com'
			}
		};

		fetch('https://league-of-legends-stats.p.rapidapi.com/champions/stats', options)
			.then(response => response.json())
			.then(response => {
				// console.log(response);
				for (let i = 0; i < response.length; i++) {
					// console.log(response[i].name);
					if (localStorage.getItem("championName") === response[i].name) {
						console.log(response[i]);
						localStorage.setItem("ability_haste", response[i].ability_haste);
						localStorage.setItem("ability_power", response[i].ability_power);
						localStorage.setItem("armor", response[i].armor);
						localStorage.setItem("armor_gain_per_lvl", response[i].armor_gain_per_lvl);
						localStorage.setItem("attack_damage", response[i].attack_damage);
						localStorage.setItem("attack_damage_gain_per_lvl", response[i].attack_damage_gain_per_lvl);
						localStorage.setItem("attack_speed", response[i].attack_speed);
						localStorage.setItem("attack_speed_gain_per_lvl", response[i].attack_speed_gain_per_lvl);
						localStorage.setItem("crit", response[i].crit);
						localStorage.setItem("hp", response[i].hp);
						localStorage.setItem("hp_gain_per_lvl", response[i].hp_gain_per_lvl);
						localStorage.setItem("hp_regen", response[i].hp_regen);
						localStorage.setItem("hp_regen_gain_per_lvl", response[i].hp_regen_gain_per_lvl);
						localStorage.setItem("magic_resist", response[i].magic_resist);
						localStorage.setItem("magic_resist_gain_per_lvl", response[i].magic_resist_gain_per_lvl);
						localStorage.setItem("mana", response[i].mana);
						localStorage.setItem("mana_gain_per_lvl", response[i].mana_gain_per_lvl);
						localStorage.setItem("mana_regen", response[i].mana_regen);
						localStorage.setItem("mana_regen_gain_per_lvl", response[i].mana_regen_gain_per_lvl);
						localStorage.setItem("movement_speed", response[i].movement_speed);
						localStorage.setItem("range", response[i].range);
					}
				}
			})
			.catch(err => console.error(err));
	})
