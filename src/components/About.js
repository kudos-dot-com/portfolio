import React from 'react'
import img from '../img/profile.svg';
import {Button,Media}  from 'reactstrap';
import Fade from 'react-reveal/Fade';
export default function About() {
    return (
        <div className="container mt-lg-5 m-auto" id="about">
        <Fade left>
        <div className="">
        <div className="row justify-content-center">
        <h1 style={{paddingBottom:'1px',width:'fit-content',fontSize:"25px",color:' #2980b9'}}>About<div style={{width:'60%',height:'3px',background:'#40739e',opacity:'1',margin:'auto'}}></div></h1>
        </div>
        <div className=" container row ">
        <div className="col-lg-6" >
        <Media src={img}  ></Media>
        </div>
        <div className="col-lg-6  m-auto">
        <h2  style={{color:'#2980b9',fontSize:'20px',fontWeight:'bold',paddingBottom:'4px'}}>I'am Bhaskar Sengupta</h2>   
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>    
        </div>
        
       
        </div>
        </div>
        </Fade>
        </div>
       
    )
}
