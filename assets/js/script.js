var tmdbAPIKey = "1564618e239b625cf432bde81f3e2494"
// var movie = will be the result of the randomly generated movie




function getMovie() {
  fetch('https://api.themoviedb.org/3/discover/movie?api_key=1564618e239b625cf432bde81f3e2494&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=500&with_watch_monetization_types=flatrate')
    .then(response => response.json())
    .then(data => console.log(data));

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

