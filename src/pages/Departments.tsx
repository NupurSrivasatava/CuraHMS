import { Building2, Users, UserCheck, Bed } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../components/UI/Card';
import { mockDepartments } from '../data/mockData';

export default function Departments() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Departments</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockDepartments.map((department) => (
          <Card key={department.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Bed Availability</div>
                  <div className="text-lg font-semibold">
                    {department.availableBeds}/{department.beds}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{department.name}</h3>
              <p className="text-sm text-gray-600 mb-4">Head: {department.head}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <UserCheck className="h-4 w-4 text-green-600 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">Doctors</div>
                    <div className="font-semibold">{department.doctors}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-blue-600 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">Patients</div>
                    <div className="font-semibold">{department.patients}</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Bed Occupancy</span>
                  <span className="text-sm font-medium">
                    {Math.round(((department.beds - department.availableBeds) / department.beds) * 100)}%
                  </span>
                </div>
                <div className="mt-2 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${((department.beds - department.availableBeds) / department.beds) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}