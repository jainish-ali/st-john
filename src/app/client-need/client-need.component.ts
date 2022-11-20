import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-need',
  templateUrl: './client-need.component.html',
  styleUrls: ['./client-need.component.scss']
})
export class ClientNeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageObject = [{
  
    thumbImage: '../../assets/1.png',
   
}, {
    
  thumbImage: '../../assets/2.png',
}, {
   
  thumbImage: '../../assets/3.png',
  
},{
    
  thumbImage: '../../assets/4.png',
   
}, {
    
  thumbImage: '../../assets/5.png',
}];
ReadMore:boolean = true

//hiding info box
visible:boolean = false


//onclick toggling both
onclick()
{
  this.ReadMore = !this.ReadMore; //not equal to condition
  this.visible = !this.visible
}

}
