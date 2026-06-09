import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdCardsComponent } from './shared/components/prod-cards/prod-cards.component';
import { ProdDashboardComponent } from './shared/components/prod-dashboard/prod-dashboard.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './shared/materials/module.materials';

@NgModule({
  declarations: [
    AppComponent,
    ProdCardsComponent,
    ProdDashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
