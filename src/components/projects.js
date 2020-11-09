import React,{useState} from 'react'
import {
   Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import Fade from 'react-reveal/Zoom';
import Zoom from 'react-reveal/Fade';

import '../App.css';
import img from '../img/photo-1472289065668-ce650ac443d2.jpg';
  function List({name})
  {
    return (
        <div className="w-100">
          <Card className="bg-white   d-flex flex-auto  flex-column shadow m-auto bg-white  card" style={{height:'500px',width:"330px"}}>
            <div>
            <CardImg className="w-100 h-100  rounded" style={{}} src={img} /></div>
            
            <CardBody className="d-flex flex-auto flex-column">
              <div className="d-flex flex-row justify-content-between">
              <CardTitle tag="h5">{name.name}</CardTitle>
              <CardSubtitle tag="h6" className="align-self-center text-muted">{name.type}</CardSubtitle>
              </div>
              <div className="m-auto align-self-bottom">
             <CardText tag="h6">{name.des}</CardText>
              <Button style={{display:'block',margin:'auto'}}>Button</Button></div>
            </CardBody>
          </Card>
        </div>
      );
  }

export default function Projects() {
    const[project,setproject]=useState([
        {
            name:'snake game',
            type:'java',
            des:'This project is based on the popular and all time classic game , it is build on java platform using swing framework and provides great user experience.',
            filter:false,
            cat:'desktop'
        },
        {
            name:'Covid-Tracker',
            type:'javascript',
            des:'This project fetches live json data using ES7 feature async/await and displays it on the mainstream website,moreover it compares the live data between states using charts and has NLP feature implemented which is a  google assistant like feature ',
            filter:false,
            cat:'web app'
        },
        {
            name:'resume sorted ',
            type:'javascript',
            des:'developed on javascript electron library,this desktop app searches for the required keyword from any type of file using (Amazon Textract) and displays it serially',
            filter:false,
            cat:'desktop'
        },
        {
          name:'textreme',
           type:'java',
           des:'This desktop app is basically a notepad clone ,and it performs all the basic operation using java swing',
           filter:false,
           cat:'web app'
        },
        {
          name:'discordBot',
          type:'nodejs/Express',
          des:'this discord bot uses axios to fetch world weather data from weather Api,and its backend is developed using discord js ',
          filter:false,
          cat:'web app'
        },
        {
          name:'Simple Rest Api',
          type:'nodejs/express',
          des:'This rest api allows to perform crud operation  via postman, and it authenticates user using jwt authentication',
          filter:false,
          cat:'rest api'
        }

    ])
    const [val1,setVal1]=useState(true);
    const [val2,setVal2]=useState(false);
    const [val3,setVal3]=useState(false);
    const [val4,setVal4]=useState(false);
   
    function handleState(param)
    {
      setVal1(param===''?true:false);
      setVal2(param==='desktop'?true:false);
      setVal3(param==='web app'?true:false);
      setVal4(param==='rest api'?true:false);

    }
    const handleClick=(param)=>{

      handleState(param);
       const newProj=[...project];
       newProj.map((x,index)=>{
         if(x.cat===param || param==='')
         {
           newProj[index].filter=false;
         }
         else
         {
          newProj[index].filter=true;
         }

       })
       setproject(newProj);
    }

    return (
        <div > 
        
        <h1 className="mb-4"  style={{paddingBottom:'1px',width:'fit-content',fontSize:"25px",color:' #2980b9',margin:'auto'}}>Projects<div style={{width:'60%',height:'3px',background:'#40739e',opacity:'1',margin:'auto'}} className="mt-1"></div></h1>

        
        <div className="container d-flex   justify-content-md-center mb-lg-3 ">
          <Button className="text-uppercase font-weight-normal" onClick={()=>handleClick('')} style={{color:val1==true?'#333':'#ccc',outline:'none',border:'none',fontWeight:'bold',background:'transparent' , borderRadius:'5px'}}>all</Button>
          <Button className="text-uppercase font-weight-normal"  onClick={()=>handleClick('desktop')} style={{color:val2==true?'#333':'#ccc',border:'none',fontWeight:'bold',background:'transparent' , borderRadius:'5px'}}>desktop</Button>
          <Button className="text-uppercase font-weight-normal"  onClick={()=>handleClick('web app')} style={{color:val3==true?'#333':'#ccc',border:'none',fontWeight:'bold',background:'transparent' , borderRadius:'5px'}}>Web App</Button>
          <Button className="text-uppercase font-weight-normal"  onClick={()=>handleClick('rest api')} style={{color:val4==true?'#333':'#ccc',border:'none',fontWeight:'bold',background:'transparent' , borderRadius:'5px'}}>Rest api</Button>  
        </div>
        
        <div className=' container-fluid '>
         <div className="m-auto">
         <div className="row w-100 no-gutters justify-content-center">
         {project.map(x=>(
          <Fade left duration={1200} when={!x.filter}>
          <div className="col-lg-3 col-md-6 m-3   no-pad " style={{display:x.filter?'none':'block'}} >
          <Zoom left>
          <List name={x}/>   
          </Zoom>
          </div>
          </Fade>
         ))}               
        </div>
        </div>
        </div>
        </div>
       
    )
}
