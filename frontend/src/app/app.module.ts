import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LevelComponent } from './components/level/level.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QualificationComponent } from './components/qualification/qualification.component';
import { SpecializationComponent } from './components/specialization/specialization.component';
import { EmployeeTypeComponent } from './components/employee-type/employee-type.component';
import { PositionComponent } from './components/position/position.component'; // Import PositionComponent
import { SpecializationService } from './services/specialization.service';
import { EmployeeTypeService } from './services/employee-type.service';
import { PositionService } from './services/position.service'; // Import PositionService

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'departments', component: DepartmentComponent },
  { path: 'employees', component: EmployeeComponent },
  { path: 'levels', component: LevelComponent },
  { path: 'home', component: HomeComponent },
  { path: 'qualifications', component: QualificationComponent },
  { path: 'specializations', component: SpecializationComponent },
  { path: 'employee-types', component: EmployeeTypeComponent },
  { path: 'positions', component: PositionComponent }, // Add PositionComponent route
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    UserComponent,
    NavbarComponent,
    DepartmentComponent,
    EmployeeComponent,
    LevelComponent,
    AppComponent,
    QualificationComponent,
    SpecializationComponent,
    EmployeeTypeComponent,
    PositionComponent // Add PositionComponent to declarations
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    SpecializationService,
    EmployeeTypeService,
    PositionService // Add PositionService to providers
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
