// Javascript file for Project 1
var imdbApiKey = 'k_td78lkkw';

var omdbUrl = 'https://www.omdbapi.com/';
var omdbApiKey = '?apikey=f40119aa';
var omdbTitle = '&t=Nope';
var omdbYear = '&y=2022';
var omdbPlot = '&plot=full';

 var XRapidAPIKey = 'a06e749de5mshd10ecfc282b3b9fp1ee828jsn6b27a3f8a15b';
 var XRapidAPIHost = 'advanced-movie-search.p.rapidapi.com';

// var requestURL = omdbUrl+omdbApiKey+omdbTitle+omdbYear+omdbPlot;
// var requestURL = 'http://www.omdbapi.com/?apikey=f40119aa&t=Top+Gun%3A+Maverick&y=2022&plot=full'
var requestURL = 'http://www.omdbapi.com/?apikey=f40119aa&s=horror&type=movie&y=2022'
var requestURL = 'https://advanced-movie-search.p.rapidapi.com/discover/movie?rapidapi-key=a06e749de5mshd10ecfc282b3b9fp1ee828jsn6b27a3f8a15b&with_genre=80&page=1'

function getAPI(){
fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      data.Search.forEach(result => {
      //for(var i = 0; i<data.length; i++) {  
        console.log('Title: ' + result.Title);
        console.log('Year: ' + result.Year);
        console.log('Rated: ' + result.Rated);
        console.log('Genre: ' + result.Genre);
      });
    });
}

getAPI();