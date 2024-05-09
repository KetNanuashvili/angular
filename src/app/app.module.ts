import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { DetailsComponent } from './news/details/details.component';
import { Details2Component } from './news/details2/details2.component';

const routes: Routes = [

  {
    path: 'home',
    component: MyHomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'prefix'
  },
  {
    path: 'about',
    component: MyAboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
    children: [
      {
        path: '',
        redirectTo: 'details',
        pathMatch: 'prefix'
      },
      {
        path: 'details',
        component: DetailsComponent
      },
      {
        path: 'details2',
        component: Details2Component
      }
    ]
  },
  
];
@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyAboutComponent,
    HeaderComponent,
    ContactComponent,
    NewsComponent,
    DetailsComponent,
    Details2Component
  ],
  imports: [
    BrowserModule,
   [RouterModule.forRoot(routes)],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
