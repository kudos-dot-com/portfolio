import React, { useState } from 'react';
import {Link} from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll'; 
import Header from './header';
import About from './About';
import Skill from './skills';
import Project from  './projects'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../App.css';
const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div style={{fontSize:"15px"}}>
      <div className="fixed-top mb-5 mb-lg-4">
      <Navbar color="faded" className="container-fluid shadow-sm  rounded w-100 bg-white"  light>
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
          </Nav>
        
        
        <NavbarToggler onClick={toggleNavbar} className="d-lg-none border-0 " style={{outline:'none'}} />
         
        
        <br></br>
       </Navbar>
      
 <div className="shadow bg-white text-center px-5 py-2 d-lg-none" style={{transform:collapsed?'translateY(-500px)':'translateY(0)',display:collapsed?'none':'block',width:'100%',margin:'auto',borderRadius:'0px 0px 20px 20px',transition:'2s'}}>
          <Nav navbar  >
          <NavItem className="text-dark">
              <NavLink ><Link to="header" smooth={true} duration={1500} className="text-dark navlinks" style={{width:'fit-content',textDecoration:'none',cursor:'pointer'}} onClick={()=>setCollapsed(true)}>Home</Link></NavLink>
          </NavItem>
            <NavItem className="text-dark">
            <NavLink><Link to="about" smooth={true} spy={true}  duration={1500} className="text-dark navlinks" style={{width:'fit-content',textDecoration:'none',cursor:'pointer'}} onClick={()=>setCollapsed(true)}>About</Link></NavLink>
            </NavItem>
            <NavItem className="text-dark">
            <NavLink><Link to="skills" smooth={true} spy={true}  duration={1500} className="text-dark navlinks" style={{width:'fit-content',textDecoration:'none',cursor:'pointer'}} onClick={()=>setCollapsed(true)}>Skills</Link></NavLink>
            </NavItem>
            <NavItem className="text-dark">
            <NavLink><Link to="project" smooth={true} spy={true}  duration={1500} className="text-dark navlinks" style={{width:'fit-content',textDecoration:'none',cursor:'pointer'}} onClick={()=>setCollapsed(true)}>Projects</Link></NavLink>
            </NavItem>
          </Nav>
          </div> 

</div>


<br /> <br /><br /><br />
      < Header />
      <br /><br />
      <About />
      <Skill />
      <br></br>
      <Project />
    </div>
    
  );
}

export default Example;