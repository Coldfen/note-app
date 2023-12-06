import { Note } from "../types/note.types";

export const getNotes = (): Note[] | null => {
  const notes = localStorage.getItem("notes");
  return JSON.parse(notes);
};
