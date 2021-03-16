import { NgModule } from '@angular/core';
// modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }