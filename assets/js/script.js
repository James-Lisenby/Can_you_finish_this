
//Variables for the different inputs

const HorrorEl = document.getElementById('Horror');
const ComedyEL = document.getElementById('Comedy');
const ActionEL = document.getElementById('Action');
const RomanceEL = document.getElementById('Romance');
const DramaEL = document.getElementById('Drama');
const SciFiEl = document.getElementById('Sci-fi');

//User input interaction functions
ExcludeSciFi = false
checkbox = SciFiEl;
checkbox.addEventListener('change', e => {

    if(e.target.checked){
        console.log("checked");
        ExcludeSciFi = true
    } else 
        console.log("Unchecked");
});

checkbox = HorrorEl;
checkbox.addEventListener('change', e => {

    if(e.target.checked){
        console.log("checked");
        
    } else 
    console.log("Unchecked");
});
checkbox = ComedyEL;
checkbox.addEventListener('change', e => {

    if(e.target.checked){
        console.log("checked");
    } else 
    console.log("Unchecked");
});
checkbox = ActionEL;
checkbox.addEventListener('change', e => {

    if(e.target.checked){
        console.log("checked");
    } else 
    console.log("Unchecked");
});
checkbox = RomanceEL;
checkbox.addEventListener('change', e => {

    if(e.target.checked){
        console.log("checked");
    } else 
    console.log("Unchecked");
});
checkbox = DramaEL;
checkbox.addEventListener('change', e => {

    if(e.target.checked){
        console.log("checked");
    } else 
    console.log("Unchecked");
});

withoutGenre = "";

// checkGenres(){
//     if 
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
  .then(function(response) {
    return response.json()
})
  .then(function(data){
    console.log(data.results)
    $("#movieResult").empty()
    for (var i=0; i<data.results.length;i++ ){

        if (!data.results[i].poster_path){
        continue
        }
        if (data.results[i].original_language!=="en"){
            continue
            }

        var myTitle = document.createElement('h3');

        myTitle.textContent = data.results[i].title;

        var myPosterURL = document.createElement('img');

        myPosterURL.setAttribute("id","poster-URL");

        myPosterURL.setAttribute("alt", "Movie Poster");

        myPosterURL.src = `https://image.tmdb.org/t/p/w500` + data.results[i].poster_path;

        $("#movieResult").append(myTitle)
        $("#posterDisplay").append(myPosterURL);

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
    liNode = document.createElement("LI"),
    txtNode = document.createTextNode(returnValue);
  liNode.appendChild(txtNode);
  listNode.appendChild(liNode);
}
// Adds result to "results" list.

