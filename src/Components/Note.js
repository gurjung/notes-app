import React from "react";
import { MdDeleteForever } from "react-icons/md";
export const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note" id={id}>
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};
