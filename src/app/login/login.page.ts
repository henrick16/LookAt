import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute ,NavigationExtras} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserProvider} from "../provider/users-provider"
import { NgForm } from '@angular/forms';
import {User} from '../models/user';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  substitusion:string="henrick";
  loginForm: FormGroup;
  submitted = false;
  passwordType:string = "password";
  email:string;
  password:string;
  constructor(public toastController: ToastController,private userProvider:UserProvider,
    private formBuilder: FormBuilder,private route: ActivatedRoute, private router: Router) {
    
   }

  ngOnInit() {
    this.loginForm= this.formBuilder.group({
      
      email: ['', Validators.required],//permet de rendre mon email obligatoire
      password: ['', Validators.required],
      record:['']
    });


   
  }
 
  get controlForm() { return this.loginForm.controls; }


  // Vérifier si un utilsateur à la même mot de passe  et le meêm  email
  onSubmit() {

  
    let user : User =  this.userProvider.login('email','password' );

    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
    // alert("utilisateur non reconnu")
     return ;
      
    }
    else{
      let user : User =  this.userProvider.login( this.loginForm.controls.email.value, this.loginForm.controls.password.value );

      if(user)
      {
        let navigationExtras: NavigationExtras = {
          state: {
            user:user
            }
        };
        this.router.navigate(['accueil'],navigationExtras);
      }
      else{
        this.presentToast("Utilisateur non reconnu...");
      }
     
    }

  }
  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
    // Change the type of the password
    public showPassword():void {

      if(this.passwordType=="password"){
        this.passwordType= "text";
      }
      else{
       this.passwordType="password";
      }
     }
 
    //console.log(this.loginForm.login('email','password');
    
  
//Si le user exist => afficher la page accueil avec un même de bienvenue (nom+prrénom du user)
//Si non afficher  message  pop up  (ustisateur non reconnu)
  
  public login(){
  
  //  let user : User =  this.userProvider.login( this.email, this.password);
   //lors de la connexion jappel loginForm pour recuperer les differentes infos entrer dans le form
   //console.log(this.loginForm.login();
  }
  
  public onclick(){
    if(this.substitusion=="henrick"){
      this.substitusion="yorick";
    }else{
      this.substitusion="henrick"
    }
  }
  public getColor(){
    if(this.substitusion=="yorick"){
      return 'red'
    }
  }

}











/*const formValue= this.loginForm.value;
    const newLogin= new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['password']
    );
    this.userProvider */