import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  page = {
    title: 'Bienvenue sur 02 Celsius',
    subtitle: 'Bienvenue!',
    content: 'Suivez votre température et taux oxygène',
    image: 'assets/logo.jpg',
  };

  constructor() {}

  ngOnInit(): void {}
}
