import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../../services/assignment.service';
import { Assignment } from '../../models/assignment.model';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  assignments: Assignment[] = [];
  newAssignment: Assignment = {
    id: 0,
    employee_id: 0,
    code: '',
    start_date: new Date(),
    end_date: new Date(),
    purpose: '',
    notes: '',
    status: '',
    location: ''
  };

  showAddForm: boolean = false;
  isUpdateFormVisible: boolean = false;
  selectedAssignment: Assignment = {
    id: 0,
    employee_id: 0,
    code: '',
    start_date: new Date(),
    end_date: new Date(),
    purpose: '',
    notes: '',
    status: '',
    location: ''
  };

  constructor(private assignmentService: AssignmentService) {}

  ngOnInit(): void {
    this.loadAssignments();
  }

  loadAssignments(): void {
    this.assignmentService.getAssignments().subscribe(
      (data) => {
        this.assignments = data;
      },
      (error) => {
        console.error('Error fetching data from API:', error);
      }
    );
  }

  addAssignment(): void {
    this.assignmentService.addAssignment(this.newAssignment).subscribe(
      (data) => {
        this.loadAssignments();
        this.newAssignment = {
          id: 0,
          employee_id: 0,
          code: '',
          start_date: new Date(),
          end_date: new Date(),
          purpose: '',
          notes: '',
          status: '',
          location: ''
        };
        this.closeModal();
      },
      (error) => {
        console.error('Error adding assignment:', error);
      }
    );
  }

  deleteAssignment(assignmentId: number): void {
    this.assignmentService.deleteAssignment(assignmentId).subscribe(
      (data) => {
        this.loadAssignments();
      },
      (error) => {
        console.error('Error deleting assignment:', error);
      }
    );
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
  }

  showUpdateForm(assignment: Assignment): void {
    this.selectedAssignment = { ...assignment }; // Copy the assignment object to avoid mutating original data
    this.isUpdateFormVisible = true;
  }

  updateAssignment(): void {
    this.assignmentService.updateAssignment(this.selectedAssignment.id, this.selectedAssignment).subscribe(
      (data) => {
        this.loadAssignments();
        this.closeModal();
      },
      (error) => {
        console.error('Error updating assignment:', error);
      }
    );
  }

  closeModal(): void {
    this.isUpdateFormVisible = false;
    this.showAddForm = false;
    this.selectedAssignment = {
      id: 0,
      employee_id: 0,
      code: '',
      start_date: new Date(),
      end_date: new Date(),
      purpose: '',
      notes: '',
      status: '',
      location: ''
    };
  }
}
