import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { RouterModule, Routes } from '@angular/router';
import { Ng2Webstorage, WebStorage } from 'ngx-webstorage';
import { ItemService } from './service/item.service';
import { AvailablePipe } from './pipes/available.pipe';

const routes: Routes =[
  {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'item', component: ItemComponent },
  { path: 'item/:id', component: ItemComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemComponent,
    AvailablePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // RouterModule 등록
    FormsModule,
    Ng2Webstorage.forRoot()
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
