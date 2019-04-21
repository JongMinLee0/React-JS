import React from 'react';
import './Movie.css';



function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie__Columns">
            <MoviePoster poster = {poster} alt={title}/>
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie_Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    )
}

function MovieGenre({genre}){
    return (
        <span className="Movie__Genres">{genre}</span>
    )
}

function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt = {alt} title={alt} className="Movie__Poster" />
    )
}
export default Movie