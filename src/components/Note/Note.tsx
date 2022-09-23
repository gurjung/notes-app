import React from "react";
import { DeleteNoteIcon } from "../../icons";
import { TNote } from "../../types/interfaces";
import "./Note.css";

export interface INoteProps extends TNote {
  deleteNote: (id: string) => void;
  updateText: (e: string, id: string) => void;
}

const Note: React.FC<INoteProps> = (props) => {
  const { id, text, date, time, color, deleteNote, updateText } = props;
  return (
    <div className="note" style={{ backgroundColor: color }}>
      <textarea
        rows={8}
        cols={10}
        defaultValue={text}
        placeholder="Add new note"
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          updateText(e.target.value, id!)
        }
      ></textarea>
      <div className="note-footer">
        <small>{date}</small>
        <small>{time}</small>
        <DeleteNoteIcon
          onClick={() => deleteNote(id!)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
