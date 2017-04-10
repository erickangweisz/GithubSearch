import { Component }      from '@angular/core';
import { GithubService }  from './services/github/github.service';
import { HttpModule }     from '@angular/http';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><profile></profile>`,
  providers: [ GithubService, HttpModule ]
})
export class AppComponent  { name = 'Angular'; }
