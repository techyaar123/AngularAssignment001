import { Component, OnInit } from '@angular/core';
import appointmentdata from "../../assets/appointmentlist.json";
import { PlaceAppointmentComponent }  from '../place-appointment/place-appointment.component';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
// interface appointment{
//   sno:Number;
//     name:String;
//     age:Number;
//     email:String;
//     mobile:Number;
//     address1:String;
//     address2:String;
//     city:String;
//     state:String;
//     country:String;
//     pincode:Number;
//     trainer:String;
//     physio:String;
//     paln:String;
//     weeks:Number;
//     amount:Number;
// }
export class ViewAppointmentComponent  {
name:string='Abhinav';
  data!: PlaceAppointmentComponent;

 appoint:any=[
  {
    sno:1,
    name:"Abhinav",
    age:31,
    email:'abc@gmail.com',
    mobile:3123123123,
    address1:'asdasdasd',
    address2:'asdasda',
    city:'asdkjashd',
    state:'asdjajsd',
    country:'asjdnaksd',
    pincode:3423423,
    trainer:'dfkjsdnf',
    physio:'dsfdsf',
    paln:'adsasd',
    weeks:0,
    amount:213
  },
  
  {
    sno:2,
    name:"Abhinav",
    age:31,
    email:'abc@gmail.com',
    mobile:3123123123,
    address1:'asdasdasd',
    address2:'asdasda',
    city:'asdkjashd',
    state:'asdjajsd',
    country:'asjdnaksd',
    pincode:3423423,
    trainer:'dfkjsdnf',
    physio:'dsfdsf',
    paln:'adsasd',
    weeks:0,
    amount:213
  },
  {
    sno:3,
    name:"Abhinav",
    age:31,
    email:'abc@gmail.com',
    mobile:3123123123,
    address1:'asdasdasd',
    address2:'asdasda',
    city:'asdkjashd',
    state:'asdjajsd',
    country:'asjdnaksd',
    pincode:3423423,
    trainer:'dfkjsdnf',
    physio:'dsfdsf',
    paln:'adsasd',
    weeks:0,
    amount:213
  },
  {
    sno:4,
    name:"Abhinav",
    age:31,
    email:'abc@gmail.com',
    mobile:3123123123,
    address1:'asdasdasd',
    address2:'asdasda',
    city:'asdkjashd',
    state:'asdjajsd',
    country:'asjdnaksd',
    pincode:3423423,
    trainer:'dfkjsdnf',
    physio:'dsfdsf',
    paln:'adsasd',
    weeks:0,
    amount:213
  }
];
getList(){
  return ;
}
}
