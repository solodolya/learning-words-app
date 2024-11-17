import  { useState, useEffect } from 'react';

import './GameItem.scss';

export default function GameItem({ id, english, transcription, russian }) {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display)
  }

  useEffect(() => {
    if (display) {
      setDisplay(!display)
    }
  }, [id])

  return (
    <div className="card-item">
      <div className="card-item__content">
        <p className="card-item__text">{english}</p>
        <p className="card-item__text--small">{transcription}</p>
        <p className={display ? "card-item__text" : "card-item__text--hidden"}>
          {russian}
        </p>
        {!display &&
          <button className="card-item__button" onClick={handleDisplay}>Перевод</button>
        }
      </div>
    </div>
  )
}