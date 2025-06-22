import { Users, UserCheck, Calendar, Building2, TrendingUp, TrendingDown, Activity } from 'lucide-react';
import StatsCard from '../components/UI/StatsCard';
import { Card, CardHeader, CardContent } from '../components/UI/Card';
import Badge from '../components/UI/Badge';
import { mockPatients, mockDoctors, mockAppointments } from '../data/mockData';

export default function Dashboard() {
  const totalPatients = mockPatients.length;
  const totalDoctors = mockDoctors.length;
  const todayAppointments = mockAppointments.filter(
    apt => apt.date === new Date().toISOString().split('T')[0]
  ).length;
  const criticalPatients = mockPatients.filter(p => p.status === 'Critical').length;

  const recentAppointments = mockAppointments.slice(0, 5);
  const recentPatients = mockPatients.slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Patients"
          value={totalPatients}
          icon={<Users className="h-6 w-6 text-blue-600" />}
         
        />
        <StatsCard
          title="Total Doctors"
          value={totalDoctors}
          icon={<UserCheck className="h-6 w-6 text-green-600" />}
    
        />
        <StatsCard
          title="Today's Appointments"
          value={todayAppointments}
          icon={<Calendar className="h-6 w-6 text-purple-600" />}
        
       
        />
        <StatsCard
          title="Critical Patients"
          value={criticalPatients}
          icon={<Activity className="h-6 w-6 text-red-600" />}
          
  
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Appointments */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-900">Recent Appointments</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{appointment.patientName}</p>
                    <p className="text-sm text-gray-600">{appointment.doctorName}</p>
                    <p className="text-xs text-gray-500">{appointment.date} at {appointment.time}</p>
                  </div>
                  <Badge 
                    variant={
                      appointment.status === 'Completed' ? 'success' :
                      appointment.status === 'In Progress' ? 'warning' :
                      appointment.status === 'Cancelled' ? 'error' : 'info'
                    }
                  >
                    {appointment.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Patients */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-900">Recent Patients</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPatients.map((patient) => (
                <div key={patient.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{patient.name}</p>
                    <p className="text-sm text-gray-600">{patient.assignedDoctor}</p>
                    <p className="text-xs text-gray-500">Room: {patient.room || 'N/A'}</p>
                  </div>
                  <Badge 
                    variant={
                      patient.status === 'Active' ? 'success' :
                      patient.status === 'Critical' ? 'error' : 'default'
                    }
                  >
                    {patient.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Department Overview */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-gray-900">Department Overview</h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Cardiology', 'Neurology', 'Pediatrics', 'Emergency'].map((dept, index) => (
              <div key={dept} className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                <h3 className="font-medium text-gray-900">{dept}</h3>
                <p className="text-sm text-gray-600 mt-1">{Math.floor(Math.random() * 20) + 10} patients</p>
                <p className="text-sm text-gray-600">{Math.floor(Math.random() * 5) + 3} doctors</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}