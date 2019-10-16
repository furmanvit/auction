import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { TopBarMenuComponent } from './components/top-bar-menu/top-bar-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarMenuComponent
  ],
  imports: [
    BrowserModule, TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
