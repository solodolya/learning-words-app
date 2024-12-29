import { useState, useContext } from "react";
import { Route, Routes } from 'react-router-dom';
import Header from "../Components/Header/Header.jsx";
import Home from '../Pages/Home/Home.jsx';
import Game from '../Pages/Game/Game.jsx';
import Table from '../Pages/Table/Table.jsx';
import Error from '../Pages/Error/Error.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import { MyContext } from "../Context/MyContext.jsx";

import './app.scss';

export default function App() {
  const { stateContext } = useContext(MyContext);
  const [words, setWords] = useState(stateContext);
  const upd = {words, setWords};

  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game upd={upd} />} />
          <Route path="/table" element={<Table />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}