import { Injectable, NgZone } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { getNotes } from "./note.helper";
import { Note } from "../types/note.types";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

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

  public initNote(): void {
    const notes = getNotes();

    if (notes) {
      this.ngZone.run(() => this.router.navigate(["note", notes[0].id]));

      return;
    }

    this.ngZone.run(() => this.router.navigate(["create"]));
  }
}
