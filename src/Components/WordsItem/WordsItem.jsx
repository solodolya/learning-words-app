import { useState } from 'react';
import propTypes from "prop-types";
import Button from "../Button/Button";

import "./WordsItem.scss";
import PropTypes from "prop-types";

function WordsItem(props) {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
        setEdit(!edit);
  }

  return (
    <form className={edit ? "edit-form__edit" : "edit-form"} name="editForm">
      {edit
        ?
        < EditWord {...props} handleState={handleEdit} />
        :
        < DisplayWord {...props} handleState={handleEdit} />
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
  const { id, english, transcription, russian, tags, handleState, updateWord } = props;
  const [inputEnglish, setEnglish] = useState(english);
  const [inputTranscription, setTranscription] = useState(transcription);
  const [inputTranslation, setTranslation] = useState(russian);
  const [inputTags, setTags] = useState(tags);
  const [error, setError] = useState(false);
  //const [disabled, setDisabled] = useState(false);

  const handleSubmit = () => {
    if (inputEnglish && inputTranscription && inputTranslation) {
      const data = {
        "id": props.id,
        "english": inputEnglish,
        "transcription": inputTranscription,
        "russian": inputTranslation,
        "tags": props.tags
      }
      updateWord(props.id, data);
      handleState();
    }
    else {
      setError(true);
    }
  }

  return (
    <>
      <input
        className={(error && !inputEnglish) ? "edit-form__content--error" : "edit-form__content"}
        value={inputEnglish}
        onChange={(e) => {
          setEnglish(e.target.value.trim())
        }}
        required
      />
      <input
        className={(error && !inputTranscription) ? "edit-form__content--error" : "edit-form__content"}
        value={inputTranscription}
        onChange={(e) => {
          setTranscription(e.target.value.trim())
        }}
        required
      />
      <input
        className={(error && !inputTranslation) ? "edit-form__content--error" : "edit-form__content"}
        value={inputTranslation}
        onChange={(e) => {
          setTranslation(e.target.value.trim())
        }}
        required
      />
      <input
        className={(error && !inputTags) ? "edit-form__content--error" : "edit-form__content"}
        value={inputTags}
        onChange={(e) => {
          setTags(e.target.value.trim())
        }}
        required
      />
      <Button type="delete" action="Отменить" onClick={handleState}/>
      <Button type="confirm" action="Сохранить" onClick={handleSubmit}/>
    </>
  )
}

EditWord.propTypes = {
  id: PropTypes.string,
  english: propTypes.string,
  transcription: propTypes.string,
  russian: propTypes.string,
  tags: propTypes.string,
  inputEnglish: propTypes.string,
  inputTranscription: propTypes.string,
  inputTranslation: propTypes.string,
  inputTags: propTypes.string,
  handleState: propTypes.func,
  handleSubmit: propTypes.func,
};

function DisplayWord(props) {
  const { english, transcription, russian, tags, handleState, deleteWord } = props;

  return (
    <>
      <p className="edit-form__content">{english}</p>
      <p className="edit-form__content">{transcription}</p>
      <p className="edit-form__content">{russian}</p>
      <p className="edit-form__content">{tags}</p>
      <Button type="confirm" action="Изменить" onClick={handleState}/>
      <Button type="delete" action="Удалить" onClick={deleteWord}/>
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