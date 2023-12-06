import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoteCardComponent } from "./note-card/note-card.component";
import { NoteListMenuComponent } from "./note-list-menu/note-list-menu.component";
import { HeaderComponent } from "./header/header.component";
import { NoteFormComponent } from "./note-form/note-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NoteService } from "./services/note.service";
import { APP_BASE_HREF } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    NoteCardComponent,
    NoteListMenuComponent,
    HeaderComponent,
    NoteFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [NoteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
