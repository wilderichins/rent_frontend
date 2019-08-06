import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingsComponent } from './pages/listings/listings.component';

const routes: Routes = [
	{
		path: 'listings', component: ListingsComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
