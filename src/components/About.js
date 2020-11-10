import React from 'react'
import img from '../img/profile.svg';
import {Button,Media,Card}  from 'reactstrap';
import Fade from 'react-reveal/Fade';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function About() {
    
    AOS.init({duration:'1200'});
    
    return (
        <div className="container mt-lg-5 mb-lg-5 m-auto" id="about">
        
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
        <div>
        <h1 style={{paddingBottom:'1px',width:'fit-content',fontSize:"25px",color:' #2980b9',margin:'auto'}}>Qualification<div style={{width:'60%',height:'3px',background:'#40739e',opacity:'1',margin:'auto'}}></div></h1>
        <br></br>
        <br></br>
        <span className="d-flex ">
        <FontAwesomeIcon className="align-self-center" icon="book" style={{height:"20px",width:'25px',color:"#2980b9",paddingRight:'5px'}}/>
        <h1 style={{paddingBottom:'1px',width:'fit-content',fontSize:"25px",color:'#2980b9'}}>Education</h1>
        </span>
        <br></br>
        <div className="conatainer mb-5">
        <div className="row  justify-content-lg-start justify-content-center">
        <Card data-aos="fade-down" className="shadow pt-2  m-lg-0  col-lg-5 mr-lg-3 mb-3 " style={{borderRadius:'10px', paddingTop:'8px',width:`96%`,background:'#fff',fontSize:'10px',height:'100px',borderBottom:'5px solid #2980b9'}}>
       <div className="d-flex justify-content-around align-items-center" >
        <div className="py-3">
        <h5 className="d-flex mb-2 " style={{fontSize:"17px",color:'#2980b9'}} ><div><FontAwesomeIcon className="mr-2" icon="school" /></div>School</h5>
        <h5 style={{fontSize:"15px",color:'#2980b9',textAlign:'center'}} >St.Stephen's.School(Dum Dum)</h5>   
        </div>
        <div>
        <h5 className="d-flex mb-2 " style={{fontSize:"17px",color:'#2980b9'}} ><div><FontAwesomeIcon className="mr-2" icon="calendar" /></div>TimeLine</h5>
        <h5 style={{fontSize:"15px",color:'#2980b9',textAlign:'center'}}>2005 ~ 2019</h5>   
      </div>   
       
       </div>

        </Card>
        <Card data-aos="fade-down" className="shadow pt-2 col-lg-5  mr-lg-3 mb-3" style={{borderRadius:'10px', paddingTop:'8px',width:`96%`,background:'#fff',fontSize:'10px',height:'100px',borderBottom:'5px solid #2980b9'}}>
        <div className="d-flex justify-content-around align-items-center" >
        <div className="py-0">
        <h5 className="d-flex mb-2 " style={{fontSize:"17px",color:'#2980b9',textAlign:'center'}} ><div><FontAwesomeIcon className="mr-2" icon="pen" /></div>Grades</h5>
        <h5 style={{fontSize:"15px",color:'#2980b9',textAlign:'center'}} >10th Standard ~ ( 92% )</h5>   
        <h5 style={{fontSize:"15px",color:'#2980b9',textAlign:'center'}} >(10+2)th Standard  ~ ( 92.4% ) </h5>   

        </div>
        <div>
        <h5 className="d-flex mb-2 " style={{fontSize:"17px",color:'#2980b9'}} ><div><FontAwesomeIcon className="mr-2" icon="calendar" /></div>TimeLine</h5>
        <h5 style={{fontSize:"15px",color:'#2980b9',textAlign:'center'}}>2017</h5>   
        <h5 style={{fontSize:"15px",color:'#2980b9',textAlign:'center'}}>2019</h5>   

      </div>   
       
       </div>
       </Card>
       </div>
       <div className=" row justify-content-lg-start justify-content-center">
       <Card  data-aos="fade-down" className="shadow pt-2   col-lg-5  mr-lg-3 mb-3" style={{borderRadius:'10px', paddingTop:'8px',width:`96%`,background:'#fff',fontSize:'10px',height:'100px',borderBottom:'5px solid #2980b9'}}>
       
       <div className="d-flex justify-content-around align-items-center" >
        <div className="py-3">
        <h5 className="d-flex mb-2 " style={{fontSize:"17px",color:'#2980b9'}} ><div><FontAwesomeIcon className="mr-2" icon="school" /></div>College</h5>
        <h5 style={{fontSize:"12px",color:'#2980b9',textAlign:'center'}} >Bp.Poddar Institute Of Management And Technology</h5>   
        </div>
        <div>
        <h5 className="d-flex mb-2 " style={{fontSize:"17px",color:'#2980b9'}} ><div><FontAwesomeIcon className="mr-2" icon="calendar" /></div>TimeLine</h5>
        <h5 style={{fontSize:"15px",color:'#2980b9',textAlign:'center'}}>2019 ~ 2023</h5>   
      </div>   
       
       </div>

       </Card>
        </div>    
        </div>
        
        
        </div>


        </div>
       
    )
}
