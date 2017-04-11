import { Component }       from '@angular/core';
import { GithubService }   from './services/github/github.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpModule }      from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [ GithubService, HttpModule, NavbarComponent ]
})
export class AppComponent  {}
