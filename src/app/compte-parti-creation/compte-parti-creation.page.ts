import { Component, OnInit } from '@angular/core';
import {Router ,ActivatedRoute,NavigationExtras} from '@angular/router'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-compte-parti-creation',
  templateUrl: './compte-parti-creation.page.html',
  styleUrls: ['./compte-parti-creation.page.scss'],
})
export class ComptePartiCreationPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        console.log(this.router.getCurrentNavigation().extras.state.data);
      }
    });
   }

  ngOnInit() {
  }

  onSubmitPropertiesForm(form: NgForm){
    console.log(form.value);
  }
}
