import React from "react";
import { DeleteNoteIcon } from "../../icons";
import "./Note.css";

const Note = ({ id, text, date, time, color, deleteNote, updateText }) => {
  return (
    <div className="note" style={{ backgroundColor: color }}>
      <textarea
        rows="8"
        cols="10"
        defaultValue={text}
        placeholder="Add new note"
        onChange={(e) => updateText(e.target.value, id)}
      ></textarea>
      <div className="note-footer">
        <small>{date}</small>
        <small>{time}</small>
        <DeleteNoteIcon
          onClick={() => deleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
