import React,{useState} from 'react';
import { Progress , Media , Card} from 'reactstrap';
import img from '../img/thumbtack-solid.svg';
import Info from './info';
import img2 from '../img/images.jpg'; 
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
//#2f3640
function List({prog})
{
  return(
 <div>
  <Card data-aos="fade-down" className=" shadow pt-2 m-auto m-lg-0 w-100" style={{borderRadius:'5px', paddingTop:'8px',width:`100%%`,background:'#fff',fontSize:'10px'}}>
 
  <div classname="" style={{color:'#000',display:'flex',justifyContent:'space-between',padding:'5px',fontWeight:'bolder',textTransform:'uppercase'}}>
    <div className="ml-2"><h4>{prog.name}</h4></div>
  <div className="mr-4"><h4>{prog.per}%</h4></div>
    </div>
   
  <div className="" style={{height:'5px',background:'#2980b9',width:`${prog.per}%`}}></div>  
 </Card><br></br>
 </div>

 )
}

export default function Skills() {
 const [skills,useskills]=useState([
    {
      name:'html/css',
      per:85
    },
    {
      name:'javascript',
      per:80
    },
    {
      name:'python',
      per:65
    },
    {
      name:'react js',
      per:70
    },
    {
      name:'Node & express',
      per:75
    },
    {
      name:'c language/java',
      per:85
    },
  ])
  AOS.init({duration:'1200'});
  return (
    <div className="container" >
      <div className="row justify-content-center">
        <h1 id="skills" style={{paddingBottom:'1px',width:'fit-content',fontSize:"25px",color:' #2980b9'}}>Skills<div style={{width:'60%',height:'3px',background:'#40739e',opacity:'1',margin:'auto'}}></div></h1>
        </div>
        <Info /> 
        <br></br>
        <br></br>      
        <span style={{display:'flex',marginBottom:'15px'}}><Media src={img}></Media><h1 style={{fontSize:'25px',marginLeft:'5px',color:'#40739e'}}>Learning Track</h1></span>  
        <div className="row">
        <div className="col-md-6" >
        {skills.map(x=>(
          <List  prog={x} />
        ))}</div>
        <div className="col-md-6">
        <Media src={img2} id="project" className="w-100 h-auto align-self-center m-auto pic"></Media>
        </div>
        </div>
        </div>
  )
}
