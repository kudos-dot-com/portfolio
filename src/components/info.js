import React from 'react'
import img from '../img/thumbtack-solid.svg';
import { Progress , Media , Card} from 'reactstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function info() {
    AOS.init({duration:'1200'});
    return (
        <div data-aos="fade-down" className="container">
            <div className="row">
            <span style={{display:'flex',margin:'15px 0px'}}><Media src={img}></Media><h1 style={{fontSize:'25px',marginLeft:'5px',color:'#40739e'}}>Language I Speak</h1></span>  
            </div>
               <div className="row d-flex ">
                <div className="p-2 border" style={{opacity:'0.7',fontWeight:'bold',borderRadius:'5px',background:'#ccc',color:'#333',marginRight:'10px',marginBottom:'5px'}}>Java</div>
                <div className="p-2 border" style={{opacity:'0.7',fontWeight:'bold',borderRadius:'5px',background:'#ccc',color:'#333',marginRight:'10px',marginBottom:'5px'}}>JavaScript</div>
                <div className="p-2 border" style={{opacity:'0.7',fontWeight:'bold',borderRadius:'5px',background:'#ccc',color:'#333',marginRight:'10px',marginBottom:'5px'}}>C Language</div>
                <div className="p-2 border" style={{opacity:'0.7',fontWeight:'bold',borderRadius:'5px',background:'#ccc',color:'#333',marginRight:'10px',marginBottom:'5px'}}>Python</div>
        </div>
        <div className="row">
            <span style={{display:'flex',margin:'15px 0px'}}><Media src={img}></Media><h1 style={{fontSize:'25px',marginLeft:'5px',color:'#40739e'}}>FrontEnd Libraries</h1></span>  
            </div>
               <div className="row d-flex flex-wrap">
                <div className="p-2 border" style={{opacity:'0.7',fontWeight:'bold',borderRadius:'5px',background:'#ccc',color:'#333',marginRight:'10px',marginBottom:'5px'}}>TailWind Css</div>
                <div className="p-2 border" style={{opacity:'0.7',fontWeight:'bold',borderRadius:'5px',background:'#ccc',color:'#333',marginRight:'10px',marginBottom:'5px'}}>BootStrap</div>
                <div className="p-2 border" style={{opacity:'0.7',fontWeight:'bold',borderRadius:'5px',background:'#ccc',color:'#333',marginRight:'10px',marginBottom:'5px'}}>ReactJs</div>
                <div className="p-2 border" style={{opacity:'0.7',fontWeight:'bold',borderRadius:'5px',background:'#ccc',color:'#333',marginRight:'10px',marginBottom:'5px'}}>Material UI</div>
                <div className="p-2 border" style={{opacity:'0.7',fontWeight:'bold',borderRadius:'5px',background:'#ccc',color:'#333',marginRight:'10px',marginBottom:'5px'}}>ReactStrap</div>
        </div>
        <div className="row">
            <span style={{display:'flex',margin:'15px 0px'}}><Media src={img}></Media><h1 style={{fontSize:'25px',marginLeft:'5px',color:'#40739e'}}>ServerSide Libraries/Framework</h1></span>  
            </div>
               <div className="row d-flex ">
                <div className="p-2 border" style={{opacity:'0.7',fontWeight:'bold',borderRadius:'5px',background:'#ccc',color:'#333',marginRight:'10px',marginBottom:'5px'}}>Node Js</div>
                <div className="p-2 border" style={{opacity:'0.7',fontWeight:'bold',borderRadius:'5px',background:'#ccc',color:'#333',marginRight:'10px',marginBottom:'5px'}}>Express Js</div>
               </div>
               <div className="row">
            
            <span style={{display:'flex',margin:'15px 0px'}}><Media src={img}></Media><h1 style={{fontSize:'25px',marginLeft:'5px',color:'#40739e'}}>DataBase</h1></span>  
            </div>
               <div className="row d-flex ">
                <div className="p-2 border" style={{opacity:'0.7',fontWeight:'bold',borderRadius:'5px',background:'#ccc',color:'#333',marginRight:'10px',marginBottom:'5px'}}>MongoDb/Mongoose</div>
                <div className="p-2 border" style={{opacity:'0.7',fontWeight:'bold',borderRadius:'5px',background:'#ccc',color:'#333',marginRight:'10px',marginBottom:'5px'}}>Sql</div>
        </div>
        <div className="row">
            
            <span style={{display:'flex',margin:'15px 0px'}}><Media src={img}></Media><h1 style={{fontSize:'25px',marginLeft:'5px',color:'#40739e'}}>Other FrameWorks</h1></span>  
            </div>
               <div className="row d-flex ">
                <div className="p-2 border" style={{opacity:'0.7',fontWeight:'bold',borderRadius:'5px',background:'#ccc',color:'#333',marginRight:'10px',marginBottom:'5px'}}>Java Swing</div>
                <div className="p-2 border" style={{opacity:'0.7',fontWeight:'bold',borderRadius:'5px',background:'#ccc',color:'#333',marginRight:'10px',marginBottom:'5px'}}>JavaFx</div>
        </div>
        <div className="row">
            
            <span style={{display:'flex',margin:'15px 0px'}}><Media src={img}></Media><h1 style={{fontSize:'25px',marginLeft:'5px',color:'#40739e'}}>DevOps</h1></span>  
            </div>
               <div className="row d-flex ">
                <div className="p-2 border" style={{opacity:'0.7',fontWeight:'bold',borderRadius:'5px',background:'#ccc',color:'#333',marginRight:'10px',marginBottom:'5px'}}>Github</div>
        </div>
        <div className="row">
            
            <span style={{display:'flex',margin:'15px 0px'}}><Media src={img}></Media><h1 style={{fontSize:'25px',marginLeft:'5px',color:'#40739e'}}>Cloud</h1></span>  
            </div>
               <div className="row d-flex ">
                <div className="p-2 border" style={{opacity:'0.7',fontWeight:'bold',borderRadius:'5px',background:'#ccc',color:'#333',marginRight:'10px',marginBottom:'5px'}}>Firebase</div>
                <div className="p-2 border" style={{opacity:'0.7',fontWeight:'bold',borderRadius:'5px',background:'#ccc',color:'#333',marginRight:'10px',marginBottom:'5px'}}>Heroku</div>
        </div>
        

        </div>
    )
}
