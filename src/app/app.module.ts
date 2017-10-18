import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainHeader  } from './shared/control/header.component';
import { KPA } from './shared/kpcontrol/kpanchor.component';
import { KPImg } from './shared/kpcontrol/kpimg.component';

@NgModule({
  declarations: [
    AppComponent, MainHeader,KPA,KPImg
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
