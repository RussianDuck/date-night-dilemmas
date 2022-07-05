// Javascript file for Project 1
var imdbApiKey = 'k_td78lkkw';

var omdbUrl = 'https://www.omdbapi.com/';
var omdbApiKey = '?apikey=f40119aa';
var omdbTitle = '&t=Nope';
var omdbYear = '&y=2022';
var omdbPlot = '&plot=full';

var requestURL = omdbUrl+omdbApiKey+omdbTitle+omdbYear+omdbPlot;

function getAPI(){
fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      //data.forEach(result => {
      for(var i = 0; i<data.length; i++) {  
        console.log('Title: ' + data[i].Title);
        console.log('Year: ' + data[i].Year);
        console.log('Rated: ' + data[i].Rated);
        console.log('Genre: ' + data[i].Genre);
      };
    });
}

getAPI();