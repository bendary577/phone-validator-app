import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/screen-snippets/navbar/navbar.component';
import { FooterComponent } from './components/screen-snippets/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/screens/home/home.component';
import { ListPhonesComponent } from './components/screens/list-phones/list-phones.component';
import { AddPhoneComponent } from './components/screens/add-phone/add-phone.component';
import { AddPhoneFormComponent } from './components/screen-snippets/add-phone-form/add-phone-form.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListPhonesComponent },
  { path: 'add', component: AddPhoneComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ListPhonesComponent,
    AddPhoneComponent,
    AddPhoneFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
