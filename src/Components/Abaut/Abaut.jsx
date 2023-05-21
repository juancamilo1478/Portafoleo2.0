import "./Abaut.scss"
import my from"../../assets/yopng.png"
const Abaut=()=>{
    return <div className="abaut">
        <div className="aboutContainer">
            <div className="containerAbaut">
            
                <div className="AboutText">
                    <div>
                        <p>Soy un desarrollador full stack de la ciudad de Ibagué, Tolima, Colombia. Me apasiona la tecnología y estoy constantemente en busca de aprender nuevas habilidades y conocimientos relacionados con mi profesión. Me considero una persona curiosa y autodidacta, siempre dispuesto a explorar nuevas tecnologías y aprender de los demás en este emocionante camino del desarrollo.</p>
                    </div>
                    <div>
                    <img src={my} alt="my" />
                    </div>
                </div>




            </div>
           
        </div>
    </div>
}
export default Abaut