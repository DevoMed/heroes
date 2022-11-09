import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email='';
  password='';
  

  private isloggedIn: boolean;
 

  constructor( private usuarioService: UsuarioService,private router:Router ) {
      this.isloggedIn=false;
  }
 
  login(){
    const usuario = {email: this.email, password: this.password};
    this.usuarioService.getUsuarios().subscribe( resp => {
      const usuario = resp.find((a:any)=>{
        return a.email === this.email && a.password === this.password 
      });
      if(usuario){        
        this.isloggedIn=true;      
      }    
    })
  }

      

  isUserLoggedIn(): boolean {
      return this.isloggedIn;
  }
  
}

