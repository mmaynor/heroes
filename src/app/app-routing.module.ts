import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { UpdateHeroComponent } from './update-hero/update-hero.component';

const routes: Routes = [
  { path: '', redirectTo: 'hero', pathMatch: 'full' },
  { path: 'heroes', component: HeroListComponent },
  { path: 'add', component: CreateHeroComponent },
  { path: 'update/:id', component: UpdateHeroComponent },
  { path: 'details/:id', component: HeroDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
