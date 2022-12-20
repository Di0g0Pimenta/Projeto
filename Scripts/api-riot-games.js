let key = "?api_key=RGAPI-2f67aec6-fa6e-412f-a507-5bb81f873b60";
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
        location.href = "http://127.0.0.1:5500/Stats%20Page/index-stats.html" + "?name=" + sumenerName.value.toLowerCase();
        
        })
        .catch(error =>{ 
            document.getElementById("erro").innerHTML = "Enter a valid SumenerName"
            //alert("error")
        });
};

function back() {
    location.href = "http://127.0.0.1:5500/Main%20Page/Index-main.html"
}


//localstorage
//cookies