import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

import { FormBuilder , Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
   
   get email(){
     return this.registrationForm.get('email');
   }

   get password(){
    return this.registrationForm.get('password');
  }
  public errorMessages = {
    email: [
      {type:'required', message:'email is required'},
      {type:'pattern' , message:'enter a valid email'}
    ],
    password: [
      {type:'required', message:'password is required'},
      {type:'pattern' , message:'enter a valid password'}
    ]
  };

registrationForm=this.formBuilder.group({
  email: ['',
  [
    Validators.required,
    Validators.pattern("^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,4}$")
  ]
  ],
    password: ['',
    Validators.required,
    Validators.pattern("^[a-zA-Z]{2,4}$")
  ]
});

  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private alertCtrl: AlertController,
    private toastr : ToastController,
    private formBuilder:FormBuilder) { }

     

  ngOnInit() {
  }

  submit() {
    this.fireauth.createUserWithEmailAndPassword(this.email.value,this.password.value)
    .then((res) => {
      if (res.user) {
        // Register Success
        this.toast('Registration Success! ', 'success');
        this.router.navigate(['login']);
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
      duration: 1000
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
