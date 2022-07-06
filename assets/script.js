// Javascript file for Project 1
/*
var imdbApiKey = 'k_td78lkkw';
var omdbUrl = 'https://www.omdbapi.com/';
var omdbApiKey = '?apikey=f40119aa';
var omdbTitle = '&t=Nope';
var omdbYear = '&y=2022';
var omdbPlot = '&plot=full';
*/

var movieSearchBaseURL = 'https://advanced-movie-search.p.rapidapi.com/discover/movie?';
var movieSearchAPIKey = 'rapidapi-key=a06e749de5mshd10ecfc282b3b9fp1ee828jsn6b27a3f8a15b';
var movieSearchGenreId = '&with_genres=';

var requestURL; // = 'https://advanced-movie-search.p.rapidapi.com/discover/movie?rapidapi-key=a06e749de5mshd10ecfc282b3b9fp1ee828jsn6b27a3f8a15b&with_genres=27'

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
    //TV Movie: 10770,
    Thriller: 53,
    War: 10752,
    Western: 37,
};

function getAPI(){
    var selectedGenre = $('#selection').val();
    var genreId = genreIds[selectedGenre];
    requestURL = movieSearchBaseURL + movieSearchAPIKey + movieSearchGenreId + genreId;
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

function generateCards(result) {
  let movieContainer = document.getElementById("movie-container");
  //movieContainer.innerHTML = '';
        // console.log('Title: ' + result.title);
        let movieCard = document.createElement("article");
        let movieTitle = document.createElement("h3");
        movieTitle.textContent = result.title;
        // console.log('Year: ' + result.release_date);
        let movieYear = document.createElement("p");
        var formattedYear = moment(result.release_date).format('YYYY');
        movieYear.textContent = formattedYear;
        // console.log('Id: ' + result.id);
        // console.log('Rating: ' + result.vote_average);
        let movieRating = document.createElement("p");
        movieRating.textContent = result.vote_average;
        
        movieCard.appendChild(movieTitle);
        movieCard.appendChild(movieYear);
        movieCard.appendChild(movieRating);
        movieContainer.appendChild(movieCard);
}

$('#search').on('click', function () {
    clearResults();
    getAPI();
}) 

// get a random number from the array length
function getRandomNumber(max) {
    var min = Math.ceil(0);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
}

var number = getRandomNumber(20);
console.log(number);

// add favorites button
function addToFavorites() {
  var addButton = document.querySelector("#add");
  var favorites = localStorage.getItem("favorites");

  addButton.addEventListener("click", function() {
  
  })
}

function clearResults() {
    let movieContainer = document.getElementById("movie-container");
    movieContainer.innerHTML = '';
}

