import { Component, OnInit } from '@angular/core';
import { gameListing } from '../../common/interfaces/gameListing';
import { Observable, of, pipe, Subject } from 'rxjs';
import { filter, combineLatest, switchMap, withLatestFrom } from 'rxjs/operators';

@Component({
	selector: 'listing-page',
	templateUrl: './listing-page.component.html',
	styleUrls: ['./listing-page.component.scss']
})
export class ListingPageComponent implements OnInit {

	testListings: gameListing[] = [
		{
			name: "Alpha Game",
			cost: 5
		},
		{
			name: "Alpha Centauri Game",
			cost: 5,
			details: "Some details here"
		},
		{
			name: "Game 3",
			cost:3,
			details: "Some details here"
		},
		{
			name: "Photosynthesis",
			cost: 2,
			details: "Some details here"
		},
		{
			name: "Scythe",
			cost: 1,
			details: "Some details here"
		}
	];

	private searchSubject: Subject<any> = new Subject();
	searchFilter$: Observable<any> = this.searchSubject.asObservable();
	searchFilter: string = "";
	
	listings$: Observable<any> = of(this.testListings);

	timeoutID: any;

	constructor() {
		this.searchFilter$ = of(this.searchFilter);
	}

	ngOnInit() {
		this.searchFilter$.subscribe((search:string)=>{
			// TODO: this filter isn't working
			this.listings$.pipe(
				filter((listing:gameListing)=>{
					return search.toLowerCase() === "";
				})
			);
		});
	}

	filterChanged(filterInput){
	    if (this.timeoutID) window.clearTimeout(this.timeoutID);
	    this.timeoutID = window.setTimeout(() => {
	        this.searchSubject.next(filterInput.value);
	    }, 250)
	  }

}
