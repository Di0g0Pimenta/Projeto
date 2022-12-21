//console.log(localStorage.getItem("name"))
document.getElementById("nickName").innerHTML = localStorage.getItem("name")
document.getElementById("level").innerHTML = localStorage.getItem("level")


function back() {
    location.href = "http://127.0.0.1:5500/Main%20Page/Index-main.html"
}




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