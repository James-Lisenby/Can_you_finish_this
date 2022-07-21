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
    if (e.target.checked) {
        console.log("checked");
        excludeSciFi = true;
    } else {
        console.log("Unchecked");
        excludeSciFi = false;
    }
});

var excludeHorror = false;
HorrorEl.addEventListener('change', e => {
    if (e.target.checked) {
        console.log("checked");
        excludeHorror = true;
    } else {
        console.log("Unchecked");
        excludeHorror = false;
    }
});

var excludeComedy = false;
ComedyEL.addEventListener('change', e => {
    if (e.target.checked) {
        console.log("checked");
        excludeComedy = true;
    } else {
        console.log("Unchecked");
        excludeComedy = false;
    }
});

var excludeAction = false;
ActionEL.addEventListener('change', e => {
    if (e.target.checked) {
        console.log("checked");
        excludeAction = true;
    } else {
        console.log("Unchecked");
        excludeAction = false;
    }
});

var excludeRomance = false;
RomanceEL.addEventListener('change', e => {
    if (e.target.checked) {
        console.log("checked");
        excludeRomance = true;
    } else {
        console.log("Unchecked");
        excludeRomance = false;
    }
});

var excludeDrama = false;
DramaEL.addEventListener('change', e => {
    if (e.target.checked) {
        console.log("checked");
        excludeDrama = true;
    } else {
        console.log("Unchecked");
        excludeDrama = false;
    }
});

// Function to check which genres have been marked for exclusion
function checkGenres() {

    withoutGenre = "";

    // Create an empty array to store genre ids
    var genreids = [];

    // Movie Genre id from API
    if (excludeSciFi) {
        // withoutGenre = withoutGenre.concat("878") 
        // Add/push the Sci Fi ID to the array list
        genreids.push("878");
    }
    if (excludeHorror) {
        // withoutGenre = withoutGenre.concat("27")
        genreids.push("27");
    }
    if (excludeComedy) {
        //withoutGenre = withoutGenre.concat("35")
        genreids.push("35")
    }
    if (excludeAction) {
        // Add action id
        //withoutGenre = withoutGenre.concat("28")
        genreids.push("28")
    }
    if (excludeRomance) {
        //withoutGenre = withoutGenre.concat("10749")
        genreids.push("10749")
    }
    if (excludeDrama) {
        // withoutGenre = withoutGenre.concat("18")
        genreids.push("18")
    }

    // IF we have any genres in the list
    if (genreids.length) {
        // THEN build the query string
        withoutGenre = "&without_genre=" // Join the list of genre ids separated by commas;
        console.log(withoutGenre);
    }

}

// retrieves NYT movie
function getReview() {
    var requestUrl = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?&api-key=';

// API Key for The NY Times
    var nyTimesAPIKey = "TrbXriO3tWFp4GHZ2qMXxaxw0jKnJQwP";
    fetch(requestUrl + nyTimesAPIKey)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            $("#quote-area").empty()
            console.log(data)
            let index = Math.floor(Math.random() * data.results.length)
            var review = data.results[index].summary_short
            var reviewBox = document.createElement("p")
            reviewBox.setAttribute("id", "review-box")
            reviewBox.textContent = review
            $("#quote-area").append(reviewBox)
        })
        .catch(function () {
            console.log('Error')
        })
}


// retrieves the worst movie and its poster image.
function getMovie() {

    var tmdbAPIKey = "1564618e239b625cf432bde81f3e2494";
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=` + tmdbAPIKey + `&with_original_language=en&include_adult=false&sort_by=` + `popularity.asc` + `&include_video=false&page=1&with_watch_monetization_types=flatrate` + withoutGenre)
        .then(function (response) {
            return response.json()
        })
        .then(function randomrender(data) {
            $("#title-display").empty()
            $("#poster-display").empty()
            let index = Math.floor(Math.random() * data.results.length)
            let movie = data.results[index]
            console.log("movie thing", movie);
            var myTitle = document.createElement('p');

            myTitle.textContent = movie.original_title;

            var myPoster = document.createElement('img');

            myPoster.setAttribute("id", "poster-URL");

            // myPoster.setAttribute("href", ""data.results[i].)

            if (!movie.poster_path) {
                myPoster.src = "assets/images/blank-movie-poster_1989181.jpg"
            } else { myPoster.src = `https://image.tmdb.org/t/p/w500` + movie.poster_path; }


            $("#title-display").append(myTitle);
            $("#poster-display").append(myPoster);
        })

    //     function(data) {
    //     console.log(data.results)
    //     $("#title-display").empty()
    //     $("#poster-display").empty()

    // for (var i = 0; i < 1; i++){
    // (data.results[Math.floor(Math.random() * data.results.length)]);

    //     var myTitle = document.createElement('p');



// API Key for The Movie Database:
var tmdbAPIKey = "1564618e239b625cf432bde81f3e2494";

// API Call
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=` + tmdbAPIKey + `&with_original_language=en&include_adult=false&sort_by=` + `popularity.asc` + `&include_video=false&page=1&with_watch_monetization_types=flatrate` + withoutGenre)

    .then(function(response) {
        return response.json()
    })
    .then(function randomrender(data) {

// Making sure the divs are emptied before printing new info
    $("#title-display").empty();
    $("#poster-display").empty();

// Cycling through the results sent to us in response to our query
    let index = Math.floor(Math.random() * data.results.length);
    let movie = data.results[index];
    console.log("Movie Info", movie);

// Creating title Element and adding its text and id
    var myTitle = document.createElement('p');
    myTitle.setAttribute("id", "title-text");
    myTitle.textContent = movie.original_title;

// Creating movie poster Element and adding its id
    var myPoster = document.createElement('img');
    myPoster.setAttribute("id","poster-URL");

// Assigning the actual poster image to the img element, if it exists. If not, assigning a generic poster
    if (!movie.poster_path){
        myPoster.src = "assets/images/blank-movie-poster_1989181.jpg"
    } else {myPoster.src = `https://image.tmdb.org/t/p/w500` + movie.poster_path};
        
// appending the new elements to the existing divs
        $("#title-display").append(myTitle);
        $("#poster-display").append(myPoster);
    })

}

generateBtnEl = document.getElementById("generateBtn");

//Listener for the Random Movie button
generateBtnEl.addEventListener('click', () => {
    getReview()
    checkGenres()
    getMovie()
    console.log("Random Movie clicked");
});



// var movie = will be the result of the randomly generated movie


// Generates random movie.





var saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener('click', addToList);




function storeRandomMovie() {
    // var randomMovie = results of randomley generated movie,
    localStorage.setItem('randomMovie', JSON.stringify(randomMovie));
}


function addToList() {
    var returnValue = document.getElementById('title-display').textContent;
    listNode = document.getElementById("savedList"),
        liNode = document.createElement("li"),
        txtNode = document.createTextNode(returnValue);
    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);
    storeSaved();

};


function storeSaved() {
    savedMovies = document.getElementById('savedList').textContent;
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));

};


function renderList() {
    var savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    listNode = document.getElementById("savedList"),
        liNode = document.createElement("li"),
        txtNode = document.createTextNode(savedMovies);
    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);

};

window.addEventListener('load', renderList);