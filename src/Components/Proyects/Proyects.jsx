import { useState } from "react";
import "./Proyects.scss";
 
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"
 
import ProyectGeneral from "./Proyect/ProyectsGeneral";
import ProyectsWebs from "./Proyect/ProyectsWebs";

const Proyects = () => {
    const [ProyectPosition, setProyectposition] = useState(0);

    const handleProyect = (action) => {
        console.log(ProyectPosition);
        if (action === "next") {
            if (ProyectPosition === 1) {
                setProyectposition(0);
            } else {
                const next = ProyectPosition + 1;
                setProyectposition(next);
            }
        }
        if (action === "previus") {
            if (ProyectPosition === 0) {
                setProyectposition(1);
            } else {
                const next = ProyectPosition - 1;
                setProyectposition(next);
            }
        }
    };

    return (
        <div className="Proyects">
            
            <div className="ProyectContainer">
                < MdNavigateBefore
                    className="ProyectIconNext"
                    onClick={() => handleProyect("next")}
                />
                {ProyectPosition === 0 ? (
                           <ProyectsWebs/>
                ) : ProyectPosition === 1 ? (
                    <ProyectGeneral/>
                ) :null}
                <MdNavigateNext 
                    className="ProyectIcon"
            
                    onClick={() => handleProyect("previus")}
                />
            </div>
        </div>
    );
};

export default Proyects;
