import React ,{useEffect,useState} from "react";
import StarRatings from "react-star-ratings";


export function Jsondetails(){
    const [details,setDetails]=useState([])
   
    useEffect(()=>{
        fetch("http://localhost:3000/data.json")
        // fetch("http://fakestoreapi.com/products")
        .then (res => res.json())
        .then(showdetails =>setDetails(showdetails))
    })
    return(
        <>
        <div className="row">
        {
            details.map((index)=>(

<div class="card" style={{width:288}}>
  <img src={index.image} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">{index.id}</h5>
    <h5 class="card-title">{index.title}</h5>
    <h5 class="card-text">{index.category}</h5>
    <h5 class="card-title">{index.price}</h5>
    <p class="card-text">{index.description}</p>
    <p ><StarRatings
    rating={index.rating.rate}
    starRatedColor="gold"
    numberOfStars={5}
    starSpacing="2px"
    starDimension="20px"/> 
      </p>

    <a href="#" class="btn btn-primary">{index.place}</a>
  </div>
</div>    
            ))
            
        }</div>
        </>
    )
}