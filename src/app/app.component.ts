import { compileDeferResolverFunction } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curriculum';
  nombre = 'Miguel Trujillo Rojas'
  puesto = 'Desarrollador de Aplicaciones Multiplataforma'
  ciudad = 'Málaga'
  telefono = '646018495'
  'correo electronico' = 'migueltr.2019@outlook.com'
  github = 'https://github.com/Poio-o'
  idiomas = ['Español', 'Inglés', 'Japonés']
}
