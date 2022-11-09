import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { HeroesService } from 'src/app/core/services/heroes.service';
import { Heroe } from 'src/app/interfaces/heroe.interface';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(private heroeService: HeroesService) { }

  txt: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado!: Heroe;
  componenteHijo: boolean = true;

  ngOnInit(): void {
  }

  buscar() {
    this.heroeService.getHeroesByQuery(this.txt.trim()).subscribe({
      next: (response) => {
        this.heroes = response;
      }
    })
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {

    if(!event.option.value) {
      this.txt = '';
      return;
    }

    this.heroeSeleccionado = event.option.value;
    this.txt = this.heroeSeleccionado.superhero;

  }

}
