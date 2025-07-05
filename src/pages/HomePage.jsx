import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import MovieCard from '../components/MovieCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies,updateLimit } from '../features/movies/movieSlice';
import { Button } from 'react-bootstrap';

const HomePage = () => {
const movies = useSelector(state => state.movies.value)
const limit = useSelector(state=> state.movies.limit)

    // let [movies , setMovies] = useState([])

let [count,setCount] = useState(0)
let [seconds , setSeconds] = useState(0)
         const movieDate = useSelector(state => state.movies.limit)
          //  console.log(movieDate); 
           const dispatch = useDispatch()
           const [newmovie, setNewMovie ] = useState({
            title:"",
            rating:"",
            image:"",
           })

//           const api = " 72dd7af3e4msh2cb6531e9e7ce75p1caeb5jsn68ab24b5861c"
//           const url = 'https://movies-ratings2.p.rapidapi.com/ratings?id=tt0111161';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '72dd7af3e4msh2cb6531e9e7ce75p1caeb5jsn68ab24b5861c',
// 		'x-rapidapi-host': 'movies-ratings2.p.rapidapi.com'
// 	}
// };

// useEffect(() => {
// fetch(url,options)
// .then(res=> res.json())
// .then(data=> {console.log(data)}
// )
// }, [])

useEffect(() => {
// fetch('https://fakestoreapi.com/products')
// .then(res=> res.json())
// .then(data=> {
// setMovies(data)
// console.log(movies);


// axios('https://fakestoreapi.com/products')
axios('https://movie-rating-backend-1-e9xx.onrender.com/movies')


.then(res=> {
// setMovies = res.data
dispatch(getMovies(res.data))
console.log(res.data, "get");

}
  
)
.catch((err)=>{
console.log(err);

})
}, [])

useEffect(() => {
console.log(movies);

}, [count])
let update =()=>{
   setSeconds(seconds+1) 
}

useEffect(() => {
    
       
        setTimeout(() => {
             update()
        }, 100000);
    
}, [seconds])

const movieInput =(event)=>{
let temNewMovie= {...newmovie}
temNewMovie[event.target.name]=event.target.value
setNewMovie(temNewMovie)

}
const addMovie = (event)=>{
  event.preventDefault()
  // console.log("submitted");
  // console.log(newmovie);
  axios.post("https://movie-rating-backend-1-e9xx.onrender.com/creat",newmovie)
  .then(res=>{console.log(res.data);
    getMovies()
  })
}
  return (
    <Container>
      <form onSubmit={addMovie}>
                <input type='text' name='title' id='title' placeholder='title'onChange = {movieInput} value={newmovie.title}/> <br />
        <input type='number' name='rating' id='rating' placeholder='rating' max={5}onChange = {movieInput} value={newmovie.rating}/> <br />
        <input type='text' name='image' id='image' placeholder='image'onChange = {movieInput} value={newmovie.image}/> <br />
                <input type='submit' className='btn btn-success' value="add" onChange = {movieInput}/> <br />



      </form>
        <h2>{seconds}</h2>
<button onClick={()=>{setCount(count+1)}}>{count}</button>

<h1>Movie list {movieDate}</h1>
<Row>
{movies.slice(onabort,limit).map((movie, index) => {
    return (
        <Col xs={12} sm={6} md={4} lg={3} key={index}>
            <MovieCard movie={movie} index={index} />
        </Col>
    );
})}


</Row>
<Button onClick={()=>dispatch(updateLimit())}>Load more</Button>
    </Container>
    
  )
}

export default HomePage