export type AppointmentStatus = 'Completed' | 'In Progress' | 'Pending' | 'Cancelled';
export type InvoiceStatus = 'Paid' | 'Pending' | 'Overdue' | 'Cancelled';

export interface Appointment {
  id: string;
  customer: string;
  vehicle: string;
  service: string;
  date: string;
  time?: string;
  mechanic?: string;
  status: AppointmentStatus;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  vehicles: number;
  lastVisit: string;
  totalSpent: string;
}

export interface Vehicle {
  id: string;
  plate: string;
  make: string;
  model: string;
  year: number;
  owner: string;
  lastService: string;
  mileage: string;
}

export interface Invoice {
  id: string;
  customer: string;
  vehicle: string;
  service: string;
  amount: string;
  date: string;
  dueDate: string;
  status: InvoiceStatus;
}

export interface Mechanic {
  id: string;
  name: string;
  specialty: string;
  certifications: string;
  activeJobs: number;
  completedToday: number;
  rating: number;
}

export interface Stat {
  label: string;
  value: string;
  change?: string;
  changeColor?: string;
}

export interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
}
