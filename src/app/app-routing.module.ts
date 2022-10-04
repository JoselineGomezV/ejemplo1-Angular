import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { TablasMultiComponent } from './formularios/tablas-multi/tablas-multi.component';
import { ProducListComponent } from './product/produc-list/produc-list.component';

const routes: Routes = [
  {path: 'cinepolis', component: CinepolisComponent},
  {path: 'suma', component: OperasBasComponent},
  {path: 'tabla', component: TablasMultiComponent},
  {path: '**', component: ProducListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
