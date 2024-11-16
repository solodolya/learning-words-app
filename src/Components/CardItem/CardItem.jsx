import { useState } from "react";

import "./CardItem.scss";

export default function CardItem({ data: { id, english, russian, transcription } }) {
    const [display, setDisplay] = useState(false);

    const handleDisplay = () => {
        setDisplay(!display)
    }

    return (
        <div className="card-item"  >
            <div className="card-item__content">
                <p className="card-item__text">{english}</p>
                <p className="card-item__text">{transcription}</p>
                <p className={display ? "card-item__text" : "card-item__text--hidden"}>
                    {russian}
                </p>
                { !display &&
                   <button className="card-item__button" onClick={handleDisplay}>Перевод</button>
                }
            </div>
        </div>
    );
}