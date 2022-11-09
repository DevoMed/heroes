import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { Usuario } from 'src/app/interfaces/usuarios.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

    usuario: Usuario = {
      usuario: '',
      email: '',
      password: '',
      token:'',
    }

  ngOnInit(): void {
  }

  agregar(){
    this.usuarioService.addUsuario(this.usuario).subscribe({
      next: (resp) => {
        alert("El usuario se ha registrado correctamente");
        this.router.navigate(['./usuarios/login']);
      }
    })
  }

}
