export interface INote {
  id: number;
  text: string;
  date: string;
  time: string;
  color: undefined | string;
  deleteNote: (id: number) => void;
  updateText: (e: string, id: number) => void;
}
