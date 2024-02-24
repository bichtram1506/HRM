// employee.model.ts

export interface Employee {
  id: number;
  name: string;
  // other fields...

  // Foreign key fields
  department_id: number;
  employee_type_id: number;
  level_id: number;
  position_id: number;
  qualification_id: number;
  specialization_id: number;

  // Additional fields for related entity names
  departmentName?: string;
  employeeTypeName?: string;
  levelName?: string;
  positionName?: string;
  qualificationName?: string;
  specializationName?: string;
}
