import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent implements OnInit {
  hero: Hero= new Hero();
  submitted= false;

  constructor(private router: Router, private heroService: HeroService) { }

  ngOnInit(): void {
  }

  newHero(): void {
    this.submitted= false;
    this.hero= new Hero();
  }

  save() {
    this.heroService.createHero(this.hero).subscribe(
      data => {
        console.log(data)
        this.hero= new Hero();
        this.gotoList();
      },
      error => 
        console.log(error));
  }

  onSubmit() {
    this.submitted= true
    this.save();
  }

  gotoList() {
    this.router.navigate(['/heroes']);
  }
}
