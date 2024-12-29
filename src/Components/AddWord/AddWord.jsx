import "./AddWord.scss";
import {useState} from "react";

export default function AddWord(props) {
  const { inputNewEnglish, setNewEnglish, inputNewTranscription, setNewTranscription, inputNewTranslation, setNewTranslation, inputNewTags, setNewTags, addNewWord, error, disabled } = props;

  return (
    <form className="add-form" name="addWord">
      <input
        className={(error && !inputNewEnglish) ? "add-form__input--error" : "add-form__input"}
        name="english"
        type="text"
        placeholder="Новое слово"
        value={inputNewEnglish}
        onChange={(e) => setNewEnglish(e.target.value.trim())}
        required
      />
      <input
        className={(error && !inputNewTranscription) ? "add-form__input--error" : "add-form__input"}
        name="transcription"
        type="text"
        placeholder="Транскрипция"
        value={inputNewTranscription}
        onChange={(e) => setNewTranscription(e.target.value.trim())}
        required
      />
      <input
        className={(error && !inputNewTranslation) ? "add-form__input--error" : "add-form__input"}
        name="translation"
        type="text"
        placeholder="Перевод"
        value={inputNewTranslation}
        onChange={(e) => setNewTranslation(e.target.value.trim())}
        required
      />
      <input
        className={(error && !inputNewTags) ? "add-form__input--error" : "add-form__input"}
        name="tags"
        type="text"
        placeholder="Тема"
        value={inputNewTags}
        onChange={(e) => setNewTags(e.target.value.trim())}
        required
      />
      <button className="add-form__button" onClick={addNewWord} >Добавить слово</button>
    </form>
  );
}