import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NoteService } from "../services/note.service";
import { Note } from "../types/note.types";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-note-card",
  templateUrl: "./note-card.component.html",
  styleUrls: ["./note-card.component.scss"],
})
export class NoteCardComponent implements OnInit, OnDestroy {
  public noteData: Observable<Note | null>;

  private unsubscriber$ = new Subject();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly noteService: NoteService
  ) {}

  public get noteId(): string | null {
    return this.route.snapshot.params["noteId"];
  }

  public ngOnInit(): void {
    this.noteService.initNote(this.noteId);

    this.route.paramMap.pipe(takeUntil(this.unsubscriber$)).subscribe(() => {
      if (this.noteId) {
        this.noteData = this.noteService.getNoteById(this.noteId);
      }
    });
  }

  public ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
}
