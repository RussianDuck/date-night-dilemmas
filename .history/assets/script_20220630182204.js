// Javascript file for Project 1
var imdbApiKey = 'k_td78lkkw';

var omdbUrl = 'https://www.omdbapi.com/';
var omdbApiKey = '?apikey=f40119aa';
var omdbTitle = '&t=Nope';
var omdbYear = '&y=2022';
var omdbPlot = '&plot=full';

var requestURL = omdbUrl+omdbApiKey+omdbTitle+omdbYear+omdbPlot;

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then (function (data){
        data.forEach (function(){
            console.log('Title: '+data.Title);
            console.log('Year: '+data.Year);
            console.log('Rated: '+data.Rated);
            console.log('Genre: '+data.Genre);
        })
    })