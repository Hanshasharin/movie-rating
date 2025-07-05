import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Rating = () => {
    const [movie , setMovie] = useState([
        {
        id:2,
        title : "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: 4,
        review: "good"
    }
    ])

    
  return (

    <>
     <ul>
      {movie.map((movie)=>{

        
        return (

<li> 
    <div className='d-flex justify-content-between'>
<img src= {movie.image} style={{height:"50px", width:"50px", objectFit:"contain"}}/>
<Link to={"/movie-details"+movie.id}>{movie.title}</Link>
<p>{movie.rating}</p>
<p>{movie.review}</p>
</div>
<hr/>
</li>
        )
      })}
      </ul>
    </>
  )
}

export default Rating
