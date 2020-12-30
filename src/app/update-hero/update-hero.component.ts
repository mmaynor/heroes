import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-update-hero',
  templateUrl: './update-hero.component.html',
  styleUrls: ['./update-hero.component.css']
})
export class UpdateHeroComponent implements OnInit {
  id: number;
  hero: Hero;

  constructor(private route: ActivatedRoute, private router: Router, private heroService: HeroService) { }

  ngOnInit(): void {
    this.hero= new Hero();

    this.id= this.route.snapshot.params['id'];

    this.heroService.getHero(this.id).subscribe(
      data => {
        console.log(data)
        this.hero= data;
      },
      error => console.log(error));
  }

  updateHero() {
    this.heroService.updateHero(this.id, this.hero).subscribe(
      data => {
        console.log(data);
        this.hero= new Hero();
        this.gotoList();
      }, 
      error => console.log(error));
  }

  onSubmit() {
    this.updateHero();
  }

  gotoList() {
    this.router.navigate(['/heroes']);
  }
}
