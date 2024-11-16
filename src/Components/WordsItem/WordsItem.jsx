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
    return (
        <>
            <input
                className="edit-form__content"
                value={inputEnglish}
                onChange={(evt) => {
                    setEnglish(evt.target.value)
                }}/>
            <input
                className="edit-form__content"
                value={inputTranscription}
                onChange={(evt) => {
                    setTranscription(evt.target.value)
                }}/>
            <input
                className="edit-form__content"
                value={inputTranslation}
                onChange={(evt) => {
                    setTranslation(evt.target.value)
                }}/>
            <input
                className="edit-form__content"
                value={inputTags}
                onChange={(evt) => {
                    setTags(evt.target.value)
                }}/>
            <div className="edit-form__buttons">
                <Button type="delete" action="Отменить" onClick={handleState}/>
                <Button type="confirm" action="Сохранить"/>
            </div>
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
    const {english, transcription, russian, tags, handleState} = props;

    return (
        <>
            <p className="edit-form__content">{english}</p>
            <p className="edit-form__content">{transcription}</p>
            <p className="edit-form__content">{russian}</p>
            <p className="edit-form__content">{tags}</p>
            <div className="edit-form__buttons">
                <Button type="confirm" action="Изменить" onClick={handleState}/>
                <Button type="delete" action="Удалить"/>
            </div>
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