import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/interfaces/usuarios.interface';
import { environment } from 'src/environments/environment';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private cookies:CookieService) { }

  private baseUrl: string = environment.baseUrl;

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}usuarios`);
  }
  
  setToken(token: any) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }

  getUsuariosById(id: string | null): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}usuarios/${id}`)
  }

  getUsuariosByQuery(query: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}usuarios?q=${query}`)
  }

  addUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}usuarios`, usuario);
  }

  editUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.baseUrl}heroes/${usuario.id}`, usuario);
  }

  deleteUsuario(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}usuarios/${id}`);
  }
}
