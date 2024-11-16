import { useContext } from "react";
import { SliderContext } from "../Slider/Slider.jsx";

import "./Dot.scss";

export default function Dot({ number }) {
    const { goToSlide, slideNumber } = useContext(SliderContext);

    return (
        <div
            className={`dot ${slideNumber === number ? "selected" : ""}`}
            onClick={() => goToSlide(number)}
        />
    );
}