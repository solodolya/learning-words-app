import { useState } from "react";
import propTypes from "prop-types";
import Button from "../Button/Button";

import "./WordsItem.scss";

function WordsItem(props) {
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(!edit);
    }

    return (
        <form className={edit ? "edit-form__edit" : "edit-form"} name="editForm">
            {edit
                ?
                < EditWord {...props} handleState={handleEdit}/>
                :
                < DisplayWord {...props} handleState={handleEdit}/>
            }
        </form>
    );
}

WordsItem.propTypes = {
    english: propTypes.string,
    transcription: propTypes.string,
    russian: propTypes.string,
    tags: propTypes.string,
    handleState: propTypes.func
};

function EditWord(props) {
    const { english, transcription, russian, tags, handleState } = props;
    const [inputEnglish, setEnglish] = useState(english);
    const [inputTranscription, setTranscription] = useState(transcription);
    const [inputTranslation, setTranslation] = useState(russian);
    const [inputTags, setTags] = useState(tags);
    const [error, setError] = useState([]);
    const [disabled, setDisabled] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputEnglish.trim() === "" || inputTranscription.trim() === "" || inputTranslation.trim() === "" || inputTags.trim() === "") {
        setDisabled(!disabled);
      }
      console.log("Сохранено новое слово:", inputEnglish, inputTranscription, inputTranslation, inputTags);
    }

    function addError(newError) {
      setError([...error, newError]);
      console.log(error);
    }

    function removeError(emptyError) {
      const updError = error.filter((item) => item !== emptyError);
      setError(updError);
      console.log(error);
    }

    return (
        <>
            <input
                className={error.includes("english") === true ? "edit-form__content--error" : "edit-form__content"}
                value={inputEnglish}
                onChange={(e) => {
                    if (e.target.value.trim() === "") {
                      addError("english");
                    }
                    setEnglish(e.target.value);
                    removeError("english");
                }}
                required
            />
            <input
                className={error.includes("transcription") === true ? "edit-form__content--error" : "edit-form__content"}
                value={inputTranscription}
                onChange={(e) => {
                   if (e.target.value.trim() === "") {
                  addError("transcription");
                }
                  setTranscription(e.target.value);
                  removeError("transcription");
                }}
                required
            />
            <input
                className={error.includes("translation") === true ? "edit-form__content--error" : "edit-form__content"}
                value={inputTranslation}
                onChange={(e) => {
                    if (e.target.value.trim() === "") {
                      addError("translation");
                    }
                    setTranslation(e.target.value);
                    removeError("translation");
                }}
                required
            />
            <input
                className={error.includes("tags") === true ? "edit-form__content--error" : "edit-form__content"}
                value={inputTags}
                onChange={(e) => {
                    if (e.target.value.trim() === "") {
                      addError("tags");
                    }
                    setTags(e.target.value);
                    removeError("tags");
                }}
                required
            />
            <Button type="delete" action="Отменить" onClick={handleState}/>
            <Button type="confirm" action="Сохранить" onClick={handleSubmit} disabled={disabled}/>
        </>
    )
}

EditWord.propTypes = {
    english: propTypes.string,
    transcription: propTypes.string,
    russian: propTypes.string,
    tags: propTypes.string,
    handleState: propTypes.func
};

function DisplayWord(props) {
    const { english, transcription, russian, tags, handleState } = props;

    return (
        <>
            <p className="edit-form__content">{english}</p>
            <p className="edit-form__content">{transcription}</p>
            <p className="edit-form__content">{russian}</p>
            <p className="edit-form__content">{tags}</p>
            <Button type="confirm" action="Изменить" onClick={handleState}/>
            <Button type="delete" action="Удалить"/>
        </>
    )
}

DisplayWord.propTypes = {
    english: propTypes.string,
    transcription: propTypes.string,
    russian: propTypes.string,
    tags: propTypes.string,
    handleState: propTypes.func
}

export default WordsItem;