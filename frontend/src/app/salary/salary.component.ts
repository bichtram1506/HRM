import { Component, OnInit } from '@angular/core';
import { Salary } from '../models/salary.model';
import { EmployeeService } from '../services/employee.service';
import { SalaryService } from '../services/salary.service';

@Component({
  selector: 'app-salary-list',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {
  salaries: Salary[] = [];
  newSalary: Salary = this.initializeSalary();
  showAddForm: boolean = false;
  isUpdateFormVisible: boolean = false;
  selectedSalary: Salary = this.initializeSalary();
  employees: any[] = []; // Define employees array
  constructor(
    private salaryService: SalaryService,
    private employeeService: EmployeeService // Inject EmployeeService
  ) {}

  ngOnInit(): void {
    this.loadSalaries();
    this.loadEmployees(); // Call loadEmployees to fetch employees
  }

  initializeSalary(): Salary {
    return {
      id: 0,
      employee_id: 0,
      workingDays: 0,
      payDate: new Date(),
      advance: 0,
      allowance: 0,
      monthlySalary: 0,
      employeeName: ''
    };
  }

  loadSalaries(): void {
    this.salaryService.getSalaries().subscribe(
      data => this.salaries = data,
      error => console.error('Error fetching salaries from API:', error)
    );
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      data => this.employees = data,
      error => console.error('Error fetching data from API:', error)
    );
  }
  addSalary(): void {
    this.salaryService.addSalary(this.newSalary).subscribe(
      data => {
        this.loadSalaries();
        this.newSalary = this.initializeSalary();
        this.closeModal();
      },
      error => console.error('Error adding salary:', error)
    );
  }

  deleteSalary(salaryId: number): void {
    this.salaryService.deleteSalary(salaryId).subscribe(
      data => this.loadSalaries(),
      error => console.error('Error deleting salary:', error)
    );
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
  }

  showUpdateForm(salary: Salary): void {
    this.selectedSalary = { ...salary };
    this.isUpdateFormVisible = true;
  }

  updateSalary(): void {
    this.salaryService.updateSalary(this.selectedSalary.id, this.selectedSalary).subscribe(
      data => {
        this.loadSalaries();
        this.closeModal();
      },
      error => console.error('Error updating salary:', error)
    );
  }

  closeModal(): void {
    this.isUpdateFormVisible = false;
    this.showAddForm = false;
    this.selectedSalary = this.initializeSalary();
  }
}
