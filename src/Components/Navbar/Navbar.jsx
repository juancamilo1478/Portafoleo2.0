
import "./Navbar.scss"
// icons
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"
import { BsPersonSquare, BsArrowReturnLeft } from "react-icons/bs"
import { AiOutlineFileProtect } from "react-icons/ai"
import { TfiEmail } from "react-icons/tfi"
import { RiPaintBrushFill } from "react-icons/ri"
//image
import photo from  "../../assets/ca.png"
//hooks
import { useNavigate } from "react-router-dom"
import { useRef, useState } from "react"

const Navbar=()=>{
    const rootStyles = document.documentElement.style;
    const colordata=useRef()
    const [color, setColor] = useState('#000000');
    
    const handleColorChange = (event) => {
        const selectedColor = event.target.value;
        setColor(selectedColor);
        const R = event.target.value.split('').at(-6) + event.target.value.split('').at(-5)
        const G = event.target.value.split('').at(-4) + event.target.value.split('').at(-3)
        const B = event.target.value.split('').at(-1) + event.target.value.split('').at(-2)
        const DR = parseInt(R, 16);
        const DG = parseInt(G, 16);
        const DB = parseInt(B, 16);
        const media=(DR+DG+DB)/3
        console.log(DR,R)
        // Puedes realizar otras acciones con el color seleccionado
        console.log(media)
     
      
        if(media<200)
        {
            //color white
            rootStyles.setProperty('--textPrimary', `#ffffff`);
            rootStyles.setProperty('--textHover', `#000000`);
            rootStyles.setProperty('--primaty', `${event.target.value}`);
            rootStyles.setProperty('--secont', `rgb(${DR + 30},${DG + 30},${DB + 30})`);
            rootStyles.setProperty('--botton', `rgb(${DR + 100},${DG + 100},${DB + 100})`);
        }else{
            rootStyles.setProperty('--textPrimary', `#000000`);
            rootStyles.setProperty('--textHover', `#f0f0f0`);
       
            rootStyles.setProperty('--primaty', `${event.target.value}`);
            rootStyles.setProperty('--secont', `rgb(${DR - 30},${DG - 30},${DB - 30})`);
            rootStyles.setProperty('--botton', `rgb(${DR - 100},${DG - 100},${DB - 100})`);

        }
        
    };



    const navigate=useNavigate()
    return <div className="Navbar">
        <div className="NavPhoto">
            <img src={photo} alt="photo" />
        </div>
        <hr />
        <div className="NavContainer" onClick={()=>navigate("/abaut")}>
            < BsPersonSquare className="navIco"/>
            <h1>Sobre mí</h1>
        </div>
        <hr />
        <div className="NavContainer" onClick={()=>navigate("/proyects")}  >
            <AiOutlineFileProtect className="navIco" />
            <h1>Proyectos</h1>
        </div>
        <hr />
        <div className="NavContainer" onClick={() => navigate("/contact")} >
            < TfiEmail className="navIco" />
            <h1>Contactame</h1>
          
        </div>
        <hr />
        <div className="NavContainer" onClick={() => navigate("/")} >
            <BsArrowReturnLeft className="navIco" />
            <h1>Inicio</h1>
        </div>
        <hr />
        <div className="NavContainer"  >
            < RiPaintBrushFill className="navIco"   />
            <h1 ref={colordata}>color</h1> 
            <input type="color" value={color} onChange={handleColorChange} className="color"/>
        </div>
        <hr />
      
    <div className="NavLink">
            <a href="https://github.com/juancamilo1478" target="_blank" rel="noreferrer"><AiOutlineGithub className="navIco" /></a>
            <a href="https://www.linkedin.com/in/juan-camilo-saiz-sanjuan-a66245246/" target="_blank" rel="noreferrer"><AiFillLinkedin className="navIco" /></a>
    </div>      
    </div>
}
export default Navbar