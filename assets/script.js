const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8c97389987msh6d23c292611734dp107e9bjsneac2ea684be8',
		'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
	}
};

function getAPI(){
fetch('https://advanced-movie-search.p.rapidapi.com/discover/movie', options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      data.results.forEach(result => {
      for(var i = 0; i<data.length; i++) {  
		var title = result.title;
		var releaseYear = result.release_date;
		var rating = result.vote_average;
		document.querySelector('.movies').textContent = title.toString();
        console.log(title);
        console.log(releaseYear);
        console.log(rating);
      };
	
    });

});
}

getAPI();