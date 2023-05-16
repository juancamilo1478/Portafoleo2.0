import "./RickAndMorty.scss"
import titleRick from "../../../assets/titleRick.png"
import { useEffect, useRef } from "react";
import photo1 from "../../../assets/r1.png"
import photo2 from "../../../assets/r3.png"
import photo3 from "../../../assets/r4.png"
import photo4 from "../../../assets/r5.png"
import Slider from "../../../Hooks/Slider";
import paralax from "../../../assets/paralax2.png"
import sun from "../../../assets/sol.png"
import clouds from "../../../assets/nubes.jpg"
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai"
const RickAndMorty=()=>{
    const izquierda=useRef()
    const derecha=useRef()
    const divsun=useRef()
    const divRick=useRef()
    const rootStyles = document.documentElement.style;
    useEffect(() => {
        const handleMouseMove = (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            const { top, left } = izquierda.current.getBoundingClientRect(); 
            // const angle = Math.atan((mouseY - top) / (mouseX -   left));
            //calcule slope of the line angle
            const angle = Math.atan2((mouseY - top), (mouseX - left));
            const cosAnglex = Math.cos(angle);
            const cosAngley = Math.sin(angle);
               //max desplazamient 8px in x ,max desplazamient in y 5px
            rootStyles.setProperty('--eyeizx', `${cosAnglex*8}px`);
            rootStyles.setProperty('--eyeizy', `${cosAngley * 5}px`);
        };

        const handleScroll=()=>{
            const { y } = divsun.current.getBoundingClientRect()
            if (y < 410 && y>0){
                const dark=(y-500)/-4.5;
                const position=(y-50)/3.27;
                rootStyles.setProperty('--dark', `${dark}%`);
                rootStyles.setProperty('--position', `${position}%`);
            }
            // console.log(y)
        }

        document.addEventListener('mousemove', handleMouseMove);
        divRick.current.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            if (divRick.current) {
                divRick.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);
    const data=[photo1,photo2,photo3,photo4]

    return <div className="Rick" ref={divRick}>
        <div className="RickAnimation">
            <div className="eyes">
            <div className="eye"  ref={izquierda}/>     <div className="eye"  ref={derecha}/>
            </div>
        <img src={titleRick} alt="title" />
        </div>
        <div className="RickText" >
            <div>
                <h1>Rick and morty</h1>
                <p>My primera aplicacion echa en react.Esta aplicación permitirá a los usuarios ver todos los personajes de la serie y filtrarlos según sus características. Además, tendrán la posibilidad de agregar sus personajes favoritos a una lista personalizada.</p>
            </div>
            <div>
                <Slider data={data} length={data.length} />
            </div>
        </div>
        <div className="ParalaxRick" ref={divsun}>
        <img src={sun} alt="sun"  className="sun"/>
        <img src={clouds} alt="clouds" className="clouds"/>
        <img src={paralax} alt="walpeper" className="rickwalpeper"/>
        </div>
    <div className="BottonsRick">
            <a href="https://github.com/juancamilo1478/rick_and_morty" target="_blank" rel="noreferrer">
            <div className="BaitBottons">
                <div className="BaitBottons1">
                    <AiOutlineGithub className="BaitICO" />
                    <h2>Repositorio</h2>
                </div>
            </div>
            </a>
            <div className="BaitBottons">
                <a href="https://cardsgamereact.netlify.app/" target="_blank" rel="noreferrer">
                <div className="BaitBottons1">
                    <AiOutlineLink className="BaitICO" />
                    <h2>Deploy</h2>
                </div>
                </a>
            </div>
    </div>

        <div className="skillsRick">
            <h1>Tecnologias</h1>
            <div>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />   <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" /><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />   <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40" /></div>
        </div>
       
       
      

    </div>
}
export default RickAndMorty