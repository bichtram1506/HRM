import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  newEmployee: Employee = {
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

  showAddForm: boolean = false;
  isUpdateFormVisible: boolean = false;
  selectedEmployee: Employee = {
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

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        console.error('Error fetching data from API:', error);
      }
    );
  }

  addEmployee(): void {
    this.employeeService.addEmployee(this.newEmployee).subscribe(
      (data) => {
        this.loadEmployees();
        this.newEmployee = {
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
        this.closeModal();
      },
      (error) => {
        console.error('Error adding employee:', error);
      }
    );
  }

  deleteEmployee(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      (data) => {
        this.loadEmployees();
      },
      (error) => {
        console.error('Error deleting employee:', error);
      }
    );
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
  }

  showUpdateForm(employee: Employee): void {
    this.selectedEmployee = { ...employee }; // Copy the employee object to avoid mutating original data
    this.isUpdateFormVisible = true;
  }

  updateEmployee(): void {
    this.employeeService.updateEmployee(this.selectedEmployee.id, this.selectedEmployee).subscribe(
      (data) => {
        this.loadEmployees();
        this.closeModal();
      },
      (error) => {
        console.error('Error updating employee:', error);
      }
    );
  }

  closeModal(): void {
    this.isUpdateFormVisible = false;
    this.showAddForm = false;
    this.selectedEmployee = {
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
}
