import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/core/services/heroes.service';
import { Heroe } from 'src/app/interfaces/heroe.interface';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(private heroesService: HeroesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  @Input()
  heroe!: Heroe;
  @Input()
  componenteHijo!: boolean;

  ngOnInit(): void {

    if(!this.heroe) {
      this.activatedRoute.params.subscribe(({id}) => {
        this.heroesService.getHeroesById(id).subscribe({
          next: (response) => {
            this.heroe = response;
          }
        })
      })
    }

  }

  volver() {
    this.router.navigate(['/heroes/listado']);
  }

}
