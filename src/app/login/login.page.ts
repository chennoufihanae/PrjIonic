import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';

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
    private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  login() {
    this.fireauth.signInWithEmailAndPassword(this.email, this.password)
      .then((res) => {
        if (res.user) {
          // Login Success
          this.router.navigate(['home']);
        }
      }).catch((err) => {
        let msg = err.message;

         
      })
  }

  
  register(){
    this.router.navigate(['register']);
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
