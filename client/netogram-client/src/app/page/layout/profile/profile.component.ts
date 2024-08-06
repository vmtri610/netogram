import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  constructor(private  activeRoute: ActivatedRoute) {
    this.activeRoute = activeRoute;
  }

  ngOnInit(): void {
        const {uid} = this.activeRoute.snapshot.params;
        console.log(uid);
    }

}
