import React from "react";
import { MdDeleteForever } from "react-icons/md";
export const Note = ({id,text,date}) => {
  return (
    <div className="note" id={id}>
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever />
      </div>
    </div>
  );
};
