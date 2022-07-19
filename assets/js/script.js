//Variables for the exclusion checkboxes

const HorrorEl = document.getElementById('Horror');
const ComedyEL = document.getElementById('Comedy');
const ActionEL = document.getElementById('Action');
const RomanceEL = document.getElementById('Romance');
const DramaEL = document.getElementById('Drama');
const SciFiEl = document.getElementById('Sci-fi');

//User input interaction functions
var excludeSciFi = false;
SciFiEl.addEventListener('change', e => {
    if(e.target.checked){
        console.log("checked");
        excludeSciFi = true;
    } else 
        console.log("Unchecked");
        excludeSciFi = false;
});

var excludeHorror = false;
HorrorEl.addEventListener('change', e => {
    if(e.target.checked){
        console.log("checked");
        excludeHorror = true;
    } else 
        console.log("Unchecked");
        excludeHorror = false;
});

var excludeComedy = false;
ComedyEL.addEventListener('change', e => {
    if(e.target.checked){
        console.log("checked");
        excludeComedy = true;
    } else 
        console.log("Unchecked");
        excludeComedy = false;
});

var excludeAction = false;
ActionEL.addEventListener('change', e => {
    if(e.target.checked){
        console.log("checked");
        excludeAction = true;
    } else 
        console.log("Unchecked");
        excludeAction = false;
});

var excludeRomance = false;
RomanceEL.addEventListener('change', e => {
    if(e.target.checked){
        console.log("checked");
        excludeRomance = true;
    } else 
        console.log("Unchecked");
        excludeRomance = false;
});

var excludeDrama = false;
DramaEL.addEventListener('change', e => {
    if(e.target.checked){
        console.log("checked");
        excludeDrama = true;
    } else 
        console.log("Unchecked");
        excludeDrama = false;
});

withoutGenre = "without_genre=";

function checkGenres(){
    if (excludeSciFi){
        withoutGenre = withoutGenre.concat("Science%20fiction") 
    } if (excludeHorror){
        withoutGenre = withoutGenre.concat("Horror") 
    } if (excludeComedy){
        withoutGenre = withoutGenre.concat("Comedy")
    } if (excludeAction){
        withoutGenre = withoutGenre.concat("28")
    } if (excludeRomance){
        withoutGenre = withoutGenre.concat("Romance")
    } if (excludeDrama){
        withoutGenre = withoutGenre.concat("Drama")
    } else {
        withoutGenre = ""
    }
}

var tmdbAPIKey = "1564618e239b625cf432bde81f3e2494"

// var movie = will be the result of the randomly generated movie

// Movie Review Key
var nyTimesAPIKey = "TrbXriO3tWFp4GHZ2qMXxaxw0jKnJQwP"

// retrievees movie review WORKING PROGRESS
// function getReview(){
//     fetch('https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api_key=' + nyTimesAPIKey)
//     .then(function(response) {
//         return response.json()
//     })
// }

// Generate Review
// generateBtn.addEventListener('click', () => {
//     //getReview()

//    console.log("Button clicked");
   
// });

// retrieves list of movies from worst to best.
function getMovie() {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=` + tmdbAPIKey + `&language=en&include_adult=false&sort_by=` + `popularity.asc` + `&include_video=false&page=1&with_watch_monetization_types=flatrate` + withoutGenre)
    .then(function(response) {
        return response.json()
    })
    .then(function(data){
        console.log(data.results)
        $("#movieResult").empty()

    for (var i = 0; i < 1; i++){
    (data.results[Math.floor(Math.random() * data.results.length)]);
    
        var myTitle = document.createElement('h3');

        myTitle.textContent = data.results[i].title;

        var myPoster = document.createElement('img');

        myPoster.setAttribute("id","poster-URL");

        myPoster.setAttribute("alt", "Movie Poster");

        if (!data.results[i].poster_path){
            myPoster.src = "assets/images/blank-movie-poster_1989181.jpg"
        } else {myPoster.src = `https://image.tmdb.org/t/p/w500` + data.results[i].poster_path;}
        
        
        $("#movieResult").append(myTitle)
        $("#posterDisplay").append(myPoster);
    }
    
  })
}

generateBtnEl = document.getElementById("generateBtn");

//Listener for the button
generateBtnEl.addEventListener('click', () => {
    checkGenres()
    getMovie()

    console.log("Button clicked");
    
});


// var movie = will be the result of the randomly generated movie

var searchResults = []


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

