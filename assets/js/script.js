var tmdbAPIKey = "1564618e239b625cf432bde81f3e2494"


// retrieves list of movies from worst to best.
fetch('https://api.themoviedb.org/3/discover/movie?api_key=1564618e239b625cf432bde81f3e2494&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=500&with_watch_monetization_types=flatrate')
  .then(response => response.json())
  .then(data => console.log(data));


