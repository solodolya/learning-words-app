import "./AddWord.scss";

export default function AddWord() {
    return (
        <form className="add-form" name="addWord">
            <input
                className="add-form__input"
                type="text"
                placeholder="Новое слово"
            />
            <input
                className="add-form__input"
                type="text"
                placeholder="Транскрипция"
            />
            <input
                className="add-form__input"
                type="text"
                placeholder="Перевод"
            />
            <input
                className="add-form__input"
                type="text"
                placeholder="Тема"
            />
            <button className="add-form__button">Добавить слово</button>
        </form>
);
}