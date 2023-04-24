import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  public image?:string;
  public Titulo:string = "ABQ";
  @Input() dataEntrante:any;
  constructor(){ }
  ngOnInit():void{
    this.image = "https://uisek.edu.ec/wp-content/uploads/2021/01/carcelen-3.jpg";
  }
}
