import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moroccan-cities',
  templateUrl: './moroccan-cities.page.html',
  styleUrls: ['./moroccan-cities.page.scss'],
})
export class MoroccanCitiesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  oujda(){
    this.router.navigate(['/oujda']);
  }

  rabat(){
    this.router.navigate(['/rabat']);
  }
  casa(){
    this.router.navigate(['/casa']);
  }
  Fes(){
    this.router.navigate(['/fes']);
  }
  meknes(){
    this.router.navigate(['/meknes']);
  }
  agadir(){
    this.router.navigate(['/agadir']);
  }
  dakhla(){
    this.router.navigate(['/dakhla']);
  }
  tanger(){
    this.router.navigate(['/tanger']);
  }
  merzouga(){
    this.router.navigate(['/merzouga']);
  }

  souira(){
    this.router.navigate(['/souira']);
  }
  marrakech(){
    this.router.navigate(['/marrakech']);
  }
  laayoun(){
    this.router.navigate(['/laayoun']);
  }

















}
