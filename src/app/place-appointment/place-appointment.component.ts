import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { ViewAppointmentComponent } from '../view-appointment/view-appointment.component';
@Component({
  selector: 'app-place-appointment',
  templateUrl: './place-appointment.component.html',
  styleUrls: ['./place-appointment.component.css']
})
export class PlaceAppointmentComponent  {

textBoxDisabled=false;
amount:number=0;
weeks:number=1;
pack1:boolean=false;
pack2:boolean=false;
pack3:boolean=false;
  logger: ViewAppointmentComponent = new ViewAppointmentComponent;
  
toggle(){
  this.textBoxDisabled=false;
  this.amount=400;
  this.pack1=false;
  this.pack3=false;
  this.pack2=true;
}
toggle2(){
  this.textBoxDisabled=true;
  this.amount=500;
  this.pack2=false;
  this.pack3=false;
  this.pack1=true;
}
toggle3(){
  this.textBoxDisabled=false;
  this.amount=300;
  this.pack1=false;
  this.pack2=false;
  this.pack3=true;
}
onKey(event:any)
{
  if(event.target.value=="")
  {
    if(this.pack2==true)
    {
      this.amount=400;
    }else if(this.pack3==true)
    {
      this.amount=300;
    }
    
  }else{
    this.amount=Number(event.target.value) * this.amount;
  }
  
}
getLogger(data:any)
{
  return data;
}
onClickSubmit(data: any) {
 if(data.name==''||data.age==''||data.email==''||data.mobile==''||data.address1==''||data.address2==''||data.city==''||data.state==''||data.country==''||data.pincode==''||data.trainer==''||data.physio==''||data.plan==''||this.amount.toString()=='')
 {
alert("Missing value from the form . Please fill it properly");
 }else{
  // this.logger.getList().push({
  //   sno:5,
  //   name:data.name,
  //   age:data.age,
  //   email:data.email,
  //   mobile:data.mobile,
  //   address1:data.address1,
  //   address2:data.address2,
  //   city:data.city,
  //   state:data.state,
  //   country:data.country,
  //   pincode:data.pincode,
  //   trainer:data.trainer,
  //   physio:data.physio,
  //   paln:data.plan,
  //   weeks:data.plan,
  //   amount:this.amount

  // });
  alert(this.logger.getList());
  this.getLogger(this.logger.getList());
  alert("successfully submitted");

 }

//  alert(this.logger?.getList()[0].name);
 
}
}
