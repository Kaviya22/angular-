import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { StructureComponent } from './structure/structure.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { RoutingComponent } from './routing/routing.component';


@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    StructureComponent,
    CalculatorComponent,
    TemplateformComponent,
    ReactiveformComponent,
    RoutingComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
