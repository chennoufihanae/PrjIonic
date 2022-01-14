import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';


export interface Res{
  id? : string;
  nom: string;
  prenom:string;
  email:string;
  tel:number;
  cin:number;
  ville:string;
  date:Date;
  nbr:Number;
  
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getServers(){
    const rev=collection(this.firestore,'reservation');
    return collectionData(rev);
  }
  addResv(res: Res) {
    const revs=collection(this.firestore,'reservation');
    return addDoc(revs,res);
  }




}
