import { Component, OnInit } from '@angular/core';
import { EmployeeTypeService } from '../../services/employee-type.service';
import { EmployeeType } from '../../models/employee-type.model';

@Component({
  selector: 'app-employee-type-list',
  templateUrl: './employee-type.component.html',
  styleUrls: ['./employee-type.component.css']
})
export class EmployeeTypeComponent implements OnInit {
  employeeTypes: EmployeeType[] = [];
  newEmployeeType: EmployeeType = {
    id: 0,
    code: '',
    name: '',
    description: ''
  };

  showAddForm: boolean = false;
  isUpdateFormVisible: boolean = false;
  selectedEmployeeType: EmployeeType = {
    id: 0,
    code: '',
    name: '',
    description: ''
  };

  constructor(private employeeTypeService: EmployeeTypeService) {}

  ngOnInit(): void {
    this.loadEmployeeTypes();
  }

  loadEmployeeTypes(): void {
    this.employeeTypeService.getEmployeeTypes().subscribe(
      (data) => {
        this.employeeTypes = data;
      },
      (error) => {
        console.error('Lỗi khi tải dữ liệu từ API:', error);
      }
    );
  }

  addEmployeeType(): void {
    this.employeeTypeService.addEmployeeType(this.newEmployeeType).subscribe(
      (data) => {
        this.loadEmployeeTypes();
        this.newEmployeeType = {
          id: 0,
          code: '',
          name: '',
          description: ''
        };
        this.closeModal();
      },
      (error) => {
        console.error('Lỗi khi thêm loại nhân viên:', error);
      }
    );
  }

  deleteEmployeeType(employeeTypeId: number): void {
    this.employeeTypeService.deleteEmployeeType(employeeTypeId).subscribe(
      (data) => {
        this.loadEmployeeTypes();
      },
      (error) => {
        console.error('Lỗi khi xóa loại nhân viên:', error);
      }
    );
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
  }

  showUpdateForm(employeeType: EmployeeType): void {
    this.selectedEmployeeType = employeeType;
    this.isUpdateFormVisible = true;
  }

  updateEmployeeType(): void {
    this.employeeTypeService
      .updateEmployeeType(this.selectedEmployeeType.id, this.selectedEmployeeType)
      .subscribe(
        (data) => {
          this.loadEmployeeTypes();
          this.closeModal();
        },
        (error) => {
          console.error('Lỗi khi cập nhật loại nhân viên:', error);
        }
      );
  }

  closeModal(): void {
    this.isUpdateFormVisible = false;
    this.showAddForm = false;
    this.selectedEmployeeType = {
      id: 0,
      code: '',
      name: '',
      description: ''
    };
  }
}
