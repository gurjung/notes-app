import React from "react";
import Note from "../Note/Note.tsx";
import "./NotesList.css";

const NotesList = (props) => {
  const { notes, deleteNote, updateText } = props;
  const revNotes = [...notes].reverse();
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
