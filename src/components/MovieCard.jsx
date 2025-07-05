import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import axios from 'axios';


const MovieCard = (props) => {
const[show,setShow] = useState(false)
const [rating,setRating] = useState(props.movie.rating)
  const handleShow = ()=>{
    // alert("clicked" + props.movie.movieName)
    setShow(true)
    console.log(show);
    
  }

  const handleClose = ()=>{
    // alert("close clicked")
    setShow(false)
  }
  const submitRating=()=>{
const token = localStorage.getItem("access_token")
const header =  {
  "Authorization" : `Bearer ${token}`

}

  // axios.post('https://movie-rating-backend-1-e9xx.onrender.com/rating').then(res=>{console.log(res.data);
  // })

    axios.put('https://movie-rating-backend-1-e9xx.onrender.com/rating', { rating : rating , id:props.movie._id},{headers:header}) // ✅ send rating in body
    .then(res => {
      console.log("Server response:", res.data);
          axios('https://movie-rating-backend-1-e9xx.onrender.com/movies')
      handleClose()
    })
    .catch(err => {
      console.error("POST error:", err);
    });
  
  }
  const ratingChange=(event)=>{
setRating(event.target.value)

  }

  
  const deleteMovie = () => {
  alert("delete");
  axios.delete("https://movie-rating-backend-1-e9xx.onrender.com/delete?id=" + props.movie._id)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.error(err);
    });
}

  return (
    
 <>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.movie.image}/>
      <Card.Body>
        <Card.Title>
          <Link to = {"/movie/"+props.movie.id}>
          {props.movie.title}
          </Link>
          </Card.Title>
        <Card.Text>
          {props.movie.description}
        </Card.Text>
        <p>{props.movie._id}</p>
        {/* <Button variant="primary">Movie Rating</Button> */}
         <Button variant="primary me-3" onClick={handleShow}>
        add rating
      </Button>
        <Button variant="danger" onClick={deleteMovie}>
        delet
      </Button>
      
      </Card.Body>
    </Card>
 <Modal show={show} onHide={handleClose}>
  
        <Modal.Header>

          <div style={{flex:1}}>

            <img src={props.movie.image} style={{width:"100%" , height:"250px" , objectFit:"contain"}}/>

          <Modal.Title style={{textAlign:"center"}}>{props.movie.title}</Modal.Title>
          </div>
         
        </Modal.Header>
        <Modal.Body>{props.movie.description}
          <div>
          <input type="number" max={5} min={1} value={rating} onChange={ratingChange} />
          <input type='text'/>
          <button onClick={submitRating}>submit</button>
          <p>{rating}</p>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Chang
          </Button>
        </Modal.Footer>
      </Modal>
    </>

   

  )
}

export default MovieCard