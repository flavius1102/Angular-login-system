import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RolamComponent } from './rolam/rolam.component';
import { HirlevelComponent } from './hirlevel/hirlevel.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { BejelentkezesComponent } from './bejelentkezes/bejelentkezes.component';
import {RouterModule} from '@angular/router';
import {RoutingModule} from './routing/routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooldalComponent,
    HeaderComponent,
    FooterComponent,
    RolamComponent,
    HirlevelComponent,
    KapcsolatComponent,
    BejelentkezesComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
