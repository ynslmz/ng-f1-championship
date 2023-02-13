import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CoreModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
