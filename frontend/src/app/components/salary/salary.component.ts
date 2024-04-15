import { Component, OnInit } from '@angular/core';
import { SalaryService } from '../../services/salary.service'; // Import SalaryService
import { Salary } from '../../models/salary.model'; // Import Salary model

@Component({
  selector: 'app-salary-list',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {
  salaries: Salary[] = [];
  newSalary: Salary = {
    id: 0,
    employeeId: 0,
    workingDays: 0,
    payDate: new Date(), // Set default value for payDate
    advance: 0,
    allowance: 0,
    monthlySalary: 0
  };

  showAddForm: boolean = false;
  isUpdateFormVisible: boolean = false;
  selectedSalary: Salary = {
    id: 0,
    employeeId: 0,
    workingDays: 0,
    payDate: new Date(), // Set default value for payDate
    advance: 0,
    allowance: 0,
    monthlySalary: 0
  };

  constructor(private salaryService: SalaryService) {} // Inject SalaryService

  ngOnInit(): void {
    this.loadSalaries();
  }

  loadSalaries(): void {
    this.salaryService.getSalaries().subscribe(
      (data) => {
        this.salaries = data;
      },
      (error) => {
        console.error('Error fetching data from API:', error);
      }
    );
  }

  addSalary(): void {
    this.salaryService.addSalary(this.newSalary).subscribe(
      (data) => {
        this.loadSalaries();
        this.newSalary = {
          id: 0,
          employeeId: 0,
          workingDays: 0,
          payDate: new Date(), // Set default value for payDate
          advance: 0,
          allowance: 0,
          monthlySalary: 0
        };
        this.closeModal();
      },
      (error) => {
        console.error('Error adding salary:', error);
      }
    );
  }

  deleteSalary(salaryId: number): void {
    this.salaryService.deleteSalary(salaryId).subscribe(
      (data) => {
        this.loadSalaries();
      },
      (error) => {
        console.error('Error deleting salary:', error);
      }
    );
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
  }

  showUpdateForm(salary: Salary): void {
    this.selectedSalary = { ...salary }; // Copy the salary object to avoid mutating original data
    this.isUpdateFormVisible = true;
  }

  updateSalary(): void {
    this.salaryService.updateSalary(this.selectedSalary.id, this.selectedSalary).subscribe(
      (data) => {
        this.loadSalaries();
        this.closeModal();
      },
      (error) => {
        console.error('Error updating salary:', error);
      }
    );
  }

  closeModal(): void {
    this.isUpdateFormVisible = false;
    this.showAddForm = false;
    this.selectedSalary = {
      id: 0,
      employeeId: 0,
      workingDays: 0,
      payDate: new Date(), // Set default value for payDate
      advance: 0,
      allowance: 0,
      monthlySalary: 0
    };
  }
}
