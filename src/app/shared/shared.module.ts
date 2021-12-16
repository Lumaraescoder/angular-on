import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule } from '@angular/material/toolbar'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule , RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    FontAwesomeModule
  ],
  exports: [ NavbarComponent]

})
export class SharedModule { }
