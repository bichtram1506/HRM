import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { Department } from '../../models/department.model';
import { EmployeeType } from '../../models/employee-type.model';
import { Level } from '../../models/level.model';
import { Position } from '../../models/position.model';
import { Qualification } from '../../models/qualification.model';
import { Specialization } from '../../models/specialization.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  departments: Department[] = [];
  employeeTypes: EmployeeType[] = [];
  levels: Level[] = [];
  positions: Position[] = [];
  qualifications: Qualification[] = [];
  specializations: Specialization[] = [];
  newEmployee: Employee = this.initializeEmployee();
  showAddForm: boolean = false;
  isUpdateFormVisible: boolean = false;
  selectedEmployee: Employee = this.initializeEmployee();

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loadEmployees();
    this.loadDepartments();
    this.loadEmployeeTypes();
    this.loadLevels();
    this.loadPositions();
    this.loadQualifications();
    this.loadSpecializations();
  }

  initializeEmployee(): Employee {
    return {
      id: 0,
      name: '',
      department_id: 0,
      employee_type_id: 0,
      level_id: 0,
      position_id: 0,
      qualification_id: 0,
      specialization_id: 0,
      departmentName: '',
      employeeTypeName: '',
      levelName: '',
      positionName: '',
      qualificationName: '',
      specializationName: ''
    };
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      data => this.employees = data,
      error => console.error('Error fetching data from API:', error)
    );
  }

  loadDepartments(): void {
    this.employeeService.getDepartments().subscribe(
      data => this.departments = data,
      error => console.error('Error fetching departments from API:', error)
    );
  }

  loadEmployeeTypes(): void {
    this.employeeService.getEmployeeTypes().subscribe(
      data => this.employeeTypes = data,
      error => console.error('Error fetching employee types from API:', error)
    );
  }

  loadLevels(): void {
    this.employeeService.getLevels().subscribe(
      data => this.levels = data,
      error => console.error('Error fetching levels from API:', error)
    );
  }

  loadPositions(): void {
    this.employeeService.getPositions().subscribe(
      data => this.positions = data,
      error => console.error('Error fetching positions from API:', error)
    );
  }

  loadQualifications(): void {
    this.employeeService.getQualifications().subscribe(
      data => this.qualifications = data,
      error => console.error('Error fetching qualifications from API:', error)
    );
  }

  loadSpecializations(): void {
    this.employeeService.getSpecializations().subscribe(
      data => this.specializations = data,
      error => console.error('Error fetching specializations from API:', error)
    );
  }

  addEmployee(): void {
    this.employeeService.addEmployee(this.newEmployee).subscribe(
      data => {
        this.loadEmployees();
        this.newEmployee = this.initializeEmployee();
        this.closeModal();
      },
      error => console.error('Error adding employee:', error)
    );
  }

  deleteEmployee(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      data => this.loadEmployees(),
      error => console.error('Error deleting employee:', error)
    );
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
  }

  showUpdateForm(employee: Employee): void {
    this.selectedEmployee = { ...employee };
    this.isUpdateFormVisible = true;
  }

  updateEmployee(): void {
    this.employeeService.updateEmployee(this.selectedEmployee.id, this.selectedEmployee).subscribe(
      data => {
        this.loadEmployees();
        this.closeModal();
      },
      error => console.error('Error updating employee:', error)
    );
  }


  closeModal(): void {
    this.isUpdateFormVisible = false;
    this.showAddForm = false;
    this.selectedEmployee = this.initializeEmployee();
  }
}
