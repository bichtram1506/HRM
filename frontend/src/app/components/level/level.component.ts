import { Component, OnInit } from '@angular/core';
import { LevelService } from '../../services/level.service';
import { Level } from '../../models/level.model';

@Component({
  selector: 'app-level-list',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {
  levels: Level[] = [];
  newLevel: Level = {
    id: 0,
    name: '',
    code: '',
    description: ''
  };

  showAddForm: boolean = false;
  isUpdateFormVisible: boolean = false;
  selectedLevel: Level = {
    id: 0,
    name: '',
    code: '',
    description: ''
  };

  constructor(private levelService: LevelService) {}

  ngOnInit(): void {
    this.loadLevels();
  }

  loadLevels(): void {
    this.levelService.getLevels().subscribe(
      (data) => {
        this.levels = data;
      },
      (error) => {
        console.error('Error fetching data from API:', error);
      }
    );
  }

  addLevel(): void {
    this.levelService.addLevel(this.newLevel).subscribe(
      (data) => {
        this.loadLevels();
        this.newLevel = {
          id: 0,
          name: '',
          code: '',
          description: ''
        };
        this.closeModal();
      },
      (error) => {
        console.error('Error adding level:', error);
      }
    );
  }

  deleteLevel(levelId: number): void {
    this.levelService.deleteLevel(levelId).subscribe(
      (data) => {
        this.loadLevels();
      },
      (error) => {
        console.error('Error deleting level:', error);
      }
    );
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
  }

  showUpdateForm(level: Level): void {
    this.selectedLevel = level;
    this.isUpdateFormVisible = true;
  }

  updateLevel(): void {
    this.levelService.updateLevel(this.selectedLevel.id, this.selectedLevel).subscribe(
      (data) => {
        this.loadLevels();
        this.closeModal();
      },
      (error) => {
        console.error('Error updating level:', error);
      }
    );
  }

  closeModal(): void {
    this.isUpdateFormVisible = false;
    this.showAddForm = false;
    this.selectedLevel = {
      id: 0,
      name: '',
      code: '',
      description: ''
    };
  }
}
