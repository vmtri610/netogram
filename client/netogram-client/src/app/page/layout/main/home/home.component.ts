import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {
  MatAnchor,
  MatButton,
  MatFabAnchor,
  MatFabButton,
  MatIconButton,
  MatMiniFabButton
} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIcon,
    MatFabAnchor,
    RouterLink,
    MatFabButton,
    MatMiniFabButton,
    MatDivider,
    MatIconButton,
    MatButton,
    MatAnchor
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
