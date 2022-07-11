var tmdbAPIKey = "1564618e239b625cf432bde81f3e2494"




fetch('https://api.themoviedb.org/3/movie/550?api_key=1564618e239b625cf432bde81f3e2494')
  .then(response => response.json())
  .then(data => console.log(data));


// This url pulls movie rated from the worst to the best. Currently includeds foreign films also.
fetch('https://api.themoviedb.org/3/discover/movie?api_key=1564618e239b625cf432bde81f3e2494&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=500&with_watch_monetization_types=flatrate')
  .then(response => response.json())
  .then(data => console.log(data));



