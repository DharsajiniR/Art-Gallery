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
import { ShopComponent } from './shop/shop.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    FooterComponent,
    DashboardComponent,
    ContactComponent,
    ShopComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxImageZoomModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      {path:'home',component:DashboardComponent},
      {path:'contact', component:ContactComponent},
      {path:'shop',component:ShopComponent},
      {path:'details/:Id', component:ProductDetailComponent}
    ])
  ],
  providers: [ProductService
    ],
  bootstrap: [AppComponent],
  exports :[]
})
export class AppModule { }
