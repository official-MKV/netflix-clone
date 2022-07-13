import React from 'react'
import './Row.css'
const image_url = "https://image.tmdb.org/t/p/original/"


function RowObj({ handleClick, movie,isLargeRow }) {
    return (
        <img className={`row__poster ${isLargeRow&&'row__posterLarge'}`}
            onClick={()=>handleClick(movie)}
            key={movie.id}
            src={`${image_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}alt={movie.original_title}>
        </img>
    )
}

export default RowObj