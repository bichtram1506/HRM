export interface Salary {
  id: number;
  employee_id: number; // Import Employee từ models nếu cần
  workingDays: number;
  payDate: Date;
  advance: number;
  allowance: number;
  monthlySalary: number;
  // Thêm các trường khác nếu cần thiết

  employeeName: string;
}
