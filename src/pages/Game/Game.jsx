import { useState } from 'react'
import GameItem from '../../components/GameItem/GameItem.jsx';
import Button from "../../Components/Button/Button.jsx";

import './Game.scss';

export default function Game({upd}) {
  const {words} = upd;
  const [active, setActive] = useState(0);
  const [count, setCount] = useState(0);

  function updIndexNext() {
    if (active === words.length - 1) {
      setActive(0);
      return;
    }
    setActive((prevActive) => prevActive + 1);
  }

  function updIndexPrev() {
    if (active === 0) {
      setActive(words.length - 1)
      return;
    }
    setActive((prevActive) => prevActive - 1);
  }

  return (
    <>
      <div className="container-cards">
        <div>
          <button className="cards-btn__prev" onClick={updIndexPrev}></button>
        </div>
        <GameItem {...words[active]}/>
        <div>
          <button className="cards-btn__next" onClick={updIndexNext}></button>
        </div>
      </div>
      <div className="game-btn">
        <Button type="confirm" action="Знаю" onClick={() => setCount((count) => count + 1)}/>
        <Button type="edit" action="Повторить"/>
        <Button type="delete" action="Запомнить"/>
      </div>
      <div>
        <span className="game-text">Выучено слов: {count}</span>
      </div>
    </>
  )
}