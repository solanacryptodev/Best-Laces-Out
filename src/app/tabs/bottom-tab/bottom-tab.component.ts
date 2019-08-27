import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ns-bottom-tab',
  templateUrl: './bottom-tab.component.html',
  styleUrls: ['./bottom-tab.component.css'],
  moduleId: module.id,
})
export class BottomTabComponent implements OnInit {

  constructor( private router: RouterExtensions, private active: ActivatedRoute ) 
  {

  }

  ngOnInit() 
  {
    this.router.navigate( [{ outlets: {OurHistory:['BottomTabBar'], OurMerch:['BottomTabBar'], OurClub:['BottomTabBar']}} ], 
    {
      relativeTo: this.active
    });
  }

}
