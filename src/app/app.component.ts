import { Component, OnInit } from "@angular/core";
import { NoteService } from "./services/note.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [NoteService],
})
export class AppComponent {
  constructor(public readonly noteService: NoteService) {}
}
