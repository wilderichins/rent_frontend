import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingPageComponent } from './pages/listing-page/listing-page.component';

const routes: Routes = [
	{
		path: 'listings', component: ListingPageComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
