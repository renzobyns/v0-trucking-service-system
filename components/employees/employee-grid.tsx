import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Phone, MapPin, Star, MoreHorizontal, User, Truck } from "lucide-react"

export function EmployeeGrid() {
  const employees = [
    {
      id: "EMP-001",
      name: "Juan Santos",
      role: "Driver",
      phone: "+63 917 123 4567",
      email: "juan.santos@boyonas.com",
      licenseNumber: "N01-12-345678",
      licenseExpiry: "Dec 2025",
      status: "On Duty",
      currentAssignment: "DEL-001 - Flash Express",
      truck: "ABC-1234",
      rating: 4.8,
      totalDeliveries: 245,
      yearsOfService: 3,
      emergencyContact: "Maria Santos - +63 918 987 6543",
    },
    {
      id: "EMP-002",
      name: "Maria Cruz",
      role: "Driver",
      phone: "+63 918 234 5678",
      email: "maria.cruz@boyonas.com",
      licenseNumber: "N01-23-456789",
      licenseExpiry: "Mar 2026",
      status: "Available",
      currentAssignment: "None",
      truck: "XYZ-5678",
      rating: 4.9,
      totalDeliveries: 189,
      yearsOfService: 2,
      emergencyContact: "Pedro Cruz - +63 919 876 5432",
    },
    {
      id: "EMP-003",
      name: "Pedro Reyes",
      role: "Driver",
      phone: "+63 919 345 6789",
      email: "pedro.reyes@boyonas.com",
      licenseNumber: "N01-34-567890",
      licenseExpiry: "Aug 2025",
      status: "On Duty",
      currentAssignment: "DEL-002 - LBC",
      truck: "DEF-9012",
      rating: 4.7,
      totalDeliveries: 312,
      yearsOfService: 4,
      emergencyContact: "Ana Reyes - +63 920 765 4321",
    },
    {
      id: "EMP-004",
      name: "Ana Garcia",
      role: "Driver",
      phone: "+63 920 456 7890",
      email: "ana.garcia@boyonas.com",
      licenseNumber: "N01-45-678901",
      licenseExpiry: "Jan 2026",
      status: "Off Duty",
      currentAssignment: "Truck in maintenance",
      truck: "GHI-3456",
      rating: 4.6,
      totalDeliveries: 156,
      yearsOfService: 2,
      emergencyContact: "Luis Garcia - +63 921 654 3210",
    },
    {
      id: "EMP-005",
      name: "Carlos Santos",
      role: "Driver",
      phone: "+63 921 567 8901",
      email: "carlos.santos@boyonas.com",
      licenseNumber: "N01-56-789012",
      licenseExpiry: "Nov 2025",
      status: "On Duty",
      currentAssignment: "LB-046 - Lipat Bahay",
      truck: "JKL-7890",
      rating: 4.9,
      totalDeliveries: 203,
      yearsOfService: 3,
      emergencyContact: "Rosa Santos - +63 922 543 2109",
    },
    {
      id: "EMP-006",
      name: "Pedro Cruz",
      role: "Helper",
      phone: "+63 922 678 9012",
      email: "pedro.cruz@boyonas.com",
      licenseNumber: "N/A",
      licenseExpiry: "N/A",
      status: "On Duty",
      currentAssignment: "DEL-001 - Flash Express",
      truck: "ABC-1234",
      rating: 4.5,
      totalDeliveries: 245,
      yearsOfService: 2,
      emergencyContact: "Carmen Cruz - +63 923 432 1098",
    },
    {
      id: "EMP-007",
      name: "Luis Santos",
      role: "Helper",
      phone: "+63 923 789 0123",
      email: "luis.santos@boyonas.com",
      licenseNumber: "N/A",
      licenseExpiry: "N/A",
      status: "On Duty",
      currentAssignment: "LB-046 - Lipat Bahay",
      truck: "JKL-7890",
      rating: 4.7,
      totalDeliveries: 203,
      yearsOfService: 1,
      emergencyContact: "Elena Santos - +63 924 321 0987",
    },
    {
      id: "EMP-008",
      name: "Miguel Cruz",
      role: "Helper",
      phone: "+63 924 890 1234",
      email: "miguel.cruz@boyonas.com",
      licenseNumber: "N/A",
      licenseExpiry: "N/A",
      status: "On Duty",
      currentAssignment: "LB-046 - Lipat Bahay",
      truck: "JKL-7890",
      rating: 4.4,
      totalDeliveries: 203,
      yearsOfService: 1,
      emergencyContact: "Sofia Cruz - +63 925 210 9876",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "On Duty":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Available":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Off Duty":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Driver":
        return "bg-primary/10 text-primary"
      case "Helper":
        return "bg-accent/10 text-accent"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "Driver":
        return <Truck className="h-4 w-4" />
      case "Helper":
        return <User className="h-4 w-4" />
      default:
        return <User className="h-4 w-4" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Employee Directory</CardTitle>
        <CardDescription>Manage employee information, assignments, and performance</CardDescription>

        {/* Search and Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search by name, ID, or phone..." className="pl-10" />
          </div>
          <Select>
            <SelectTrigger className="w-full sm:w-[150px]">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="driver">Drivers</SelectItem>
              <SelectItem value="helper">Helpers</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full sm:w-[150px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="duty">On Duty</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="off">Off Duty</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {employees.map((employee) => (
            <Card key={employee.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {employee.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{employee.name}</CardTitle>
                      <CardDescription>{employee.id}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getRoleColor(employee.role)}>
                      {getRoleIcon(employee.role)}
                      <span className="ml-1">{employee.role}</span>
                    </Badge>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Status and Assignment */}
                <div className="flex items-center justify-between">
                  <Badge className={getStatusColor(employee.status)}>{employee.status}</Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{employee.rating}</span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{employee.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="truncate">{employee.email}</span>
                  </div>
                </div>

                {/* Current Assignment */}
                <div className="text-sm">
                  <div className="font-medium">Current Assignment</div>
                  <div className="text-muted-foreground">{employee.currentAssignment}</div>
                  {employee.truck && employee.status === "On Duty" && (
                    <div className="text-muted-foreground">Vehicle: {employee.truck}</div>
                  )}
                </div>

                {/* License Info (for drivers) */}
                {employee.role === "Driver" && (
                  <div className="text-sm">
                    <div className="font-medium">License</div>
                    <div className="text-muted-foreground">
                      {employee.licenseNumber} • Expires: {employee.licenseExpiry}
                    </div>
                  </div>
                )}

                {/* Performance Stats */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium">Total Jobs</div>
                    <div className="text-muted-foreground">{employee.totalDeliveries}</div>
                  </div>
                  <div>
                    <div className="font-medium">Experience</div>
                    <div className="text-muted-foreground">{employee.yearsOfService} years</div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="text-xs text-muted-foreground">
                  <div className="font-medium">Emergency Contact</div>
                  <div>{employee.emergencyContact}</div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    View Profile
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    Assign Job
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
