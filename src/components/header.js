import React, { Component } from 'react'
import Typical from 'react-typical';
import {Button,Media}  from 'reactstrap';
import img from '../img/profile.png';
import Fade from 'react-reveal/Fade';
import '../App.css'
export default class header extends Component {
    render() {
        return (
            <div className="background  d-lg-block" id="header">
                <div className="bhas"></div>
            <div className="container  pt-lg-5 pb-lg-5" style={{fontSize:'35px'}}>
               <div className="row">
               <div className="col-lg m-auto justify-content-between">
                <Fade left><h1 className="" style={{fontSize:'45px'}}>Bhaskar<br></br><div>Sengupta</div></h1>
                <span style={{fontSize:'25px',fontWeight:'bold',display:'flex'}}>
               <div style={{paddingRight:'5px',paddingLeft:'2px'}}>I'am a </div>{' '}
               <div style={{color:'#2980b9'}}> <Typical style={{fontSize:'70px',color:'red'}}
            steps={[' Student', 2000, ' Web Developer!', 4000,' Geek', 1200,]}
            loop={Infinity}
            wrapper="p"
            /></div>
            </span>
            <br />
            <Button color="primary" size="lg" className="mb-4"  active>Download cv</Button></Fade>
            </div>
           
           <Fade right> <div className="col-lg justify-content-xs-center">
            <Media src={img} className="col " style={{height:'auto',widht:'auto'}}></Media>
            </div>
            </Fade>
            </div>
            </div>
            </div>
        )
    }
}
