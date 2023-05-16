import { useState } from "react";
import "./Proyects.scss";
import RickAndMorty from "./Proyect/RickAndMorty";
import Food from "./Proyect/Food";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"
import Bait from "./Proyect/Bait";

const Proyects = () => {
    const [ProyectPosition, setProyectposition] = useState(0);

    const handleProyect = (action) => {
        console.log(ProyectPosition);
        if (action === "next") {
            if (ProyectPosition === 2) {
                setProyectposition(0);
            } else {
                const next = ProyectPosition + 1;
                setProyectposition(next);
            }
        }
        if (action === "previus") {
            if (ProyectPosition === 0) {
                setProyectposition(2);
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
                    <Bait />
                ) : ProyectPosition === 1 ? (
                    <Food />
                ) : (
                    <RickAndMorty />
                )}
                <MdNavigateNext 
                    className="ProyectIcon"
            
                    onClick={() => handleProyect("previus")}
                />
            </div>
        </div>
    );
};

export default Proyects;
