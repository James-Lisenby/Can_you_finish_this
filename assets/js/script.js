
//Variables for the exclusion checkboxes

const HorrorEl = document.getElementById('Horror');
const ComedyEL = document.getElementById('Comedy');
const ActionEL = document.getElementById('Action');
const RomanceEL = document.getElementById('Romance');
const DramaEL = document.getElementById('Drama');
const SciFiEl = document.getElementById('Sci-fi');

//User input interaction functions
var excludeSciFi = false;
checkbox = SciFiEl;
checkbox.addEventListener('change', e => {
    if (e.target.checked) {
        console.log("checked");
        excludeSciFi = true;
    } else
        console.log("Unchecked");
    excludeSciFi = false;
});

var excludeHorror = false;
checkbox = HorrorEl;
checkbox.addEventListener('change', e => {
    if (e.target.checked) {
        console.log("checked");
        excludeHorror = true;
    } else
        console.log("Unchecked");
    excludeHorror = false;
});

var excludeComedy = false;
checkbox = ComedyEL;
checkbox.addEventListener('change', e => {
    if (e.target.checked) {
        console.log("checked");
        excludeComedy = true;
    } else
        console.log("Unchecked");
    excludeComedy = false;
});

var excludeAction = false;
checkbox = ActionEL;
checkbox.addEventListener('change', e => {
    if (e.target.checked) {
        console.log("checked");
        excludeAction = true;
    } else
        console.log("Unchecked");
    excludeAction = false;
});

var excludeRomance = false;
checkbox = RomanceEL;
checkbox.addEventListener('change', e => {
    if (e.target.checked) {
        console.log("checked");
        excludeRomance = true;
    } else
        console.log("Unchecked");
    excludeRomance = false;
});

var excludeDrama = false;
checkbox = DramaEL;
checkbox.addEventListener('change', e => {
    if (e.target.checked) {
        console.log("checked");
        excludeDrama = true;
    } else
        console.log("Unchecked");
    excludeDrama = false;
});

withoutGenre = "";

// checkGenres(){
//     if (excludeSciFi){
//         withoutGenre = withoutGenre.concat("without_genre=Science%20fiction") 
//     } if (excludeHorror){
//         withoutGenre = withoutGenre.concat("without_genre=Horror") 
//     } if (excludeComedy){
//         withoutGenre = withoutGenre.concat("without_genre=Comedy")
//     } if (excludeAction){
//         withoutGenre = withoutGenre.concat("without_genre=Action")
//     } if (excludeRomance){
//         withoutGenre = withoutGenre.concat("without_genre=Romance")
//     } if (excludeDrama){}
//         withoutGenre = withoutGenre.concat("without_genre=Drama")
// }

generateBtnEl = document.getElementById("generateBtn");

//Listener for the button
generateBtnEl.addEventListener('click', () => {

    getMovie()

    console.log("Button clicked");

});

var tmdbAPIKey = "1564618e239b625cf432bde81f3e2494"
// var movie = will be the result of the randomly generated movie

var searchResults = []

// retrieves list of movies from worst to best.
function getMovie() {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=` + tmdbAPIKey + `&language=en-US&include_adult=false&sort_by=` + `popularity.asc` + `&include_video=false&page=500&with_watch_monetization_types=flatrate&poster_path=true` + withoutGenre)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data.results)
            $("#movieResult").empty()
            for (var i = 0; i < 1; i++) {

                if (!data.results[i].poster_path) {
                    continue
                }
                if (data.results[i].original_language !== "en") {
                    continue
                }
                else {
                    var myTitle = document.createElement('h3');

                    myTitle.textContent = data.results[i].title;

                    var myPoster = document.createElement('img');

                    myPoster.setAttribute("id", "poster-URL");

                    myPoster.setAttribute("alt", "Movie Poster");

                    myPoster.src = `https://image.tmdb.org/t/p/w500` + data.results[i].poster_path;


                    $("#movieResult").append(myTitle)
                    $("#posterDisplay").append(myPoster);
                }
            }
        })
}

// Generates random movie.


function storeRandomMovie() {
    // var randomMovie = results of randomley generated movie,
    localStorage.setItem('randomMovie', JSON.stringify(randomMovie));
}

function addToList() {
    var returnValue = document.getElementById(displayRandom).value,
        // displayRandom will be the value of the displaying container.
        listNode = document.getElementById("list ID"),
        liNode = document.createElement("li"),
        txtNode = document.createTextNode(returnValue);
    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);
}
// Adds result to "results" list.

