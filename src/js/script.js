'use strict';

let numberOfFilms = +prompt('how many films have you seen so far?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false    

};

const 
    movie_1 = prompt('name one of the last films you watched', ''),
    rating_1 = +prompt('Give it a rating', ''),
    movie_2 = prompt('name one of the last films you watched', ''),
    rating_2 = +prompt('Give it a rating', '');

personalMovieDB.movies[movie_1] = rating_1;
personalMovieDB.movies[movie_2] = rating_2;


console.log(personalMovieDB);
