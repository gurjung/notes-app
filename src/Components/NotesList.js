import React from "react";
import Note from "./Note.js";

const NotesList = ({ notes, handleDeleteNote,updateText }) => {
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
          color={item.color}
          handleDeleteNote={handleDeleteNote}
          updateText={updateText}
        />
      ))}
    </div>
  );
};

export default NotesList;
