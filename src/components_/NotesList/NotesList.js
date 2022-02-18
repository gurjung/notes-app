import React from "react";
import Note from "../Note/Note.js";
import "./NotesList.css";

const NotesList = ({ notes, deleteNote, updateText }) => {
  const reverseArray = (arr) => {
    const array = [];

    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }

    return array;
  };

  const revNotes = reverseArray(notes);

  return (
    <div className="notes-list">
      {revNotes.map((item) => (
        <Note
          key={item.id}
          id={item.id}
          text={item.text}
          date={item.date}
          time={item.time}
          color={item.color}
          deleteNote={deleteNote}
          updateText={updateText}
        />
      ))}
    </div>
  );
};

export default NotesList;
