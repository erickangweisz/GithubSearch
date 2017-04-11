import { Component }      from '@angular/core';
import { GithubService }  from '../../services/github/github.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  providers: [ GithubService ]
})
export class ProfileComponent  {
  user:any = [];
  repos:any = [];
  username:string;

  constructor(private _githubService:GithubService) {
    this.user = false;
  }

  searchUser() {
    this._githubService.updateUser(this.username);

    this._githubService.getUser().subscribe(user => {
      this.user = user;
    })

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    })
  }

}
