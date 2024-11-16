import "./Arrows.scss";

export default function Arrows() {

    return (
        <div className="arrows">
            <div className="arrow arrow__left" onClick={() => setCurrentIndex(prevState => prevState - 1)}></div>
            <div className="arrow arrow__right" onClick={() => setCurrentIndex(prevState => prevState + 1)}></div>
        </div>
    )
}