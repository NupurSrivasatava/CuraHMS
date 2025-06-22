export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  phone: string;
  email: string;
  address: string;
  bloodGroup: string;
  emergencyContact: string;
  admissionDate: string;
  status: 'Active' | 'Discharged' | 'Critical';
  assignedDoctor: string;
  room?: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  phone: string;
  email: string;
  department: string;
  availability: string[];
  rating: number;
  patients: number;
  status: 'Available' | 'Busy' | 'Off Duty';
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled' | 'In Progress';
  type: 'Consultation' | 'Follow-up' | 'Emergency' | 'Surgery';
  notes?: string;
}

export interface Department {
  id: string;
  name: string;
  head: string;
  doctors: number;
  patients: number;
  beds: number;
  availableBeds: number;
}

export interface Inventory {
  id: string;
  name: string;
  category: string;
  quantity: number;
  minStock: number;
  price: number;
  supplier: string;
  expiry?: string;
}