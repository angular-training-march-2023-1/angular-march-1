import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
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
    StudentListHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
