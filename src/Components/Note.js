import React from "react";
import {DeleteNoteIcon} from '../icons'

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note" id={id}>
      <span>{text}</span>
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

export default Note
