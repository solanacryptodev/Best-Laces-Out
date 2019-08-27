import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';



@Component({
  selector: 'ns-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css'],
  moduleId: module.id,
})
export class JoinComponent implements OnInit 
{

  constructor( private router: RouterExtensions ) 
  {

  }

  ngOnInit() 
  {

  }

}
