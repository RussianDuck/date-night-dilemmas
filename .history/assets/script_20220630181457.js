// Javascript file for Project 1
var imdbApiKey = 'k_td78lkkw';

var omdbUrl = 'https://www.omdbapi.com/';
var omdbApiKey = '?apikey=f40119aa';
var omdbTitle = '&t=Nope';
var omdbYear = '&y=2022';
var omdbPlot = '&plot=full';

var requestURL = omdbUrl+omdbApiKey+omdbTitle+omdbYear+omdbPlot;

fetch(requestURL)
    .then(finction (response) {
        return response.json();
    })
    .then (function (data){
        data.forEach (function(){
            console.log(data.)
        })
    })