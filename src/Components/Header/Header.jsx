import { NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header() {
    return (
      <header className="header">
        <nav className="header__nav">
          <NavLink className="header__nav-item header__logo" to='/'></NavLink>
          <NavLink className="header__nav-item" to='/table'>Главная страница</NavLink>
          <NavLink className="header__nav-item" to='/game'>Страница с карточками</NavLink>
        </nav>
      </header>
    )
}