
import "./Navbar.scss"
// icons
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"
import { BsPersonSquare, BsArrowReturnLeft } from "react-icons/bs"
import { AiOutlineFileProtect } from "react-icons/ai"
import { TfiEmail } from "react-icons/tfi"
//image
import photo from  "../../assets/ca.png"
//hooks
import { useNavigate } from "react-router-dom"
const Navbar=()=>{
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
    <div className="NavLink">
            <AiOutlineGithub className="navIco" />
            <AiFillLinkedin className="navIco" />
    </div>      
    </div>
}
export default Navbar