import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Observable<Hero[]>;
  constructor(private router: Router, private heroService: HeroService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.heroes = this.heroService.getHeroList();
  }

  deleteHero(id: number) {
    this.heroService.deleteHero(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  heroDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
}
