  import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductComponent } from './product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { SubServicesComponent } from './sub-services/sub-services.component';
import { Lecature2Component } from './lecature2/lecature2.component';
import { FormsModule, NgForm } from '@angular/forms';
import { SubscriptionComponent } from './subscription/subscription.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ServicesComponent,
    SubServicesComponent,
    Lecature2Component,
    SubscriptionComponent,
    DetailsComponent
  ],
  imports: [ FormsModule,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" }, // full just for default
      { path: "Category", component: CategoryComponent },
      { path: "Product", component: ProductComponent },
      { path: "Aboutus", component: AboutUsComponent },
      { path: "Contactus", component: ContactUsComponent },
      { path: "lecature2", component: Lecature2Component },
      { path: "subscription", component: SubscriptionComponent },
      { path: "Services", component: ServicesComponent },
      { path: "Details/:id", component: DetailsComponent },
      { path: "SubServices/:id", component: SubServicesComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
