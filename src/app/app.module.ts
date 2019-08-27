import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

//import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";


import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './menu/about/about.component';
import { JoinComponent } from './menu/join/join.component';
import { ShopComponent } from './menu/shop/shop.component';
import { AppRoutingModule } from './app-routing.module';
import { ActionBarComponent } from './shared/ui/action-bar/action-bar.component';
import { BottomTabComponent } from './tabs/bottom-tab/bottom-tab.component';
import { JoinTabComponent } from './menu/join-tab/join-tab.component';
import { ShopTabComponent } from './menu/shop-tab/shop-tab.component';
import { AboutTabComponent } from './menu/about-tab/about-tab.component';
import { AboutDetailsComponent } from './menu/about-details/about-details.component';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,      
    ],
    declarations: [
        AppComponent,
        MenuComponent,
        AboutComponent,
        JoinComponent,
        ShopComponent,
        ActionBarComponent,
        BottomTabComponent,
        JoinTabComponent,
        ShopTabComponent,
        AboutTabComponent,
        AboutDetailsComponent,
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
