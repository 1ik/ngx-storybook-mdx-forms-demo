import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ButtonComponent } from "./components/button/button.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, ButtonComponent],
  imports: [BrowserModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ButtonComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
