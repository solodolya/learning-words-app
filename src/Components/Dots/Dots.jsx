import { useContext } from "react";
import { SliderContext } from "../Slider/Slider.jsx";
import Dot from "../Dot/Dot.jsx";

import "./Dots.scss";

export default function Dots() {
    const { slidesCount } = useContext(SliderContext);

    const renderDots = () => {
        const dots = [];
        for (let i = 0; i < slidesCount; i++) {
            dots.push(<Dot key={`dot-${i}`} number={i} />);
        }

        return dots;
    };

    return <div className="dots">{renderDots()}</div>;
}