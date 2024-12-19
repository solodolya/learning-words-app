import { useRef, useState } from 'react'
import GameItem from '../../components/GameItem/GameItem.jsx';
import Button from "../../Components/Button/Button.jsx";

import './Game.scss';

export default function Game({upd}) {
  const {words} = upd;
  const [active, setActive] = useState(0);
  const [count, setCount] = useState(0);
  const ref = useRef();
  const countWords = () => {
    setCount((count) => count + 1)
  }

  function updIndexNext() {
    if (active === words.length - 1) {
      setActive(0);
      ref.current.focus();
      return;
    }
    setActive((prevActive) => prevActive + 1);
    ref.current.focus();
  }

  function updIndexPrev() {
    if (active === 0) {
      setActive(words.length - 1)
      ref.current.focus();
      return;
    }
    setActive((prevActive) => prevActive - 1);
    ref.current.focus();
  }

  return (
    <>
      <div className="container-cards">
        <div>
          <button className="cards-btn__prev" onClick={updIndexPrev}></button>
        </div>
        <GameItem {...words[active]} countWords={countWords} ref={ref}/>
        <div>
          <button className="cards-btn__next" onClick={updIndexNext}></button>
        </div>
      </div>
      <div className="game-btn">
        <Button type="confirm" action="Знаю"/>
        <Button type="edit" action="Повторить"/>
        <Button type="delete" action="Запомнить"/>
      </div>
      <div>
        <span className="game-text">Выучено слов: {count}</span>
      </div>
    </>
  )
}