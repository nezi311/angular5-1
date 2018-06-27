import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// dodanie biblioteki FormModule
import { FormsModule } from '@angular/forms';
// dodanie biblioteki od animacji w angularze
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // po dodaniu biblioteki nalezy ją równiez zaimportować w importsach
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
