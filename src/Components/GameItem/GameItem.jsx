import {useState, useEffect, forwardRef } from 'react';

import './GameItem.scss';

export default function GameItem({ id, english, transcription, russian, countWords, ref }) {
  const [display, setDisplay] = useState(false);

  const TranslateBtn = forwardRef((props, ref) => (
    <button {...props} ref={ref}>{props.children}</button>
  ));

  const handleDisplay = () => {
  setDisplay(!display);
  countWords();
  }

  useEffect(() => setDisplay(false), [id]);

  return (
    <div className="card-item">
      <div className="card-item__content">
        <p className="card-item__text">{english}</p>
        <p className="card-item__text--small">{transcription}</p>
        <p className={display ? "card-item__text" : "card-item__text--hidden"}>
          {russian}
        </p>
        {!display &&
          <TranslateBtn
                  className="card-item__button"
                  onClick={handleDisplay}
                  ref={ref}
          >
            Перевод
          </TranslateBtn>
        }
      </div>
    </div>
  )
}