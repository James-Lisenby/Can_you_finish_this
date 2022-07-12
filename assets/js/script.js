var tmdbAPIKey = "1564618e239b625cf432bde81f3e2494"
// var movie = will be the result of the randomly generated movie

var searchResults = []

// retrieves list of movies from worst to best.
function getMovie() {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=` + tmdbAPIKey + `&language=en-US&include_adult=false&sort_by=` + `popularity.asc` + `&include_video=false&page=500&with_watch_monetization_types=flatrate&poster_path=true`)
  .then(response => response.json())
  .then(data => console.log(data))
  .then(function(data){
    for (var i=0; i<20;i++ ){

        var myTitle = document.createElement('h3');

        myTitle.textContent = data.results[i].title;

        var myPosterURL = document.createElement('img');

        myPosterURL.src = `https://image.tmdb.org/t/p/original` + data.results[i].poster_path;

        $("#result-display").appendChild(myTitle).append(myPosterURL);

    }
  })
  
  
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

