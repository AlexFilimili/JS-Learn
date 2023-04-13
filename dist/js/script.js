'use strict';


const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,  
        start: function() {
            do {
                personalMovieDB.count = +prompt('how many films have you seen so far?', ''); 
            }
            while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count));
        },

        detectPersonalLevel: function () {
            if (personalMovieDB.count < 10) {
                alert('very few movies have been watched');
            }
            else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                alert('your number of movies watched matches the majority');
            }
            else if (personalMovieDB.count >= 30) {
                alert('do you really like to watch movies');
            }
        },
        rememberMyFilms: function () {
            for (let i = 1; i <= personalMovieDB.count; i++) {   
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
        },
        showMyBD: function () {
            if (personalMovieDB.privat == false) {
                console.log(personalMovieDB);
            }
        },
        writeYouGenres: function () {   
            for (let i = 0; i < 3; i++) {   
                do {
                    personalMovieDB.genres[i] = prompt(`name 3 favorite genres in descending order, your number ${i + 1} -`, '');
                }
                while (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null || personalMovieDB.genres.length === 0);
            }
            personalMovieDB.genres.forEach(function(item, i) {
                console.log(`favorite genre #${i + 1} - it is ${item}`);
            });
                       
        },
        toogleVisibleMyDB: function() {
            if (personalMovieDB.privat == false) {
                personalMovieDB.privat = true;
            }
            else if (personalMovieDB.privat == true) {
                personalMovieDB.privat = false;
            }  
        }
};
personalMovieDB.toogleVisibleMyDB();
personalMovieDB.toogleVisibleMyDB();
personalMovieDB.showMyBD();
console.log(personalMovieDB.privat);
