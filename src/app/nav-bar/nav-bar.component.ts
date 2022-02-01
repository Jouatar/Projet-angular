import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  imagePath = "../assets/logo_pokemon.png";
  user = "";
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.getData().subscribe((data:any) => {
      this.user = data.name;
    });;
  }

}
