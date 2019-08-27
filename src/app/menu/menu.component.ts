import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  moduleId: module.id,
})
export class MenuComponent implements OnInit 
{

  constructor( private router: RouterExtensions  ) 
  { 

  }

  ngOnInit() 
  {

  }

  onHistoryTap()
  { 
    this.router.navigate([ '/home', { outlets: { HistoryOutlet:[ 'OurHistory' ]}}]);
    
  }
  onMerchTap()
  {
    this.router.navigate([ '/home', { outlets: { MerchOutlet:[ 'OurMerch' ]}}]);

  }

  onJoinTap()
  {
    this.router.navigate([ '/home', { outlets: { ClubOutlet:[ 'OurClub' ]}}]);

  }
  
}
