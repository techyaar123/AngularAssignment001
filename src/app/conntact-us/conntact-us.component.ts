import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conntact-us',
  templateUrl: './conntact-us.component.html',
  styleUrls: ['./conntact-us.component.css']
})
export class ConntactUsComponent  {

  onClickSubmit(data: any) {
   if(data.contactName==''||data.contactEmail==''||data.contactPhone==''|| data.contactMessage=='')
   {
    alert("Fill the missing details in the form");
   }else{
    alert("Submitted Successfully" );
   }
   }
}
