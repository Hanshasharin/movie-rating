import React, { useEffect, useState , } from 'react'
import MovieCard from '../components/MovieCard'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
const param = useParams()
    const [moviess,setMoviess] = useState({})
    useEffect(() => {
      const movieID = param.id
      axios('https://fakestoreapi.com/products/'+ movieID)

.then(res=> {
setMoviess(res.data)})



    }, [])
  return (
    <MovieCard movie = {moviess}/>
  )
}

export default MovieDetails