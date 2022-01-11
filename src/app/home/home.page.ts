import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public email:any;
  public password:any;

  constructor( 
     private fireauth: AngularFireAuth,
    private router: Router,
    private alertCtrl: AlertController) {}


  visitMrorroc(){
    this.router.navigate(['/moroccan-cities']);
  }
 
  logout(){
    this.fireauth.signOut()
    .then(()=> { this.router.navigate(['login']);})
    .catch((err)=>{
      let msg = err.message;
      this.presentAlert("failed",msg);
    })
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
