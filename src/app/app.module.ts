import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { AppComponent }     from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent }  from './components/navbar/navbar.component';

import { HttpModule }       from '@angular/http';

@NgModule({
  imports:      [ 
    BrowserModule, 
    HttpModule 
  ],
  declarations: [ 
    AppComponent, 
    ProfileComponent,
    NavbarComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
