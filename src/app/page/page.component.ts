import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  page = {
    title : 'Bienvenue sur 02 Celsius',
    subtitle: 'Bienvenue!',
    content: 'Suivez votre température et taux d'O2 quotidien.',
    image: ''
  }  
  constructor() { }

  ngOnInit(): void {
  }

}
