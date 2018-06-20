import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import{RouterModule} from '@angular/router';
import { ProductFilterPipe } from './productlist/product-filter.pipe';
import { StarComponent } from './shared/star/star.component';
import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductFilterPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path:'products', component: ProductlistComponent},
      {path: 'product/id', component:ProductDetailComponent},
      {path:'welcome', component:WelcomeComponent },
      {path: '', redirectTo:'welcome', pathMatch:'full'},
      {path: '**', redirectTo:'welcome',pathMatch:'full'}


    ]),
    FormsModule,
    BrowserModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
