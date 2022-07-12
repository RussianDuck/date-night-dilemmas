var movieContainerEl = document.getElementById('movie-container');
var recipeContainerEl = document.getElementById('recipe-container');

var movieSearchBaseURL = 'https://advanced-movie-search.p.rapidapi.com/discover/movie?';
var movieSearchAPIKey = 'rapidapi-key=8c97389987msh6d23c292611734dp107e9bjsneac2ea684be8';
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

var movieCards = [];

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
            generateCards(data.results[index], i);
        }
        return movieCards;
        });
}


function getRecipe() {
    // https://rapidapi.com/forlucas27/api/random-recipes/
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a06e749de5mshd10ecfc282b3b9fp1ee828jsn6b27a3f8a15b',
            'X-RapidAPI-Host': 'random-recipes.p.rapidapi.com'
        }
    };
    
    fetch('https://random-recipes.p.rapidapi.com/ai-quotes/1', options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var recipeNameEl = document.createElement("h2");
            recipeNameEl.textContent = 'Your Random Recipe: ' + data[0].title;

            var recipeIngredientsHeaderEl = document.createElement('h3');
            var recipeImageEl = document.createElement('img');
            recipeImageEl.setAttribute('src', data[0].image);
            recipeIngredientsHeaderEl.textContent = 'Ingredient List:';
            var recipeIngredientListEl = document.createElement('ol');
            var recipeStepsHeaderEl = document.createElement('h3');
            recipeStepsHeaderEl.textContent = 'Recipe Steps:'
            var recipeStepListEL = document.createElement('ol');

            for (var i = 0; i<data[0].ingredients.length; i++) {
                var recipeIngredientItemEl = document.createElement("li");
                recipeIngredientItemEl.textContent = data[0].ingredients[i];
                recipeIngredientListEl.appendChild(recipeIngredientItemEl);
            }

            for(var j = 0; j<data[0].instructions.length; j++) {
                var recipeStepItemEl = document.createElement("li");
                recipeStepItemEl.textContent = data[0].instructions[j].text;
                recipeStepListEL.appendChild(recipeStepItemEl);
            }

            recipeContainerEl.appendChild(recipeNameEl);
            recipeContainerEl.appendChild(recipeImageEl);
            recipeContainerEl.appendChild(recipeIngredientsHeaderEl);
            recipeContainerEl.appendChild(recipeIngredientListEl);
            recipeContainerEl.appendChild(recipeStepsHeaderEl);
            recipeContainerEl.appendChild(recipeStepListEL);
        })
}

function generateCards(result, i) {
    let movieCard = document.createElement("article");
    console.log(movieCard.id);
    movieCard.style.backgroundImage = 'url(' + result.backdrop_path + ')';
    let movieTitle = document.createElement("h3");
    let moviePoster = document.createElement('img');
    moviePoster.setAttribute('src', result.poster_path);
    movieTitle.textContent = result.title;
    let movieYear = document.createElement("p");
    let formattedYear = moment(result.release_date).format('YYYY');
    movieYear.textContent = 'Year Released: ' + formattedYear;
    let movieRating = document.createElement("p");
    movieRating.textContent = 'Rating: ' + result.vote_average;
    let movieButton = document.createElement("button");
    movieButton.textContent = "Add to Watch List";
    movieButton.setAttribute('id', 'addToListButton' + i);
    movieButton.addEventListener('click', function(event){
            var nextTitle = event.target.parentNode.childNodes[1].textContent;
            var displayMovie = document.querySelector(".nextMovie");
            displayMovie.innerHTML = nextTitle;
            localStorage.setItem("nextMovie", nextTitle);
    });
    movieCard.appendChild(moviePoster);
    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieYear);
    movieCard.appendChild(movieRating);
    movieCard.appendChild(movieButton);
    movieContainerEl.appendChild(movieCard);
}

$('#search').on('click', function () {
    clearResults();
    getMovies();
    getRecipe();;
}) 

// get a random number from the array length
function getRandomNumber(max) {
    var min = Math.ceil(0);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
}

function clearResults() {
    movieContainerEl.innerHTML = '';
    recipeContainerEl.innerHTML = '';
    // cocktailContainerEl.innerHTML = '';
}

// loads and displays localStorage on page
function loadLocalStorage() {
    localStorage.getItem("nextMovie");
    var displayStorage = document.querySelector(".nextMovie")
    displayStorage.innerHTML = localStorage.nextMovie;
}