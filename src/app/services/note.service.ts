import { Injectable, NgZone } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { getNotes } from "./note.helper";
import { Note } from "../types/note.types";
import { filter, map } from "rxjs/operators";
import { ActivatedRoute, NavigationEnd, Params, Router } from "@angular/router";

@Injectable()
export class NoteService {
  private readonly noteSubject$ = new BehaviorSubject<Note[] | null>(
    getNotes()
  );

  constructor(
    private readonly ngZone: NgZone,
    private readonly router: Router
  ) {}

  public get notes$(): Observable<Note[] | null> {
    return this.noteSubject$.asObservable();
  }

  public updateNotes(): void {
    const notes = getNotes();
    this.noteSubject$.next(notes);
  }

  public getNoteById(id: string): Observable<Note | null> {
    return this.notes$.pipe(
      map((notes) => {
        const note = notes.find((note) => note.id === id);

        return note;
      })
    );
  }

  public initNote(noteId: string | null): void {
    const notes = getNotes();

    if (!noteId && notes) {
      this.ngZone.run(() => this.router.navigate(["note", notes[0].id]));

      return;
    } else if (!notes) {
      this.ngZone.run(() => this.router.navigate(["create"]));

      return;
    }
  }
}
