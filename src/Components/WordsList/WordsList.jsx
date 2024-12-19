import WordsItem from "../WordsItem/WordsItem.jsx";
import AddWord from "../AddWord/AddWord.jsx";
import data from "../../data/words.json";

import "./WordsList.scss";

export default function WordsList() {

    return (
        <>
            <AddWord />
            <article className="words-list">
                <div className="words-list__titles">
                    <h3 className="words-list__title" name="english">Слово</h3>
                    <h3 className="words-list__title" name="transcription">Транскрипция</h3>
                    <h3 className="words-list__title" name="translation">Перевод</h3>
                    <h3 className="words-list__title" name="tags">Тема</h3>
                    <h3 className="words-list__title"></h3>
                </div>
                <div className="words-list__content">
                    {data.map((item) => (
                        <WordsItem key={item.id} {...item} />
                    ))}
                </div>
            </article>
        </>
    );
}