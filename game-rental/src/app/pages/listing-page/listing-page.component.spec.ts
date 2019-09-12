import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingPageComponent } from './listing-page.component';

describe('ListingPageComponent', () => {
    let component: ListingsComponent;
    let fixture: ComponentFixture<ListingsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ ListingsComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
