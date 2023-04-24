import { Component, OnInit, Input } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  image:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ABQ';
  public ArregloTarjeta: Tarjeta[]=[]
  ngOnInit(): void{
    this.ArregloTarjeta =[
      {titulo:"Imagen 1", subtitulo:"Sub Imagen 1", image:"https://uisek.edu.ec/wp-content/uploads/2021/01/carcelen-2.jpg"},
      {titulo:"Imagen 2", subtitulo:"Sub Imagen 2", image:"https://uisek.edu.ec/wp-content/uploads/2021/01/carcelen-1.jpg"},
      {titulo:"Imagen 3", subtitulo:"Sub Imagen 3", image:"https://uisek.edu.ec/wp-content/uploads/2021/01/felipe-segovia3-1024x768.jpg"},
    ]
  }
}
