import { Component, OnInit } from '@angular/core';
import { PositionService } from '../../services/position.service'; // Import PositionService
import { Position } from '../../models/position.model'; // Import Position model

@Component({
  selector: 'app-position-list',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  positions: Position[] = [];
  newPosition: Position = {
    id: 0,
    name: '',
    code: '',
    daily_wage: 0,
    description: ''
  };

  showAddForm: boolean = false;
  isUpdateFormVisible: boolean = false;
  selectedPosition: Position = {
    id: 0,
    name: '',
    code: '',
    daily_wage: 0,
    description: ''
  };

  constructor(private positionService: PositionService) {}

  ngOnInit(): void {
    this.loadPositions();
  }

  loadPositions(): void {
    this.positionService.getPositions().subscribe(
      (data) => {
        this.positions = data;
      },
      (error) => {
        console.error('Lỗi khi tải dữ liệu từ API:', error);
      }
    );
  }

  addPosition(): void {
    this.positionService.addPosition(this.newPosition).subscribe(
      (data) => {
        this.loadPositions();
        this.newPosition = {
          id: 0,
          name: '',
          code: '',
          daily_wage: 0,
          description: ''
        };
        this.closeModal();
      },
      (error) => {
        console.error('Lỗi khi thêm vị trí:', error);
      }
    );
  }

  deletePosition(positionId: number): void {
    this.positionService.deletePosition(positionId).subscribe(
      (data) => {
        this.loadPositions();
      },
      (error) => {
        console.error('Lỗi khi xóa vị trí:', error);
      }
    );
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
  }

  showUpdateForm(position: Position): void {
    this.selectedPosition = position;
    this.isUpdateFormVisible = true;
  }

  updatePosition(): void {
    this.positionService
      .updatePosition(this.selectedPosition.id, this.selectedPosition)
      .subscribe(
        (data) => {
          this.loadPositions();
          this.closeModal();
        },
        (error) => {
          console.error('Lỗi khi cập nhật vị trí:', error);
        }
      );
  }

  closeModal(): void {
    this.isUpdateFormVisible = false;
    this.showAddForm = false;
    this.selectedPosition = {
      id: 0,
      name: '',
      code: '',
      daily_wage: 0,
      description: ''
    };
  }
}
