import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProducListComponent } from './product/produc-list/produc-list.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { TablasMultiComponent } from './formularios/tablas-multi/tablas-multi.component';
import { MenuComponent } from './menu/menu.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CinepolisComponent } from './cinepolis/cinepolis.component'

@NgModule({
  declarations: [
    AppComponent,
    ProducListComponent,
    ProductFilterPipe,
    OperasBasComponent,
    TablasMultiComponent,
    MenuComponent,
    CinepolisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
