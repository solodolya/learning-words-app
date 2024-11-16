import "./Header.scss";

export default function Header() {
    return (
        <header className="header">
            <a className="header__logo" href="#"></a>
            <ul className="header__nav">
                <li className="header__nav-item">Главная страница</li>
                <li className="header__nav-item">Страница с карточками</li>
            </ul>
        </header>
    )
}