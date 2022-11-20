import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WrapperComponent } from './wrapper/wrapper.component';

import { ClientNeedComponent } from './client-need/client-need.component';
import { DescriptionComponent } from './description/description.component';

import { FooterComponent } from './footer/footer.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-accordion';

import { ArticleComponent } from './article/article.component';
import { StJohnComponent } from './st-john/st-john.component';
import { FaqsComponent } from './faqs/faqs.component';
import { Home1Component } from './home1/home1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WrapperComponent,

    ClientNeedComponent,
    DescriptionComponent,

    FooterComponent,

    ArticleComponent,
    StJohnComponent,
    FaqsComponent,
    Home1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    FormsModule,
    AccordionModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
