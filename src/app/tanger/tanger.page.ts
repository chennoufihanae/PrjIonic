import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tanger',
  templateUrl: './tanger.page.html',
  styleUrls: ['./tanger.page.scss'],
})
export class TangerPage implements OnInit {

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


  someOtherMethod(res){
    const data=res;
    console.log(res);
  }


  async addResv(){
    let choice;
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
          type:'tel',
          attributes: {
            maxlength: 7
            
          }
        },
        {
          name:'ville',
          placeholder:'tanger',
          type:'text',
          value:'Tanger',
          disabled:true
        },
        {
          name:'date',
          placeholder:'Your Date',
          type:'date',
          min: '2022-01-13',
          max: '2022-01-30'
        },
        {
          name:'nbr',
          placeholder:'Partner number',
          type:'number'
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
            alert.dismiss(true);
            
            //this.someOtherMethod(res);
          }
        }
      ]
    });
    await alert.present();
    await alert.onDidDismiss().then((data) => {
      choice=data;
      let b=[];
      console.log(choice.data.values.nom);
      this.alertCtrl.create({ 
         
        header: 'Your Reservation', 
        subHeader: 'Verify your information !', 
        message: "<b>Frist name :</b> "+choice.data.values.nom+"<br>"+
                 "<b>Last name :</b> "+choice.data.values.prenom+"<br>"+
                 "<b>Email:</b> "+choice.data.values.email+"<br>"+
                 "<b>Phone :</b> "+choice.data.values.tel+"<br>"+
                 "<b>CIN :</b> "+choice.data.values.cin+"<br>"+
                 "<b>City :</b> "+choice.data.values.ville+"<br>"+
                 "<b>Date :</b> "+choice.data.values.date+"<br>"+
                 "<b>nbr :</b> "+choice.data.values.nbr+"<br>", 
        buttons: [
          {
            text:'add',
            handler:(res)=>{
              this.dataService.addResv({
                nom:choice.data.values.nom ,
                prenom: choice.data.values.prenom,
                email:choice.data.values.email,
                tel:choice.data.values.tel,
                cin:choice.data.values.cin,
                ville:choice.data.values.ville,
                date:choice.data.values.date, 
                nbr:choice.data.values.nbr
  
              })
               
            }
          },{
            text:'Cancel',
          role:'cancel'
          }
        ] 
          }).then(res => {
           res.present(); 
            
          
          
          });

  });
  }





}
