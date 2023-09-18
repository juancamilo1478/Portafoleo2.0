import { useState } from "react"
import "./Bait.scss"
import Json from "./CardProyect.json"
import ProyectGeneralCard from "./ProyectGeneralCard"
import DetailProyects from "./DetailProyects"
const ProyectGeneral=()=>{
    const [SelectApp,setSelectapp]=useState(null);
    
    const handleSelect=(data)=>{
        if(SelectApp===null){
       setSelectapp(data)
        }else{
        setSelectapp(null)
        }
       
    }
     
    return <div className="containerData">
        <div className="Title">
           <h2>Apps</h2>
           </div>
            <div className="ListCard">

            {SelectApp===null? Json.map((data,Index)=>{
                return <ProyectGeneralCard title={data.title} description={data.description}   skills={data.skills} video={data.video} key={Index} images={data.images} id={data.id} handleSelect={handleSelect}/>
            }):<DetailProyects  title={SelectApp.title} description={SelectApp.description}  skills={SelectApp.skills} video={SelectApp.video}   images={SelectApp.images} id={SelectApp.id} handleSelect={handleSelect}/>}
            </div>
        </div>
}
export default ProyectGeneral