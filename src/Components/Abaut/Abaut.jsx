import "./Abaut.scss"
import my from"../../assets/yopng.png"
import { BsFileEarmarkArrowDownFill } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

const Abaut=()=>{
    const navigate=useNavigate()
    return <div className="abaut">
                <div className="Abaut2">
                    <div>
                        <h1>¿Quien soy?</h1>
                        <p>Soy un desarrollador full stack de la ciudad de Ibagué, Tolima, Colombia. Me apasiona la tecnología y estoy constantemente en busca de aprender nuevas habilidades y conocimientos relacionados con mi profesión. Me considero una persona curiosa y autodidacta, siempre dispuesto a explorar nuevas tecnologías y aprender de los demás en este emocionante camino del desarrollo.</p>
                <section className="cv" onClick={() => navigate("/cv")}>
                    <BsFileEarmarkArrowDownFill className="icoCv" /> <h1>Descargar cv</h1>
                </section>
                    </div>
                    <div>
                    <img src={my} alt="my" />
                    </div>
                </div>
     

            </div>
           
     
}
export default Abaut