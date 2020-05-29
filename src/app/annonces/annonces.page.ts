import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,NavigationExtras} from '@angular/router'
import {User} from '../models/user';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.page.html',
  styleUrls: ['./annonces.page.scss'],
})
export class AnnoncesPage{

 
  user:User;
  constructor(private route: ActivatedRoute,private router:Router) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        console.log(this.router.getCurrentNavigation().extras.state.user);
        this.user = this.router.getCurrentNavigation().extras.state.user;
      }
    });
   }
   
  public showValue(){

 
  }

}
