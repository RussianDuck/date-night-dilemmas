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

var requestURL = 'https://advanced-movie-search.p.rapidapi.com/discover/movie?rapidapi-key=a06e749de5mshd10ecfc282b3b9fp1ee828jsn6b27a3f8a15b&with_genres=27'

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
    fetch(requestURL)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        // Use the console to examine the response
        console.log(data);
        generateCards(data.results);
        });
}

function generateCards(results) {
  let movieContainer = document.getElementById("movie-container");
  movieContainer.innerHTML = '';
  results.forEach(result => { 
        console.log('Title: ' + result.title);
        let movieCard = document.createElement("article");
        let movieTitle = document.createElement("h3");
        movieTitle.textContent = result.title;
        console.log('Year: ' + result.release_date);
        let movieYear = document.createElement("p");
        movieYear.textContent = result.release_date;
        console.log('Id: ' + result.id);
        console.log('Rating: ' + result.vote_average);
        let movieRating = document.createElement("p");
        movieRating.textContent = result.vote_average;
        movieContainer.appendChild(movieCard);
        movieCard.appendChild(movieTitle);
        movieCard.appendChild(movieYear);
        movieCard.appendChild(movieRating);
    });
}

$('#search').on('click', function () {
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

const dinnerOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8c97389987msh6d23c292611734dp107e9bjsneac2ea684be8',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};

fetch('https://edamam-recipe-search.p.rapidapi.com/search?q=chicken', dinnerOptions)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

// add-to favorites button
function addToFavorites() {
  var addButton = document.querySelector("#add");
  var favorites = localStorage.getItem("favorites");

  addButton.addEventListener("click", function() {
  
  })
}