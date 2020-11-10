import React from 'react'
import img from '../img/profile.svg';
import {Button,Media}  from 'reactstrap';
import Fade from 'react-reveal/Fade';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function About() {
    
    AOS.init({duration:'1200'});
    
    return (
        <div className="container mt-lg-5 m-auto" id="about">
        
        <div className="">
        <div className="row justify-content-center">
        <h1 style={{paddingBottom:'1px',width:'fit-content',fontSize:"25px",color:' #2980b9'}}>About<div style={{width:'60%',height:'3px',background:'#40739e',opacity:'1',margin:'auto'}}></div></h1>
        </div>
        <div className=" container row ">
        <div className="col-lg-6" >
        <Media data-aos="fade-down" src={img}  ></Media>
        </div>
        <div className="col-lg-6  m-auto">
        <h2  data-aos="fade-down" style={{color:'#2980b9',fontSize:'20px',fontWeight:'bold',paddingBottom:'10px',lineHeight:'1.5em',textAlign:'center'}}>I'am Bhaskar Sengupta</h2>   
        <p data-aos="fade-down" style={{lineHeight:'1.6em',wordSpacing:'0.3em',wordWrap:'break-word',textAlign:'justify'}}>I am an engineering student  currently pursuing my degree from Bp Poddar Institute of Management and Technology,and an aspiring full stack MERN Developer . Some of my hobbies includes playing harmonica and painting . I am looking for freelancing and internship opportunities where i can showcase my skills via collaborative work .    
        </p>    
        </div>
        
       
        </div>
        </div>
        
        </div>
       
    )
}
