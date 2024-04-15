import { Component, OnInit } from '@angular/core';
import { AwardsTypeService } from '../../services/awards-type.service';
import { AwardsType } from '../../models/awards-type.model';

@Component({
  selector: 'app-awards-type-list',
  templateUrl: './awards-type.component.html',
  styleUrls: ['./awards-type.component.css']
})
export class AwardsTypeComponent implements OnInit {
  awardsTypes: AwardsType[] = [];
  newAwardsType: AwardsType = {
    id: 0,
    name: '',
    description: ''
  };

  showAddForm: boolean = false;
  isUpdateFormVisible: boolean = false;
  selectedAwardsType: AwardsType = {
    id: 0,
    name: '',
    description: ''
  };

  constructor(private awardsTypeService: AwardsTypeService) {}

  ngOnInit(): void {
    this.loadAwardsTypes();
  }

  loadAwardsTypes(): void {
    this.awardsTypeService.getAwardsTypes().subscribe(
      (data) => {
        this.awardsTypes = data;
      },
      (error) => {
        console.error('Error fetching data from API:', error);
      }
    );
  }

  addAwardsType(): void {
    this.awardsTypeService.addAwardsType(this.newAwardsType).subscribe(
      (data) => {
        this.loadAwardsTypes();
        this.newAwardsType = {
          id: 0,
          name: '',
          description: ''
        };
        this.closeModal();
      },
      (error) => {
        console.error('Error adding awards type:', error);
      }
    );
  }

  deleteAwardsType(awardsTypeId: number): void {
    this.awardsTypeService.deleteAwardsType(awardsTypeId).subscribe(
      (data) => {
        this.loadAwardsTypes();
      },
      (error) => {
        console.error('Error deleting awards type:', error);
      }
    );
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
  }

  showUpdateForm(awardsType: AwardsType): void {
    this.selectedAwardsType = awardsType;
    this.isUpdateFormVisible = true;
  }

  updateAwardsType(): void {
    this.awardsTypeService
      .updateAwardsType(this.selectedAwardsType.id, this.selectedAwardsType)
      .subscribe(
        (data) => {
          this.loadAwardsTypes();
          this.closeModal();
        },
        (error) => {
          console.error('Error updating awards type:', error);
        }
      );
  }

  closeModal(): void {
    this.isUpdateFormVisible = false;
    this.showAddForm = false;
    this.selectedAwardsType = {
      id: 0,
      name: '',
      description: ''
    };
  }
}
