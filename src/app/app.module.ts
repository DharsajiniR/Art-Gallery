import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './shared/top-header/top-header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductService } from './service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    FooterComponent,
    DashboardComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      {path:'dashboard',component:DashboardComponent},
      {path:'contact', component:ContactComponent}
    ])
  ],
  providers: [ProductService
    ],
  bootstrap: [AppComponent],
  exports :[]
})
export class AppModule { }
