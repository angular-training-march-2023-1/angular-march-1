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
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path:'logout', component: LogoutComponent },
  { path:'display', component: DisplayComponent, canActivate: [LoginGuard] },
  { path:'counter', component: CounterComponent, canActivate: [LoginGuard] },
  { path:'colors', component: ColorsParentComponent , canActivate: [LoginGuard]},
  { path:'student-list', component: StudentListComponent, canActivate: [LoginGuard] },
  { path:'student-list-http', component: StudentListHttpComponent, canActivate: [LoginGuard] },
  { path:'student-add-http', component: StudentAddHttpComponent , canActivate: [LoginGuard]},
  { path:'student-edit-http/:sid', component: StudentEditHttpComponent, canActivate: [LoginGuard] },
  { path:'student-view-http/:sid', component: StudentViewHttpComponent, canActivate: [LoginGuard] }, // http://localhost:4200/student-view-http/102
  { path:'weather', component: WeatherComponent, canActivate: [LoginGuard] },
  { path:'product', component: ProductListComponent, canActivate: [LoginGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
