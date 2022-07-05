// Javascript file for Project 1
var imdbApiKey = 'k_td78lkkw';

var omdbUrl = 'https://www.omdbapi.com/';
var omdbApiKey = '?apikey=f40119aa';
var omdbTitle = '&t=Nope';
var omdbYear = '&y=2022';
var omdbPlot = '&plot=full';

// var requestURL = omdbUrl+omdbApiKey+omdbTitle+omdbYear+omdbPlot;
// var requestURL = 'http://www.omdbapi.com/?apikey=f40119aa&t=Top+Gun%3A+Maverick&y=2022&plot=full'
var requestURL = 'http://www.omdbapi.com/?apikey=f40119aa&s=&type=movie&y=2022&y=2022'

function getAPI(){
fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      //data.forEach(result => {
      //for(var i = 0; i<data.length; i++) {  
        console.log('Title: ' + data.Title);
        console.log('Year: ' + data.Year);
        console.log('Rated: ' + data.Rated);
        console.log('Genre: ' + data.Genre);
      //};
    });
}

getAPI();