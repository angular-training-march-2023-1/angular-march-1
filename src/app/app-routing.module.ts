import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsParentComponent } from './colors-parent/colors-parent.component';
import { CounterComponent } from './counter/counter.component';
import { DisplayComponent } from './display/display.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { StudentAddHttpComponent } from './student/student-add-http/student-add-http.component';
import { StudentEditHttpComponent } from './student/student-edit-http/student-edit-http.component';
import { StudentListHttpComponent } from './student/student-list-http/student-list-http.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentViewHttpComponent } from './student/student-view-http/student-view-http.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path:'logout', component: LogoutComponent },
  { path:'display', component: DisplayComponent },
  { path:'counter', component: CounterComponent },
  { path:'colors', component: ColorsParentComponent , },
  { path:'student-list', component: StudentListComponent },
  { path:'student-list-http', component: StudentListHttpComponent },
  { path:'student-add-http', component: StudentAddHttpComponent },
  { path:'student-edit-http/:sid', component: StudentEditHttpComponent },
  { path:'student-view-http/:sid', component: StudentViewHttpComponent }, // http://localhost:4200/student-view-http/102
  { path:'weather', component: WeatherComponent },
  { path:'product', component: ProductListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
