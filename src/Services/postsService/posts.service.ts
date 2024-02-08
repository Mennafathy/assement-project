import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataModel } from 'src/models/dataModel/dataModel';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private _httpClient: HttpClient) { }
  getPosts(): Observable<DataModel[]> {
    return this._httpClient.get<DataModel[]>(this.url);
  }
}
