import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarMenuComponent } from './components/top-bar-menu/top-bar-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
