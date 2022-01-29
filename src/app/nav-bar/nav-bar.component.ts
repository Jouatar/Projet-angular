import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  imagePath = "../assets/logo_pokemon.png";
  constructor() { }

  ngOnInit(): void {
  }

}
