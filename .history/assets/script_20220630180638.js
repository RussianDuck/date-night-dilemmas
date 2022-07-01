// Javascript file for Project 1
var imdbApiKey = 'k_td78lkkw';

var omdbUrl = 'https://www.omdbapi.com/';
var omdbApiKey = '?apikey=f40119aa';
var omdbTitle = '&t=Nope';
var omdbYear = '&y=2022';
var omdbPlot = '&plot=full';

var request = omdbUrl+omdbApiKey+omdbTitle+omdbYear+omdbPlot;

//fetch()

function test() {
    console.log(request);
}

test();