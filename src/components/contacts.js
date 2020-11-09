import React,{useState} from 'react'
import {
   Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import Fade from 'react-reveal/Zoom';
import Zoom from 'react-reveal/Fade';

import '../App.css';
import img from '../img/photo-1472289065668-ce650ac443d2.jpg';
 

export default function Projects() {
    
       

    return (
        
        <div>
        <h1 className="mb-4"  style={{paddingBottom:'1px',width:'fit-content',fontSize:"25px",color:' #2980b9',margin:'auto'}}>Contact Me <div style={{width:'60%',height:'3px',background:'#40739e',opacity:'1',margin:'auto'}} className="mt-1"></div></h1>

        <div className="container"> 
         <div className="row  justify-content-around" style={{marginBottom:'35px'}}>
         
         
          <Card className="bg-white col-lg-5 justify-content-around col-11 shadow text-center card" style={{color:'#2980b9',marginBottom:'35px',height:'310px',width:"330px",borderBottom:'5px solid #2980b9'}}>
            
            <CardBody className="d-flex flex-auto flex-column justify-content-between">
              <div className="d-flex flex-row justify-content-between">
              <CardTitle tag="h5">Adress</CardTitle>
              <CardSubtitle tag="h6" className="align-self-center text-muted"></CardSubtitle>
              </div>
              <div className="m-auto align-self-bottom">
             <CardText tag="h6"></CardText>
            </div>
            </CardBody>
          </Card>
          
          <Card className="bg-white col-lg-5 justify-content-around col-11 shadow text-center card" style={{color:'#2980b9',marginBottom:'35px',height:'310px',width:"330px",borderBottom:'5px solid #2980b9'}}>
            
            <CardBody className="d-flex flex-auto flex-column justify-content-between">
              <div className="d-flex flex-row justify-content-between">
              <CardTitle tag="h5">Contact No</CardTitle>
              <CardSubtitle tag="h6" className="align-self-center text-muted"></CardSubtitle>
              </div>
              <div className="m-auto align-self-bottom">
             <CardText tag="h6"></CardText>
            </div>
            </CardBody>
          </Card>

         
         
        </div>


        <div className="row justify-content-around" style={{marginBottom:'35px'}}>
         
         
        <Card className="bg-white col-lg-5 justify-content-around col-11 shadow text-center card" style={{color:'#2980b9',marginBottom:'35px',height:'310px',width:"330px",borderBottom:'5px solid #2980b9'}}>
            
            <CardBody className="d-flex flex-auto flex-column justify-content-between">
              <div className="d-flex flex-row justify-content-between">
              <CardTitle tag="h5">Gmail</CardTitle>
              <CardSubtitle tag="h6" className="align-self-center text-muted"></CardSubtitle>
              </div>
              <div className="m-auto align-self-bottom">
             <CardText tag="h6"></CardText>
            </div>
            </CardBody>
          </Card>
          
          <Card className="bg-white col-lg-5 justify-content-around col-11 shadow text-center card" style={{ color:'#2980b9',marginBottom:'35px',height:'310px',width:"330px",borderBottom:'5px solid #2980b9'}}>
            
            <CardBody className="d-flex flex-auto flex-column justify-content-between">
              <div className="d-flex flex-row justify-content-between">
              <CardTitle tag="h5">Social</CardTitle>
              <CardSubtitle tag="h6" className="align-self-center text-muted"></CardSubtitle>
              </div>
              <div className="m-auto align-self-bottom">
             <CardText tag="h6"></CardText>
            </div>
            </CardBody>
          </Card>

         
         
        </div>
        </div>             
        </div>
           
       
      
       
    )
}
