import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-oujda',
  templateUrl: './oujda.page.html',
  styleUrls: ['./oujda.page.scss'],
})
export class OujdaPage implements OnInit {
  reservation=[];
  constructor(private router: Router,private dataService: DataService, private alertCtrl:AlertController)
   {
    this.dataService.getServers().subscribe(res=>{
      console.log(res);
      this.reservation=res;
    })
   }

  ngOnInit() {
  }



  async addResv(){
    const alert= await this.alertCtrl.create({
      header:'Make a Reservation',
      inputs:[
        {
          name:'nom',
          placeholder:'Your First Name',
          type:'text',
          
        },
        {
          name:'prenom',
          placeholder:'Your Last Name',
          type:'text'
        },
        {
          name:'email',
          placeholder:'Your E-mail',
          type:'email'
        },
        {
          name:'tel',
          placeholder:'Your Number Phone',
          type:'tel',
          attributes: {
            maxlength: 10
            
          }
        },
        {
          name:'cin',
          placeholder:'Your CIN',
          type:'number',
          min: 3,
          max: 10
        },
        {
          name:'ville',
          placeholder:'Oujda',
          type:'text',
          value:'Oujda',
          disabled:true
        },
        {
          name:'date',
          placeholder:'Your Date',
          type:'date',
          min: '2022-01-13',
          max: '2022-01-30'
        },
      ],
      buttons:[
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Add',
          handler:(res)=>{
            this.dataService.addResv({
              nom: res.nom,
              prenom: res.prenom,
              email:res.email,
              tel:res.tel,
              cin:res.cin,
              ville:res.ville,
              date:res.date

            })
          }
        }
      ]
    });
    await alert.present();
  }











}
