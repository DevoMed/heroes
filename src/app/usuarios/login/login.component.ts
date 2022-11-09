import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email='';
  password='';
  loginValid=true;
  loginForm: any;
  constructor(private router:Router, private usuarioService: UsuarioService, authService: AuthService
      ){}


  ngOnInit(): void {
    
  }
  

  
  login(){
    const usuario = {email: this.email, password: this.password};
    this.usuarioService.getUsuarios().subscribe( resp => {
      const usuario = resp.find((a:any)=>{
        return a.email === this.email && a.password === this.password 
      });
      if(usuario){
        alert('Inicio de sesión correcto'); 

      this.router.navigate(["./heroes/listado"])
      }else{
        alert("Este usuario no existe")
        this.email = '';
        this.password= '';
      }
    
    })
  }


  registrate(){
    this.router.navigate(['./usuarios/registro'])
  }
  
}
