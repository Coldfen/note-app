import { Injectable } from "@angular/core";
import { NewNoteModel, Note } from "../types/note.types";
import { getNotes } from "./note.helper";
import { NoteService } from "./note.service";

@Injectable()
export class CreateNoteService {
  constructor(private readonly noteService: NoteService) {}

  public createNote(newNote: NewNoteModel): void {
    this.saveNote(newNote);
  }

  private saveNote(newNote: NewNoteModel): void {
    const notes = getNotes();

    if (notes) {
      this.updateNotes(notes, newNote);

      return;
    }

    this.saveNoteToLocalStorage([this.preparetNode(newNote)]);
  }

  private updateNotes(notes: Note[], newNote: NewNoteModel): void {
    const preparatedNote = this.preparetNode(newNote);
    notes.push(preparatedNote);

    this.saveNoteToLocalStorage(notes);
  }

  private getUid(): string {
    const uid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );

    return uid;
  }

  private saveNoteToLocalStorage(notes: Note[]): void {
    localStorage.setItem("notes", JSON.stringify(notes));
    this.noteService.updateNotes();
  }

  private preparetNode(note: NewNoteModel): Note {
    const preparatedNote = {
      ...note,
      id: this.getUid(),
    };

    return preparatedNote;
  }
}
