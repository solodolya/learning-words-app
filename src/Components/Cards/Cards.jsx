import { useEffect, useState } from "react";
import data from "../../data/words.json";
import CardItem from "../CardItem/CardItem.jsx";

import "./Cards.scss";

import Arrows from "../Arrows/Arrows.jsx";
import Button from "../Button/Button.jsx";

export default function Cards() {
    const [words, setWords] = useState(data);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const words = data;
        setWords(words);
    }, []);

    useEffect(() => {
        const lastIndex = words.length - 1;

        if (currentIndex < 0) {
            setCurrentIndex(lastIndex);
        }

        if (currentIndex > lastIndex) {
            setCurrentIndex(0);
        }
    }, [currentIndex, words]);

    return (
        <section className="cards-list">
            <div>
                {words.map((word, index) => {
                    let position = 'nextSlide';

                    if (index === currentIndex) {
                        position = 'activeSlide';
                    }

                    if (index === currentIndex - 1 || (currentIndex === 0 && index === words.length - 1)) {
                        position = 'lastSlide';
                    }

                    return (
                        <article className={position} key={word.id}>
                            <CardItem key={word.id} index={index} {...word}/>
                        </article>
                    )
                })}
                <Arrows/>
            </div>
            <div className="cards-list__buttons">
                <Button type="confirm" action="Знаю" onClick={() => setCount((count) => count + 1)}/>
                <Button type="edit" action="Повторить"/>
                <Button type="delete" action="Запомнить"/>
            </div>
            <div>
                <span className="cards-list__text">Выучено слов: {count}</span>
            </div>
        </section>
    )
}