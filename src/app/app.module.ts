import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { ColorsParentComponent } from './colors-parent/colors-parent.component';
import { ColorsChildComponent } from './colors-parent/colors-child/colors-child.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { HoverHighlightDirective } from './custom-directive/hover-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CounterComponent,
    ColorsParentComponent,
    ColorsChildComponent,
    StudentListComponent,
    HoverHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
