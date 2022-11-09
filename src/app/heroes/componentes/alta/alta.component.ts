import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { HeroesService } from 'src/app/core/services/heroes.service';
import { Heroe, Publisher } from 'src/app/interfaces/heroe.interface';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute,
    private router: Router, private snackBar: MatSnackBar, private dialog: MatDialog) { }

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  publishers = [
    {
      id: Publisher.DCComics
    },
    {
      id: Publisher.MarvelComics
    }
  ]

  ngOnInit(): void {

    if(!this.router.url.includes('editar')) {
      return;
    }

    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroesById(id))
    ).subscribe(response => this.heroe = response);

  }

  guardar() {

    if(this.heroe.superhero.trim().length == 0) {
      return;
    }

    if(this.heroe.id) {
      this.heroesService.editHeroe(this.heroe).subscribe({
        next: (response) => {
          this.mostarSnackBar(`'${this.heroe.superhero}' actualizado correctamente`);
        }
      })
    } else {
      this.heroesService.addHeroe(this.heroe).subscribe({
        next: (response) => {
          this.router.navigate(['/heroes/editar', response.id]);
          this.mostarSnackBar(`'${this.heroe.superhero}' añadido correctamente`);
        }
      })
    }

  }

  eliminar() {

    const dialog = this.dialog.open(
      ModalComponent,
      {
        data: this.heroe
      }
    )

    dialog.afterClosed().subscribe(
      (result) => {
        if(result) {
          this.heroesService.deleteHeroe(this.heroe.id!).subscribe({
            next: (response) => {
              this.router.navigate(['/heroes']);
            }
          })
        }
      }
    )

  }

  mostarSnackBar(msg: string) {
    this.snackBar.open(
      msg,
      'Aceptar',
      {
        duration: 3000
      }
    )
  }

}
