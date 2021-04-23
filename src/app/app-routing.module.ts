import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from "./lista/lista.component";
import {DetaleComponent} from "./detale/detale.component";
import {BladComponent} from "./blad/blad.component";
import {AddformComponent} from "./addform/addform.component";
import {UpdateformComponent} from "./updateform/updateform.component";
import {FullListComponent} from "./full-list/full-list.component";

const routes: Routes = [
  { path: 'list', component: ListaComponent, children: [
      { path: 'addform', component: AddformComponent},
      { path: 'updateform/:id', component: UpdateformComponent},
      { path: 'fulllist', component: FullListComponent},
      { path: 'delete/:id', component: FullListComponent},
    ]
  },
  { path: 'detale/:id', component: DetaleComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full'},
  { path: '**', component: BladComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
