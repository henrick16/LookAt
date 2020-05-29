import { Component, OnInit} from '@angular/core';
import {Router ,NavigationExtras} from '@angular/router'


enum Type{
 personnal = 1,
 professional = 2
}

@Component({
  selector: 'app-compte-creation',
  templateUrl: './compte-creation.page.html',
  styleUrls: ['./compte-creation.page.scss'],
})
export class CompteCreationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public createAccount(type:number){
    let navigationExtras: NavigationExtras = {
      state: {
      data: "des données persos"
      }
      ,
      queryParams: {
         listUserName:['Yorick','Henrick']
        }
    };
    if(type == Type.personnal.valueOf()){
      this.router.navigate(['compte-parti-creation'],navigationExtras);
    }
   
  }

}
