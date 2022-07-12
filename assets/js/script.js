var tmdbAPIKey = "1564618e239b625cf432bde81f3e2494"

var searchResults = []


// retrieves list of movies from worst to best.
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



// saves favorites to local storage

