import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeeTypeComponent } from './components/employee-type/employee-type.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { LevelComponent } from './components/level/level.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PositionComponent } from './components/position/position.component';
import { QualificationComponent } from './components/qualification/qualification.component';
import { SpecializationComponent } from './components/specialization/specialization.component';
import { UserComponent } from './components/user/user.component';
import { SalaryComponent } from './salary/salary.component'; // Import SalaryComponent
import { EmployeeTypeService } from './services/employee-type.service';
import { PositionService } from './services/position.service';
import { SalaryService } from './services/salary.service'; // Import SalaryService
import { SpecializationService } from './services/specialization.service';

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'departments', component: DepartmentComponent },
  { path: 'employees', component: EmployeeComponent },
  { path: 'levels', component: LevelComponent },
  { path: 'home', component: HomeComponent },
  { path: 'qualifications', component: QualificationComponent },
  { path: 'specializations', component: SpecializationComponent },
  { path: 'employee-types', component: EmployeeTypeComponent },
  { path: 'positions', component: PositionComponent },
  { path: 'salaries', component: SalaryComponent }, // Add SalaryComponent route
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
    PositionComponent,
    SalaryComponent, // Add SalaryComponent to declarations
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
    PositionService,
    SalaryService, // Add SalaryService to providers
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
