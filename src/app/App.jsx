import { useState, useEffect } from "react";
import { NavLink, Route, Routes } from 'react-router-dom';
import Header from "../Components/Header/Header.jsx";
import Home from '../pages/Home/Home.jsx';
import Game from '../pages/Game/Game.jsx';
import Table from '../pages/Table/Table.jsx';
import Error from '../pages/Error/Error.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import data from "../data/words.json";
import './app.scss';


export default function App() {
  const [words, setWords] = useState(data);
  const upd = {words, setWords};

  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game upd={upd}/>} />
          <Route path="/table" element={<Table upd={upd}/>} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}