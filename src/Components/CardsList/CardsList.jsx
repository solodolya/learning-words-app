import { useState, useContext } from 'react';
import { SliderContext} from "../Slider/Slider.jsx";
import CardItem from "../CardItem/CardItem.jsx";

import Button from "../Button/Button.jsx";

import "./CardsList.scss";

export default function CardsList() {
    const [count, setCount] = useState(0);
    const { slideNumber, items } = useContext(SliderContext);

    return (
        <>
            <div
                className="cards-list"
                style={{ transform: `translateX(-${slideNumber * 100}%)` }}
            >
                {items.map((slide, index) => (
                    <CardItem key={index} index={slide.id} data={slide} />
                ))}
            </div>
            <div className="cards-list__buttons">
                <Button type="confirm" action="Знаю" onClick={() => setCount((count) => count + 1)}/>
                <Button type="edit" action="Повторить"/>
                <Button type="delete" action="Запомнить"/>
            </div>
            <div>
                <span className="cards-list__text">Выучено слов: {count}</span>
            </div>
        </>
    );
}