
import "./Food.scss"
import photo1 from"../../../assets/mano1.png";
import photo2 from"../../../assets/mano2.png";
import Slider from "../../../Hooks/Slider";
import PhotoS1 from "../../../assets/1.jpg";
import PhotoS2 from "../../../assets/2.jpg";
import { useEffect, useRef } from "react";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

import { SiReact, SiJavascript, SiPostgresql, SiNodedotjs, SiSequelize, SiRedux, SiSass } from "react-icons/si"
const Food =()=>{
    const DivAnimation=useRef()
    const Animation = useRef();
    const rootStyles=document.documentElement.style;
    useEffect(() => {
        const handleScroll = () => {
            const { y } = Animation.current.getBoundingClientRect()
            if(y<500 && y>0)
            {
                const desplazamientoX = (y - 760) / 13;
                const angle = (y - 500) / -8.667
                rootStyles.setProperty('--desplazamient', `${desplazamientoX}%`);
                rootStyles.setProperty('--angle',`${angle}deg`);
                
            }        
        };

        DivAnimation.current.addEventListener('scroll', handleScroll);

        return () => {
            if (DivAnimation.current) {
                DivAnimation.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);


 

    
    const data=[PhotoS1,PhotoS2]

    return <div className="Food" ref={DivAnimation} >
        <div className="FoodtContainerText" >
            <div>
                <h1>Food</h1>
                    <p>Esta aplicación ofrece a los usuarios una solución completa para buscar y seleccionar diferentes tipos de comidas según sus necesidades dietéticas. Además, permite a los usuarios crear y clasificar nuevas recetas de cocina de acuerdo a su dieta, lo que les permite compartir sus ideas y ayudar a otros usuarios a llevar una dieta más acorde a sus necesidades.</p>
            </div>
            <div>
                <Slider data={data} length={data.length}/>
            </div>      
        </div>
        <div className="FoodAnimation" ref={Animation} >
            <img src={photo2} alt="up" className="FoodUp" />
            <img src={photo1} alt="Down" className="FoodDown"/>
            <div className="FoodIcons">
            <a href="https://github.com/juancamilo1478/food" target="_blank" rel="noreferrer">   
            <AiOutlineGithub className="FoodICO"/>
            </a>
                <a href="https://nimble-brigadeiros-9e61f5.netlify.app/" target="_blank" rel="noreferrer">   
            <AiOutlineLink className="FoodICO" /> 
                </a>
            </div>
        </div>
        <div className="skillsRick">
            <h1>Tecnologias</h1>
            <div>
                
                <SiReact className="icosProyect"/>
                <SiJavascript className="icosProyect" />
                <SiPostgresql className="icosProyect" />
                <SiNodedotjs className="icosProyect" />
                <SiSequelize className="icosProyect" /> 
                <SiRedux className="icosProyect" /> 
                <SiSass className="icosProyect" />
                </div>
        </div>
    </div>
}
export default Food