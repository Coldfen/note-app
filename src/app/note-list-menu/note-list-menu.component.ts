import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from "@angular/core";
import { Note } from "../types/note.types";

@Component({
  selector: "app-note-list-menu",
  templateUrl: "./note-list-menu.component.html",
  styleUrls: ["./note-list-menu.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteListMenuComponent {
  @Input() public notes: Note[] | null = null;
}
