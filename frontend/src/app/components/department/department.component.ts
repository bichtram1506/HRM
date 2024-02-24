import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department.model';

@Component({
  selector: 'app-department-list',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departments: Department[] = [];
  newDepartment: Department = {
    id: 0,
    name: '',
    description: ''
  };

  showAddForm: boolean = false;
  isUpdateFormVisible: boolean = false;
  selectedDepartment: Department = {
    id: 0,
    name: '',
    description: ''
  };

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe(
      (data) => {
        this.departments = data;
      },
      (error) => {
        console.error('Lỗi khi tải dữ liệu từ API:', error);
      }
    );
  }

  addDepartment(): void {
    this.departmentService.addDepartment(this.newDepartment).subscribe(
      (data) => {
        this.loadDepartments();
        this.newDepartment = {
          id: 0,
          name: '',
          description: ''
        };
        this.closeModal();
      },
      (error) => {
        console.error('Lỗi khi thêm phòng ban:', error);
      }
    );
  }

  deleteDepartment(departmentId: number): void {
    this.departmentService.deleteDepartment(departmentId).subscribe(
      (data) => {
        this.loadDepartments();
      },
      (error) => {
        console.error('Lỗi khi xóa phòng ban:', error);
      }
    );
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
  }

  showUpdateForm(department: Department): void {
    this.selectedDepartment = department;
    this.isUpdateFormVisible = true;

  }
  updateDepartment(): void {
    this.departmentService
      .updateDepartment(this.selectedDepartment.id, this.selectedDepartment)
      .subscribe(
        (data) => {

          this.loadDepartments();
          this.closeModal();

        },
        (error) => {
          console.error('Lỗi khi cập nhật phòng ban:', error);
        }
      );
  }

  closeModal(): void {
    this.isUpdateFormVisible = false;
    this.showAddForm = false;
    this.selectedDepartment = {
      id: 0,
      name: '',
      description: ''
    };
  }
}
