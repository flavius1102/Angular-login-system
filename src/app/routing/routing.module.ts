import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {FooldalComponent} from '../fooldal/fooldal.component';
import {BejelentkezesComponent} from '../bejelentkezes/bejelentkezes.component';
import {RolamComponent} from '../rolam/rolam.component';
import {KapcsolatComponent} from '../kapcsolat/kapcsolat.component';
import {HirlevelComponent} from '../hirlevel/hirlevel.component';

const routes: Routes = [
  {path: '', component: FooldalComponent},
  {path: 'bejelentkezes', component: BejelentkezesComponent},
  {path: 'rolam', component: RolamComponent},
  {path: 'kapcsolat', component: KapcsolatComponent},
  {path: 'hirlevel', component: HirlevelComponent},
  {path: '**', component: FooldalComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
