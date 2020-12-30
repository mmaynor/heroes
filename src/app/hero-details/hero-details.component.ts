import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  id: number;
  hero: Hero;

  constructor(private route: ActivatedRoute, private router: Router, private heroService: HeroService) { }

  ngOnInit() {
    this.hero= new Hero();

    this.id= this.route.snapshot.params['id'];
    
    this.heroService.getHero(this.id).subscribe(
      data => {
        console.log(data)
        this.hero= data;
      }, 
      error => console.log(error));
  }

  list() {
    this.router.navigate(['heroes'])
  }
}
