import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorsParentComponent } from './colors-parent/colors-parent.component';
import { ColorsChildComponent } from './colors-parent/colors-child/colors-child.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { HoverHighlightDirective } from './custom-directive/hover-highlight.directive';
import { NumberListComponent } from './number-list/number-list.component';
import { ExpoPipe } from './custom-pipes/expo.pipe';
import { FilterListPipe } from './custom-pipes/filter-list.pipe';
import { TodoAnimationComponent } from './todo-animation/todo-animation.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { StudentListHttpComponent } from './student/student-list-http/student-list-http.component';
import { WeatherComponent } from './weather/weather.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { StudentViewHttpComponent } from './student/student-view-http/student-view-http.component';
import { StudentAddHttpComponent } from './student/student-add-http/student-add-http.component';
import { StudentEditHttpComponent } from './student/student-edit-http/student-edit-http.component';
import { OnlyTextDirective } from './custom-validator/only-text.directive';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CounterComponent,
    ColorsParentComponent,
    ColorsChildComponent,
    StudentListComponent,
    HoverHighlightDirective,
    NumberListComponent,
    ExpoPipe,
    FilterListPipe,
    TodoAnimationComponent,
    ObservableDemoComponent,
    StudentListHttpComponent,
    WeatherComponent,
    ProductListComponent,
    HeaderComponent,
    StudentViewHttpComponent,
    StudentAddHttpComponent,
    StudentEditHttpComponent,
    OnlyTextDirective,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
