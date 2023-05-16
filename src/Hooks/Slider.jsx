
import {  useState } from "react"
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"
import "./Slider.css"

const Slider = ({ data, length }) => {
    const [position, setPosition] = useState(0);

    const handleSlider = (direction) => {
        if (direction === "next") {
            const newPosition = position === length - 1 ? 0 : position + 1;
            setPosition(newPosition);
        }
        if (direction === "prev") {
            const newPosition = position === 0 ? length - 1 : position - 1;
            setPosition(newPosition);
        }
    };

    return (
        <section className="slider">
            <MdNavigateNext className="NEXT" onClick={() => handleSlider("next")} />
            {typeof position === "number" && (
                <img src={data[position]} alt="slider" style={{ width: "100%" ,height:"200px"}} />
            )}
            <MdNavigateBefore className="PREV" onClick={() => handleSlider("prev")} />
        </section>
    );
};

export default Slider;
