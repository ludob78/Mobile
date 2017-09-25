import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Contacts} from "@ionic-native/contacts";

/*
  Generated class for the ContactManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactManagerProvider {
  contactDto={
    id:0,
    display:"",
    firstname:"",
    lastname:"",
    email:"",
    phone:""

  };
  CurrentContactDetails:any={name:{},emails:[{}],phoneNumbers:[{}]};
  constructor(private contacts:Contacts) {
    console.log('Hello ContactManagerProvider Provider');
  }
  getContactList(){

    return this.contacts.find(['*'])

  }
  addContact(){
    this.contacts.create()
  }
  updateContact(){

  }
  deleteContact(){
    console.log("this.contactDto.id in deleteContact",this.contactDto.id)
    this.contacts.find(["id"],{
      filter:this.contactDto.id.toString(),
      multiple:false,
      desiredFields:['id']
    }).then(data=>{
      console.log(data);
      data[0].remove();
/*      if (callback){
        callback(data[0])
      }*/
    })
  }
  transToDto(contact){
    this.contactDto.id=contact.id;
    this.contactDto.display=contact.name.formatted;
    this.contactDto.firstname=contact.name.familyName;
    this.contactDto.lastname=contact.name.givenName;
    this.contactDto.email=!contact.emails[0]?"pas d'emails":contact.emails[0].value;
    this.contactDto.phone=!contact.phoneNumbers[0]?"pas de numéro":contact.phoneNumbers[0].value;
  }
}
