import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

   
  public email:any;
  public password:any;

  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private alertCtrl: AlertController,
    private toastr : ToastController) { }

  ngOnInit() {
  }

  login() {
     if(this.email && this.password){
      this.fireauth.signInWithEmailAndPassword(this.email, this.password);
      this.router.navigate(['home']);
       }else{
        this.toast('Please enter your email & password', 'warning');
       }
     
  }

  
  register(){
    this.router.navigate(['register']);
  }
  async toast(message, status){
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  async presentAlert(header, msg) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }


}
