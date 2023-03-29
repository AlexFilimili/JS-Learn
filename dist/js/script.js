'use strict';

let numberOfFilms;
/* не даем оставить пустую строку */
function start() {
    do {
        numberOfFilms = +prompt('how many films have you seen so far?', '');
    }
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
}
start();

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false   
};

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('very few movies have been watched');
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('your number of movies watched matches the majority');
    }
    else if (personalMovieDB.count >= 30) {
        alert('do you really like to watch movies');
    }
}
detectPersonalLevel();

function rememberMyFilms() {
    for(let i = 1; i <= numberOfFilms; i++) {   
        let 
            movie,
            rating;
        do {        
        movie = prompt('name one of the last films you watched', ''),
        rating = +prompt('Give it a rating', '');
        }    
        while (movie == null || movie.length === 0 || movie.length >= 50 || rating == null || rating === 0 || rating.length === 0);

        personalMovieDB.movies[movie] = rating;         
    }
}
rememberMyFilms();

function showMyBD() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
showMyBD();

function writeYouGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`name 3 favorite genres in descending order, your number ${i + 1} -`, '');
    }
}
writeYouGenres();









 





