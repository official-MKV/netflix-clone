import React, { useEffect, useState } from 'react'
import axios from '../axios';
import requests from '../requests';
import './Banner.css'


function Banner() {
    const [movie, setMovie] = useState([]);
    function truncateString(str, num) {
        if (str?.length > num) {
          return str?.slice(0, num) + "...";
        } else {
          return str;
        }
      }
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                response.data.results[
                Math.floor(Math.random() * response.data.results.length)
                ]
            )
            return response;

        }
        fetchData();

    },
        [])
    return (
        <div>
            <header 
            style={{
                backgroundSize:'cover',
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                position:'center',
                 
            }} 
            className='banner'>
                <div className='banner__contents'>
                  <h1 className='banner__title'>{movie?.title||movie?.name||movie?.original_title}</h1>
                  <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                  </div>
                  <h1 className='banner__description'>{truncateString(movie?.overview,150)}</h1>

                </div>
                <div className='banner__fadeBottom'></div>
            </header>
        </div>
    )
}

export default Banner