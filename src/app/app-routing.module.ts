import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './menu/about/about.component';
import { ShopComponent } from './menu/shop/shop.component';
import { JoinComponent } from './menu/join/join.component';
import { AboutDetailsComponent } from './menu/about-details/about-details.component';
//import { BottomTabComponent } from './tabs/bottom-tab/bottom-tab.component';
//import { JoinPageComponent } from './pages/join-page/join-page.component';


//FIX: You want the path to go from OurHistory(the menu option) to OutHistoryPage. Also figure out how to add the menu to the bottom of the pages. 
//     Maybe create an ns-path for the BottomTabBar that can be placed on HTML pages.

const routes: Routes = 
[
  { path: '', redirectTo: '/home/(HistoryOutlet:OurHistory//MerchOutlet:OurMerch//ClubOutlet:OurClub)', pathMatch: 'full' },
  { path: 'home', component: MenuComponent, children:
  [
    { path: 'OurHistory', component: AboutComponent, outlet: 'HistoryOutlet'},
    { path: 'HistoryDetails', component: AboutDetailsComponent, outlet: 'HistoryOutlet' },
    { path: 'OurMerch', component: ShopComponent, outlet: 'MerchOutlet' },
    { path: 'OurClub', component: JoinComponent, outlet: 'ClubOutlet' },

  ]}, // a root route with an empty path. The route that is loaded when our app starts. SHOULD BE LOGO IMAGE!!
  
]

@NgModule({
  declarations: [],
  imports: 
  [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  exports: 
  [
    NativeScriptRouterModule,
  ]
  //schemas: [NO_ERRORS_SCHEMA]
})
export class AppRoutingModule { }
