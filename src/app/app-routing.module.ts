import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NoteCardComponent } from "./note-card/note-card.component";
import { NoteFormComponent } from "./note-form/note-form.component";

const routes: Routes = [
  {
    path: "",
    component: NoteCardComponent,
  },
  {
    path: "note/:noteId",
    component: NoteCardComponent,
  },
  {
    path: "create",
    component: NoteFormComponent,
  },
  {
    path: "**",
    component: NoteCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
