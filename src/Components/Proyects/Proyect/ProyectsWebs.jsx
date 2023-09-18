import { useState } from "react"
import "./Bait.scss"
import Bait from "./Bait";
import { BiReply } from "react-icons/bi";
import Food from "./Food"
import RickAndMorty from './RickAndMorty'
const ProyectsWebs=()=>{
    const [SelectApp,setSelectapp]=useState(null);    
    const handleSelect=(data)=>{
        if(SelectApp===null){
       setSelectapp(data)
        }else{
        setSelectapp(null)
        }    
    }
    const selectComponent=(datatitle)=>{
        const data={titlle:datatitle}
        setSelectapp(data);
    }
    return <div className="containerData">
        
    <div className="Title">
       <h2>Webs</h2>
       </div>
     {SelectApp===null?  <div className="ListCard">  
        <div className='card' onClick={()=>selectComponent("Bait")} >
            <img src='https://res.cloudinary.com/dirsusbyy/image/upload/v1695004878/m785zae7mxuau9l6iaq7.png'/>
            <h1>Bait</h1>
    </div>
     <div className='card'  onClick={()=>selectComponent("Rick")} >
            <img src='https://res.cloudinary.com/dirsusbyy/image/upload/v1695006261/w2xbetlyiftlrvtvdvq8.jpg'/>
            <h1>Rick and morty</h1>
    </div>
    <div className='card' onClick={()=>selectComponent("Food")} >
            <img src='https://res.cloudinary.com/dirsusbyy/image/upload/v1695008108/uorapgrj6zhq1if1xqc6.png'/>
            <h1>Food</h1>
    </div>
        {/* {SelectApp===null? Json.map((data,Index)=>{
            return <ProyectGeneralCard title={data.title} description={data.description}   skills={data.skills} video={data.video} key={Index} images={data.images} id={data.id} handleSelect={handleSelect}/>
        }):<DetailProyects  title={SelectApp.title} description={SelectApp.description}  skills={SelectApp.skills} video={SelectApp.video}   images={SelectApp.images} id={SelectApp.id} handleSelect={handleSelect}/>} */}
        </div> :SelectApp.titlle==="Bait"?<div>
        <div className="div90"  onClick={handleSelect}>
        <BiReply className="icoReturn"/>
        </div>
            <Bait/></div>:SelectApp.titlle==="Food"?  <div>
        <div className="div90"  onClick={handleSelect}>
        <BiReply className="icoReturn"/>
        </div>
            <Food/></div>:SelectApp.titlle==="Rick"?<div>
        <div className="div90"  onClick={handleSelect}>
        <BiReply className="icoReturn"/>
        </div>
            <RickAndMorty/></div> :null}
      
    </div>
}
export default ProyectsWebs;