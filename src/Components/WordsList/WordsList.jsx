import { useContext, useState } from "react";
import { MyContext } from "../../Context/MyContext.jsx";
import WordsItem from "../WordsItem/WordsItem.jsx";
import AddWord from "../AddWord/AddWord.jsx";
import POST from "../../Services/POST.js";
import DELETE from "../../Services/DELETE.js";
import UPDATE from "../../Services/UPDATE.js";

import "./WordsList.scss";

export default function WordsList() {
  const { stateContext, setStateContext } = useContext(MyContext);
  const [words, setWords] = useState(stateContext);
  const [inputNewEnglish, setNewEnglish] = useState('');
  const [inputNewTranscription, setNewTranscription] = useState('');
  const [inputNewTranslation, setNewTranslation] = useState('');
  const [inputNewTags, setNewTags] = useState('');
  const [inputEnglish, setEnglish] = useState(words.english);
  const [inputTranscription, setTranscription] = useState(words.transcription);
  const [inputTranslation, setTranslation] = useState(words.russian);
  const [inputTags, setTags] = useState(words.tags);
  const [error, setError] = useState(false);

  //const upd = { words, setWords };

  function deleteWord(id) {
    const updatedData = words.filter((item) => item.id !== id);
    setStateContext (updatedData);
    DELETE.deleteData(id);
  }

  function addNewWord(e) {
    e.preventDefault();
    if (inputNewEnglish && inputNewTranscription && inputNewTranslation && inputNewTags) {
      const id = words.length ? words[words.length - 1].id + 1 : 1;
      const wordToAdd = {id: id, english: inputNewEnglish, transcription: inputNewTranscription, russian: inputNewTranslation, tags: inputNewTags, tags_json: ''};
      const updatedData = [...words, wordToAdd];
      setStateContext(updatedData);
      POST.addData(wordToAdd);
      setNewEnglish('');
      setNewTranscription('');
      setNewTranslation('');
      setNewTags('');
      setError(false);
    }
    else {
      setError(true);
    }
  }

  function updateWord() {
    const wordToUpdate = words.filter((item) => item.id === id);
    const updatedWord = {id: wordToUpdate.id, english: inputEnglish, transcription: inputTranscription, russian: inputTranslation, tags: inputTags, tags_json: ''};
    UPDATE.updateData(wordToUpdate.id, updatedWord);
  }

  return (
    <>
    <AddWord inputNewEnglish={inputNewEnglish} setNewEnglish={setNewEnglish} inputNewTranscription={inputNewTranscription} setNewTranscription={setNewTranscription} inputNewTranslation={inputNewTranslation} setNewTranslation={setNewTranslation} inputNewTags={inputNewTags} setNewTags={setNewTags} addNewWord={addNewWord} error={error} />
        <article className="words-list">
          <div className="words-list__titles">
            <h3 className="words-list__title" name="english">Слово</h3>
            <h3 className="words-list__title" name="transcription">Транскрипция</h3>
            <h3 className="words-list__title" name="translation">Перевод</h3>
            <h3 className="words-list__title" name="tags">Тема</h3>
          </div>
          <div className="words-list__content">
            {stateContext.map((item) => (
              <WordsItem key={item.id} {...item} inputEnglish={inputEnglish} setEnglish={setEnglish} inputTranscription={inputTranscription} setTranscription={setTranscription} inputTranslation={inputTranslation} setTranslation={setTranslation} inputTags={inputTags} setTags={setTags} deleteWord={() => deleteWord(item.id)} updateWord={() => updateWord(item.id)} />
            ))}
          </div>
        </article>
    </>
  );
}