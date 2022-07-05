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
        data.results.forEach(result => {
        //for(var i = 0; i<data.length; i++) {  
            console.log('Title: ' + result.title);
            console.log('Year: ' + result.release_date);
            console.log('Id: ' + result.id);
            console.log('Rating: ' + result.vote_average);
        });
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
