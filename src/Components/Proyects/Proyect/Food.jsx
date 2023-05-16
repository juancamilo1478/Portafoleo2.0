
import "./Food.scss"
import photo1 from"../../../assets/mano1.png";
import photo2 from"../../../assets/mano2.png";
import Slider from "../../../Hooks/Slider";
import PhotoS1 from "../../../assets/1.jpg";
import PhotoS2 from "../../../assets/2.jpg";
import { useEffect, useRef } from "react";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai"
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
            <AiOutlineGithub className="FoodICO"/>
            <AiOutlineLink className="FoodICO" /> 
            </div>
        </div>
        <div className="skillsFood">
            <h1>Tecnologias</h1>
            <div>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" />   <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" /><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" />  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40" /> </div>
        </div>
    </div>
}
export default Food