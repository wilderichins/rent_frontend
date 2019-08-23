import { Component, OnInit, Input } from '@angular/core';
import { gameListing } from '../../common/interfaces/gameListing';

@Component({
  selector: 'game-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

	@Input()
	listing: gameListing;

	constructor() { }

	ngOnInit() {
	}

}
