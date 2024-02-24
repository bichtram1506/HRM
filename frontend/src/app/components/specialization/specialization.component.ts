import { Component, OnInit } from '@angular/core';
import { SpecializationService } from '../../services/specialization.service';
import { Specialization } from '../../models/specialization.model';

@Component({
  selector: 'app-specialization-list',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.css']
})
export class SpecializationComponent implements OnInit {
  specializations: Specialization[] = [];
  newSpecialization: Specialization = {
    id: 0,
    code: '',
    name: '',
    description: ''
  };

  showAddForm: boolean = false;
  isUpdateFormVisible: boolean = false;
  selectedSpecialization: Specialization = {
    id: 0,
    code: '',
    name: '',
    description: ''
  };

  constructor(private specializationService: SpecializationService) {}

  ngOnInit(): void {
    this.loadSpecializations();
  }

  loadSpecializations(): void {
    this.specializationService.getSpecializations().subscribe(
      (data) => {
        this.specializations = data;
      },
      (error) => {
        console.error('Lỗi khi tải dữ liệu từ API:', error);
      }
    );
  }

  addSpecialization(): void {
    this.specializationService.addSpecialization(this.newSpecialization).subscribe(
      (data) => {
        this.loadSpecializations();
        this.newSpecialization = {
          id: 0,
          code: '',
          name: '',
          description: ''
        };
        this.closeModal();
      },
      (error) => {
        console.error('Lỗi khi thêm chuyên ngành:', error);
      }
    );
  }

  deleteSpecialization(specializationId: number): void {
    this.specializationService.deleteSpecialization(specializationId).subscribe(
      (data) => {
        this.loadSpecializations();
      },
      (error) => {
        console.error('Lỗi khi xóa chuyên ngành:', error);
      }
    );
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
  }

  showUpdateForm(specialization: Specialization): void {
    this.selectedSpecialization = specialization;
    this.isUpdateFormVisible = true;
  }

  updateSpecialization(): void {
    this.specializationService
      .updateSpecialization(this.selectedSpecialization.id, this.selectedSpecialization)
      .subscribe(
        (data) => {
          this.loadSpecializations();
          this.closeModal();
        },
        (error) => {
          console.error('Lỗi khi cập nhật chuyên ngành:', error);
        }
      );
  }

  closeModal(): void {
    this.isUpdateFormVisible = false;
    this.showAddForm = false;
    this.selectedSpecialization = {
      id: 0,
      code: '',
      name: '',
      description: ''
    };
  }
}
