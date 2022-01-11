import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-merzouga',
  templateUrl: './merzouga.page.html',
  styleUrls: ['./merzouga.page.scss'],
})
export class MerzougaPage implements OnInit {

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
      header:'Ajouter une reservation',
      inputs:[
        {
          name:'nom',
          placeholder:'tapez votre nom',
          type:'text',
          
        },
        {
          name:'prenom',
          placeholder:'tapez votre prenom',
          type:'text'
        },
        {
          name:'email',
          placeholder:'tapez votre email',
          type:'email'
        },
        {
          name:'tel',
          placeholder:'tapez votre telephone',
          type:'number'
        },
        {
          name:'cin',
          placeholder:'tapez votre cin',
          type:'number'
        },
        {
          name:'ville',
          placeholder:'merzouga',
          type:'text',
          value:'Merzouga',
          disabled:true
        },
        {
          name:'date',
          placeholder:'tapez votre date',
          type:'date'
        },
      ],
      buttons:[
        {
          text:'Annuler',
          role:'cancel'
        },
        {
          text:'Ajouter',
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
