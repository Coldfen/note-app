import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CreateNoteService } from "../services/create-note.service";

@Component({
  selector: "app-note-form",
  templateUrl: "./note-form.component.html",
  styleUrls: ["./note-form.component.scss"],
  providers: [CreateNoteService],
})
export class NoteFormComponent {
  public noteForm = new FormGroup({
    title: new FormControl(null, Validators.required),
    descriptions: new FormControl(null, Validators.required),
  });

  constructor(private readonly noteService: CreateNoteService) {}

  public submit(): void {
    this.noteService.createNote(this.noteForm.value);
    this.noteForm.reset();
  }
}
