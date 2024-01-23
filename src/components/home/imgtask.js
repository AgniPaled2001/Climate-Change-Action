import React from 'react';
import Img from '../home/rcb-img.png';
import Img2 from '../home/csk-img.png';
import "bootstrap/dist/css/bootstrap.css"
export function Imgtask(){
    return(
      <>
      {/* <h1 className='text-center'>Congratulation</h1>
      <div className='bg-primary'>
        <center><div className='mx-auto p-5 text-center bg-white container-fluid '>
            <center><div className='col-lg-6 col-md-6 col-sm-12 bg-primary'>
                <img src={Img}></img> 
               <h2>Kiran V</h2>
               <p>Iam Kiran from gulbarga at karnataka state</p>
                <img src={Img2}></img>
            </div></center>
        </div></center>
        </div> */}
  
        <center><div className='mx-auto p-5 text-center bg-white '>
            <center><div className='col-lg-6 col-md-6 col-sm-12 bg-dark'>
            <h1 className='text-center text-white'>Super Over League</h1>
                <img src={Img}></img>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 bg-dark '>
                <img src={Img2}></img>
            </div></center>
        </div></center>
    
      </>
    )
}