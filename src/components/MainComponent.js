import React, { useState } from 'react';
import {Link} from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll'; 
import Header from './header';
import About from './About';
import Skill from './skills';
import Project from  './projects';
import Contacts from './contacts';
import Footer from './footer.js';
import { Collapse, Media ,Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../App.css';
import img from '../img/undraw_portfolio_website_lidw.svg';
import AOS from 'aos';
import 'aos/dist/aos.css'


const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  
  AOS.init({duration:'1200'});
  
  return (
    <div style={{fontSize:"15px"}}>
      <Navbar color="faded" className="container-fluid shadow-sm  rounded w-100" sticky="top bg-white" light>
      <NavbarBrand  onClick={()=>scroll.scrollToTop()} className="mr-auto" ><div>PortFolio</div></NavbarBrand>
        
        <Nav  className="d-none d-lg-flex d-xl-flex">
            <NavItem className="navlinks text-dark">
              <NavLink><Link to="header" smooth={true} spy={true} className="text-dark" style={{textDecoration:'none',cursor:'pointer'}} >Home</Link></NavLink>
            </NavItem>
            <NavItem className="navlinks text-dark">
            <NavLink><Link to="about" smooth={true} spy={true} className="text-dark" style={{textDecoration:'none',cursor:'pointer'}} >About</Link></NavLink>
            </NavItem>
            <NavItem className="navlinks text-dark">
            <NavLink><Link to="skills" smooth={true} spy={true} className="text-dark" style={{textDecoration:'none',cursor:'pointer'}} >Skills</Link></NavLink>
            </NavItem>
            <NavItem className="navlinks text-dark">
            <NavLink><Link to="project" smooth={true} spy={true} className="text-dark" style={{textDecoration:'none',cursor:'pointer'}} >Projects</Link></NavLink>
            </NavItem>
            <NavItem className="navlinks text-dark">
            <NavLink><Link to="contact" smooth={true} spy={true} className="text-dark" style={{textDecoration:'none',cursor:'pointer'}} >Contact Me</Link></NavLink>
            </NavItem>
          
          </Nav>
        <NavbarToggler onClick={toggleNavbar} className="d-lg-none border-0 " style={{outline:'none'}}></NavbarToggler> 
        
        <br></br>
       </Navbar>
      
 <div className="container-fluid shadow text-center  d-lg-none  sticky-bottom bottom-0 text-white py-4" style={{fontSize:'15px',letterSpacing:'0.2em',transform:collapsed?'translateX(500px)':'translateY(0)',width:'60%',height:'100vh',background:'#2c3e50',position:'fixed',zIndex:'100',right:'0',margin:'auto',borderRadius:'0px 0px 20px 20px',transition:'0.8s'}}>
          <Nav navbar  >
          <NavItem className="text-white my-2 py-2 ">
              <NavLink ><Link to="header" smooth={true} duration={1500} className="nav2 text-white" style={{width:'fit-content',textDecoration:'none',cursor:'pointer'}} onClick={()=>setCollapsed(true)}>Home</Link></NavLink>
          </NavItem>
            <NavItem className="text-white my-2 py-2">
            <NavLink><Link to="about" smooth={true} spy={true}  duration={1500} className="nav2  text-white" style={{width:'fit-content',textDecoration:'none',cursor:'pointer'}} onClick={()=>setCollapsed(true)}>About</Link></NavLink>
            </NavItem>
            <NavItem className="text-white  my-2 py-2 ">
            <NavLink><Link to="skills" smooth={true} spy={true}  duration={1500} className=" nav2 text-white" style={{width:'fit-content',textDecoration:'none',cursor:'pointer'}} onClick={()=>setCollapsed(true)}>Skills</Link></NavLink>
            </NavItem>
            <NavItem className="text-white  my-2 py-1 ">
            <NavLink><Link to="project" smooth={true} spy={true}  duration={1500} className="nav2  text-white " style={{width:'fit-content',textDecoration:'none',cursor:'pointer'}} onClick={()=>setCollapsed(true)}>Projects</Link></NavLink>
            </NavItem>
            <NavItem className="text-white  my-2 py-1 ">
            <NavLink><Link to="contact" smooth={true} spy={true}  duration={1500} className="nav2  text-white " style={{width:'fit-content',textDecoration:'none',cursor:'pointer'}} onClick={()=>setCollapsed(true)}>Contact</Link></NavLink>
            </NavItem>
          </Nav>
          </div> 

     <Media data-aos="slide-left"  className="conatiner m-auto d-lg-none" style={{height:'auto',width:'auto'}} src={img}></Media>
     
      < Header />
      <br /><br />
      <About />
      <Skill />
      <br></br>
      <Project />
      <br></br><br></br>
      <p className="my-3 text-center"><h5>For any Project</h5></p>
      <br></br>
      <Contacts />
    <br></br>
    <Footer />
    </div>
   
  );
}

export default Example;