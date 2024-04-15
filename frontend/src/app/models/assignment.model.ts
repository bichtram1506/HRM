export interface Assignment {
  id: number;
  employee_id: number;
  code: string;
  start_date: Date;
  end_date: Date;
  purpose: string;
  notes: string;
  status: string;
  location: string;
}
