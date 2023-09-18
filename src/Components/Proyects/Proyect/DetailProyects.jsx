import "./Bait.scss"
 
import { BiReply } from "react-icons/bi";
import { SiReact, SiJavascript, SiPostgresql, SiNodedotjs, SiSequelize, SiRedux, SiFirebase,SiFlutter } from "react-icons/si"
const DetailProyects=({title,description,images,id,video,handleSelect,skills})=>{
   
    return <div >
          <div className="div90"  onClick={handleSelect}>
        <BiReply className="icoReturn"/>
        </div>
        <div className="descriptionTiTle">
        <h1>{title}</h1>
        </div>
        <div className="BaitContainer2">  
                <div>
                    <p>{description}</p>
                </div>
                <div>
                        <iframe
                            width="400"
                            height="215"
                            src={video}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        />
                </div>
            </div>
            <div className="skillsRick">
            <h1>Tecnologias</h1>
            <div>
            {skills.map((data,index)=>{
                return data==="Node"?<SiNodedotjs  className="icosProyect" />:data==="Flutter"?<SiFlutter className='icosProyect'/>:data==="PostgresSQL"?<SiPostgresql className='icosProyect'/>:<h1>que</h1>
            })}
            </div>
            {/* <div>
                <SiReact className="icosProyect" />
                <SiJavascript className="icosProyect" />
                <SiPostgresql className="icosProyect" />
                <SiNodedotjs className="icosProyect" />
                <SiSequelize className="icosProyect" />
                <SiRedux className="icosProyect" />
                < SiFirebase className="icosProyect" />
                </div> */}
        </div>
    </div>
}
export default DetailProyects