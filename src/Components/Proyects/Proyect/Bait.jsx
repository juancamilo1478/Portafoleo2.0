 
import "./Bait.scss"
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai"

const Bait=()=>{
 
    return<div className="Bait">
        <div className="BaitContainer"> 
            <div className="ContainerB3">
                <h1>Bait</h1> 
            <div className="BaitContainer2">  
            
                <div>
                    <p>Bait es una página web de reseñas de restaurantes que permite a los usuarios buscar locales cercanos según filtros de comida. Los usuarios pueden compartir su experiencia y opiniones sobre los restaurantes visitados, utilizando funcionalidades como la geolocalización y la cámara para agregar reseñas. De esta manera, los demás usuarios pueden tomar decisiones informadas al elegir un restaurante</p>
                </div>
                <div>
                        <iframe
                            width="400"
                            height="215"
                            src={`https://www.youtube.com/embed/ENEtQZqkX98`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        />
                </div>
            </div>
            </div>
            <div className="BaitBottons">
                <a href="https://github.com/Rzyfront/Bait-App" target="_blank" rel="noreferrer">    
                <div className="BaitBottons1">
                    <AiOutlineGithub className="BaitICO" />
                    <h2>Repositorio</h2>
              
            </div>
                </a>
      
                <a href="https://bait-one.vercel.app/" target="_blank" rel="noreferrer">    
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
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" />   <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" /><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" />  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40" />  <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" /> </div>
        </div>
    </div>
}
export default Bait