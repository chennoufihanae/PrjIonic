import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: any;
  password: any;
  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private alertCtrl: AlertController,
    private toastr : ToastController
  ) { }

  ngOnInit() {
  }

  register() {
    this.fireauth.createUserWithEmailAndPassword(this.email, this.password)
    .then((res) => {
      if (res.user) {
        // Register Success
        this.toast('Registration Success! ', 'success');
        this.router.navigate(['home']);
      }
    }).catch((err) => {
      let msg = 'Please fill the form!';

      this.presentAlert("Warning", msg);
       
    })
       
      
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
