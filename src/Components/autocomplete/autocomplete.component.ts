import { Component, OnInit } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, map, of, switchMap } from 'rxjs';
import { PostsService } from 'src/Services/postsService/posts.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.sass']
})
export class AutocompleteComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  autocompleteResults$!: Observable<string[]>;

  constructor(private _postsService: PostsService) { }
  ngOnInit(): void {
    this.autocompleteResults$ = this.searchTerm$.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((term: string) => this.search(term))
    );
  }

  search(term: string): Observable<string[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this._postsService.getPosts().pipe(
      map(posts => {        
        return posts
          .map(post => post.title)
          .filter(title => title.toLowerCase().includes(term.toLowerCase()));
      })
    );
  }

  onSearchTermChange(event: Event) {
    const term = (event.target as HTMLInputElement)?.value;    
    this.searchTerm$.next(term);
  }

}
