import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HoverBackgroundDirective } from 'src/Directives/hover-background.directive';



@NgModule({
  declarations: [HomeComponent,HoverBackgroundDirective],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
