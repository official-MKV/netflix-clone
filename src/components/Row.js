import React from 'react'
import { useState, useEffect } from 'react'
import axios from '../axios';
import RowObj from './RowObj';
import './Row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'


function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData();

    }, [fetchUrl])
    const handleClick =(movie)=>{
        if (trailerUrl){
            setTrailerUrl("")
        }else{
            movieTrailer(movie?.name||movie?.title).then(
                    (url)=>{
                        const urlParams = new URLSearchParams(new URL(url).search)
                        setTrailerUrl(urlParams.get('v'))
                    }
            ).catch(
                (error)=>{console.log(error)}
            )
            setTrailerUrl(movie.name);

        }


     }
    const opts ={
        height:"390",
        width:'100%',
        playerVars:{
            // https://developers.google.com/youtube/player_parameters
            autoplay:1
        }
    }

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {
                    movies.map((movie) => {
                        return <RowObj  handleClick={handleClick}isLargeRow={isLargeRow ? true : false} movie={movie} />
                    })
                }
            </div>

            {trailerUrl&&<YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row