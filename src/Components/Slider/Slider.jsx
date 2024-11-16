import { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";
import data from "../../data/words.json";
import CardsList from "../CardsList/CardsList.jsx";

import Arrows from "../Arrows/Arrows.jsx";
import Dots from "../Dots/Dots.jsx";

import "./Slider.scss";

export const SliderContext = createContext();

function Slider({ width, height }) {
    const [items, setItems] = useState(data);
    const [slide, setSlide] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null)

    useEffect(() => {
        const items = data;
        setItems(items);
    }, []);

    const goToSlide = (number) => {
        setSlide(number % items.length);
    };

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    }

    const handleTouchMove = (e) => {
        if (touchPosition === null) {
            return;
        }

        const currentPosition = e.touches[0].clientX;
        const direction = touchPosition - currentPosition;

        if (direction > 10) {
            changeSlide(1);
        }

        if (direction < -10) {
            changeSlide(-1);
        }

        setTouchPosition(null);
    }

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;

        if (slide + direction < 0) {
            slideNumber = items.length - 1;
        } else {
            slideNumber = (slide + direction) % items.length;
        }

        setSlide(slideNumber);
    }

    return (
        <div
            style={{width:"100%", height:"100%"}}
            className="slider"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <SliderContext.Provider
                value={{
                    goToSlide,
                    changeSlide,
                    slidesCount: items.length,
                    slideNumber: slide,
                    items,
                }}
            >
                <CardsList />
                <Dots/>
            </SliderContext.Provider>
        </div>
    );
}

Slider.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string
};

export default Slider;