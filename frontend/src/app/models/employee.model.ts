import { Department } from './department.model';
import { EmployeeType } from './employee-type.model';
import { Level } from './level.model';
import { Position } from './position.model';
import { Qualification } from './qualification.model';
import { Specialization } from './specialization.model';

export interface Employee {
  id: number;
  name: string;
  sex: string;
  marital_status: string;
  hometown: string;
  avatar: string;
  email: string;
  status: string;
  employee_type_id: EmployeeType;
  level_id: Level;
  department_id: Department;
  position_id: Position;
  qualification_id: Qualification;
  specialization_id: Specialization;
  // Thêm các trường khác nếu cần thiết
}
