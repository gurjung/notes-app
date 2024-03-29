import React, { useState } from "react";
import { AddNoteIcon } from "../../icons";
import { COLORS } from "../../constants";
import "./SideBar.css";

interface ISidebarProps {
  IsDarkMode: boolean;
  addNote: (item: string) => void;
}

const SideBar: React.FC<ISidebarProps> = (props) => {
  const { addNote, IsDarkMode } = props;
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const colors = [
    COLORS.DARK_ORANGE,
    COLORS.DARK_YELLOW,
    COLORS.LIGHT_GREEN,
    COLORS.PURPLE,
  ];
  return (
    <div className="sidebar">
      <AddNoteIcon
        size="2.3em"
        color={IsDarkMode ? COLORS.WHITE : COLORS.DARK_GREY}
        className="sidebar-add-icon"
        onClick={() => setIsListOpen(!isListOpen)}
      />
      <ul
        className={`${
          isListOpen ? "sidebar-list-visible" : "sidebar-list-hidden"
        }`}
      >
        {colors.map((item, itemIdx) => (
          <li
            key={itemIdx}
            className="sidebar-list-items"
            style={{ backgroundColor: item }}
            onClick={() => addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
