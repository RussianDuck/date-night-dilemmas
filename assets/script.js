var movieContainerEl = document.getElementById("movie-container");

var movieSearchBaseURL = 'https://advanced-movie-search.p.rapidapi.com/discover/movie?';
var movieSearchAPIKey = 'rapidapi-key=a06e749de5mshd10ecfc282b3b9fp1ee828jsn6b27a3f8a15b';
var movieSearchGenreId = '&with_genres=';

const genreIds = {
    Action: 28,
    Adventure: 12,
    Animation: 16,
    Comedy: 35,
    Crime: 80,
    Documentary: 99,
    Drama: 18,
    Family: 10751,
    Fantasy: 14,
    History: 36,
    Horror: 27,
    Music: 10402,
    Mystery: 9648,
    Romance: 10749,
    SciFi: 878,
    Thriller: 53,
    War: 10752,
    Western: 37,
};

function getMovies(){
    var genreId = genreIds[$('#selection').val()];
    var requestURL = movieSearchBaseURL + movieSearchAPIKey + movieSearchGenreId + genreId;
    console.log('requestURL: ' + requestURL);
    fetch(requestURL)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        // Use the console to examine the response
        console.log(data);
        for (var i = 0; i<3; i++) {
            var index = getRandomNumber(20);
            console.log('index: ' + index)
            generateCards(data.results[index]);
        }
        });
}


function getRecipes() {
    // https://rapidapi.com/forlucas27/api/random-recipes/
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a06e749de5mshd10ecfc282b3b9fp1ee828jsn6b27a3f8a15b',
            'X-RapidAPI-Host': 'random-recipes.p.rapidapi.com'
        }
    };
    
    fetch('https://random-recipes.p.rapidapi.com/ai-quotes/1', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

function getCocktail() {
    // https://rapidapi.com/Bmbus/api/cocktails3/
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a06e749de5mshd10ecfc282b3b9fp1ee828jsn6b27a3f8a15b',
            'X-RapidAPI-Host': 'cocktails3.p.rapidapi.com'
        }
    };
    
    fetch('https://cocktails3.p.rapidapi.com/random', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

function generateCards(result) {
    let movieCard = document.createElement("article");
    let movieTitle = document.createElement("h3");
    movieTitle.textContent = result.title;
    let movieYear = document.createElement("p");
    var formattedYear = moment(result.release_date).format('YYYY');
    movieYear.textContent = 'Year Released: ' + formattedYear;
    let movieRating = document.createElement("p");
    movieRating.textContent = 'Rating: ' + result.vote_average;
    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieYear);
    movieCard.appendChild(movieRating);
    movieContainerEl.appendChild(movieCard);
}

$('#search').on('click', function () {
    clearResults();
    getMovies();
    getRecipes();
    getCocktail();
}) 

// get a random number from the array length
function getRandomNumber(max) {
    var min = Math.ceil(0);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
}

// add favorites button
function addToFavorites() {
  var addButton = document.querySelector("#add");
  var favorites = localStorage.getItem("favorites");

  addButton.addEventListener("click", function() {
  
  })
}

function clearResults() {
    movieContainerEl.innerHTML = '';
}