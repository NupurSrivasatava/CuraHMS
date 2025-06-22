import { Patient, Doctor, Appointment, Department, Inventory } from '../types';

export const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'Mohd Kashif',
    age: 20,
    gender: 'Male',
    phone: '91491XXXXX',
    email: 'mdkashif0704@gmail.com',
    address: 'Sharda University',
    bloodGroup: 'O+',
    emergencyContact: '+91-93929XXXXX',
    admissionDate: '2024-01-15',
    status: 'Active',
    assignedDoctor: 'Dr. ABC',
    room: 'Room 101'
  },
  {
    id: '2',
    name: 'Nupur Srivastava',
    age: 20,
    gender: 'Female',
    phone: '+75183XXXXX',
    email: 'nupursrivasta@gmail.com',
    address: 'Sharda University',
    bloodGroup: 'A+',
    emergencyContact: '+91-80889XXXXX',
    admissionDate: '2024-01-20',
    status: 'Active',
    assignedDoctor: 'Dr. XYZ',
    room: 'Room 103'
  },
  {
    id: '3',
    name: 'Sahil Goswami',
    age: 20,
    gender: 'Male',
    phone: '+91-85588XXXXX',
    email: 'sahilgoswami@gmail.com',
    address: 'Lamxi Nagar',
    bloodGroup: 'B+',
    emergencyContact: '+91-87884XXXXX',
    admissionDate: '2024-01-18',
    status: 'Discharged',
    assignedDoctor: 'Dr. PQR'
  }
];

export const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Vikas Jain',
    specialization: 'Cardiologist',
    experience: 12,
    phone: '+91 99799XXXXX',
    email: 'vikasjain@gmail.com',
    department: 'Cardiology',
    availability: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
    rating: 4.8,
    patients: 45,
    status: 'Available'
  },
  {
    id: '2',
    name: 'Dr. Khare',
    specialization: 'Neurologist',
    experience: 15,
    phone: '+91 98494XXXXX',
    email: 'khare@gmail.com',
    department: 'Neurology',
    availability: ['Monday', 'Wednesday', 'Thursday', 'Friday'],
    rating: 4.9,
    patients: 38,
    status: 'Busy'
  },
  {
    id: '3',
    name: 'Dr. Vineeta Agarawal',
    specialization: 'Pediatrician',
    experience: 8,
    phone: '+91 98929XXXXX',
    email: 'vineetaagarwal@gmail.com',
    department: 'Pediatrics',
    availability: ['Tuesday', 'Wednesday', 'Thursday', 'Saturday'],
    rating: 4.7,
    patients: 52,
    status: 'Available'
  }
];

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    patientId: '1',
    doctorId: '2',
    patientName: 'Prince Tyagi',
    doctorName: 'Dr. Khare',
    date: '2024-01-25',
    time: '10:00 AM',
    status: 'Scheduled',
    type: 'Consultation'
  },
  {
    id: '2',
    patientId: '2',
    doctorId: '1',
    patientName: 'Mayank',
    doctorName: 'Dr. Vikas Jain',
    date: '2024-01-25',
    time: '2:00 PM',
    status: 'In Progress',
    type: 'Emergency'
  },
  {
    id: '3',
    patientId: '3',
    doctorId: '3',
    patientName: 'Rohan',
    doctorName: 'Dr. Vineeta Agarwal',
    date: '2024-01-24',
    time: '11:30 AM',
    status: 'Completed',
    type: 'Follow-up'
  }
];

export const mockDepartments: Department[] = [
  {
    id: '1',
    name: 'Cardiology',
    head: 'Dr. Vikas Jain',
    doctors: 8,
    patients: 45,
    beds: 20,
    availableBeds: 5
  },
  {
    id: '2',
    name: 'Neurology',
    head: 'Dr. Khare',
    doctors: 6,
    patients: 38,
    beds: 15,
    availableBeds: 3
  },
  {
    id: '3',
    name: 'Pediatrics',
    head: 'Dr. Vineeta Agarwal',
    doctors: 10,
    patients: 52,
    beds: 25,
    availableBeds: 8
  },
  {
    id: '4',
    name: 'Emergency',
    head: 'Dr. Hardik',
    doctors: 12,
    patients: 67,
    beds: 30,
    availableBeds: 12
  }
];

export const mockInventory: Inventory[] = [
  {
    id: '1',
    name: 'Paracetamol',
    category: 'Medicine',
    quantity: 500,
    minStock: 100,
    price: 0.50,
    supplier: 'PharmaCorp',
    expiry: '2025-06-15'
  },
  {
    id: '2',
    name: 'Surgical Gloves',
    category: 'Medical Supplies',
    quantity: 1000,
    minStock: 200,
    price: 0.25,
    supplier: 'MedSupply Inc'
  },
  {
    id: '3',
    name: 'Antibiotics',
    category: 'Medicine',
    quantity: 250,
    minStock: 50,
    price: 2.50,
    supplier: 'PharmaCorp',
    expiry: '2024-12-30'
  }
];