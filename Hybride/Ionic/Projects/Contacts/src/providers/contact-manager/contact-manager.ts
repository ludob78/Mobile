import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {ContactField, ContactName, Contacts} from "@ionic-native/contacts";

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
  addContact(newContact){
    let telContact=this.contacts.create()
    telContact.name=new ContactName(null,newContact.firstname,newContact.lastname);
    telContact.emails=[new ContactField("email",newContact.email)]
    telContact.phoneNumbers=[new ContactField("phone",newContact.phone)]
    return telContact.save();
  }
  updateContact(newContact){
    console.log("event: in updateContact",event);
    this.CurrentContactDetails.name.display=newContact.firstname;
    // this.manageContact.CurrentContactDetails.name.display=new ContactName(null,this.newContact.firstname);
    this.CurrentContactDetails.name.emails=newContact.firstname;
    // this.manageContact.CurrentContactDetails.name.emails=[new ContactField("email",this.newContact.firstname)];
    this.CurrentContactDetails.name.phoneNumbers=newContact.phone;
    // this.manageContact.CurrentContactDetails.name.phoneNumbers=[new ContactField("phone",this.newContact.phone)];
    this.CurrentContactDetails.save().then((saved)=>{
      console.log(saved);
    })
  }
  deleteContact(){
    console.log("this.contactDto.id in deleteContact",this.contactDto.id,this.contactDto.display)
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
