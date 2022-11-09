import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/core/services/heroes.service';
import { Heroe } from 'src/app/interfaces/heroe.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }

  heroes!: Heroe[];

  ngOnInit(): void {

    this.heroesService.getHeroes().subscribe({
      next: (response) => {
        this.heroes = response;
      }
    })

  }

}
