import { Component, OnInit } from '@angular/core';
import { QualificationService } from '../../services/qualification.service';
import { Qualification } from '../../models/qualification.model';

@Component({
  selector: 'app-qualification-list',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {
  qualifications: Qualification[] = [];
  newQualification: Qualification = {
    id: 0,
    code: '',
    name: '',
    description: ''
  };

  showAddForm: boolean = false;
  isUpdateFormVisible: boolean = false;
  selectedQualification: Qualification = {
    id: 0,
    code: '',
    name: '',
    description: ''
  };

  constructor(private qualificationService: QualificationService) {}

  ngOnInit(): void {
    this.loadQualifications();
  }

  loadQualifications(): void {
    this.qualificationService.getQualifications().subscribe(
      (data) => {
        this.qualifications = data;
      },
      (error) => {
        console.error('Lỗi khi tải dữ liệu từ API:', error);
      }
    );
  }

  addQualification(): void {
    this.qualificationService.addQualification(this.newQualification).subscribe(
      (data) => {
        this.loadQualifications();
        this.newQualification = {
          id: 0,
          code: '',
          name: '',
          description: ''
        };
        this.closeModal();
      },
      (error) => {
        console.error('Lỗi khi thêm bằng cấp:', error);
      }
    );
  }

  deleteQualification(qualificationId: number): void {
    this.qualificationService.deleteQualification(qualificationId).subscribe(
      (data) => {
        this.loadQualifications();
      },
      (error) => {
        console.error('Lỗi khi xóa bằng cấp:', error);
      }
    );
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
  }

  showUpdateForm(qualification: Qualification): void {
    this.selectedQualification = qualification;
    this.isUpdateFormVisible = true;
  }

  updateQualification(): void {
    this.qualificationService
      .updateQualification(this.selectedQualification.id, this.selectedQualification)
      .subscribe(
        (data) => {
          this.loadQualifications();
          this.closeModal();
        },
        (error) => {
          console.error('Lỗi khi cập nhật bằng cấp:', error);
        }
      );
  }

  closeModal(): void {
    this.isUpdateFormVisible = false;
    this.showAddForm = false;
    this.selectedQualification = {
      id: 0,
      code: '',
      name: '',
      description: ''
    };
  }
}
