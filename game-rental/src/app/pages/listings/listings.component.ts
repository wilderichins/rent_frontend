import { Component, OnInit } from '@angular/core';
import { gameListing } from '../../common/interfaces/gameListing';

@Component({
	selector: 'app-listings',
	templateUrl: './listings.component.html',
	styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

	testListings: gameListing[] = [
		{
			name: "Game 1",
			cost: 5
		},
		{
			name: "Game 2",
			cost: 5,
			details: "Some details here"
		},
		{
			name: "Game 3",
			cost:3,
			details: "Some details here"
		},
		{
			name: "Game 4",
			cost: 2,
			details: "Some details here"
		},
		{
			name: "Game 5",
			cost: 1,
			details: "Some details here"
		}
	];

	constructor() { }

	ngOnInit() {
	}

}
