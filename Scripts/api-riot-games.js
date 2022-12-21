let key = "?api_key=RGAPI-5691e5eb-3904-4b75-b701-65e343fb6510";
let urlAPI = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
let form = document.getElementById('form-sumuner');
let sumenerName = document.getElementById('text');

function submition(e) {
    e.preventDefault();

    let urlFinish = urlAPI + sumenerName.value.toLowerCase() + key;
    fetch(urlFinish)
        .then(response => response.json())
        .then(response => {
        //console.log(response)
        location.href = "http://127.0.0.1:5500/Stats%20Page/index-stats.html" /*+ "?name=" + sumenerName.value.toLowerCase()*/;
        localStorage.setItem("name", response.name)
        localStorage.setItem("level", response.summonerLevel)
        })
        .catch(error =>{ 
            document.getElementById("erro").innerHTML = "Enter a valid SumenerName"
            //alert("error")
        });
};




//localstorage
//cookies