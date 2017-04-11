import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username:string;
    private client_id:string = '8a97b284024044508782';
    private client_secret:string = '03556bada9dee7b6fce8761395775e981dac736f';

    constructor(private _http:Http) {
        console.log('github service ready...');
        this.username = 'erickangweisz';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id='+ this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json())
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id='+ this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json())
    }

    updateUser(username:string) {
        this.username = username;
    }
}