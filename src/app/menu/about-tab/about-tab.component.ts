import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
//import { Router } from '@angular/router';

@Component({
  selector: 'ns-about-tab',
  templateUrl: './about-tab.component.html',
  styleUrls: ['./about-tab.component.css'],
  moduleId: module.id,
})
export class AboutTabComponent implements OnInit {

  constructor( private router: RouterExtensions ) 
  {

  }

  ngOnInit() 
  {

  }

  onhistoryTaps()
  {
    this.router.navigate([ '/home', { outlets: { HistoryOutlet:[ 'HistoryDetails' ]}}]);
  }

}
