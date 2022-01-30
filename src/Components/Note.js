import React from "react";
import { DeleteNoteIcon } from "../icons";

const Note = ({ id, text, date, color, handleDeleteNote, updateText }) => {
  
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
        <DeleteNoteIcon
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
