import React from 'react';
import Img from '../home/congra1.jpg';
import Img2 from '../home/img1.jpg';
import "bootstrap/dist/css/bootstrap.css"
export function Imgtask(){
    return(
        <div className='parent'>
        <div className='mx-auto p-5 text-center bg-dark container-fluid row'>
            <h1 className='text-white'>Congratulations</h1>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                <img src={Img}></img> 
            </div><br></br>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                <img src={Img2}></img>
            </div>
        </div>
        </div>
    )
}