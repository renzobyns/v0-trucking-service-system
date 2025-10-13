import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Truck, MapPin, User, Calendar, MoreHorizontal, Fuel, Gauge } from "lucide-react"

export function TruckGrid() {
  const trucks = [
    {
      plateNumber: "ABC-1234",
      model: "Isuzu Forward",
      capacity: "6 tons",
      year: "2020",
      status: "Active",
      currentLocation: "Laguna",
      assignedDriver: "Juan Santos",
      currentJob: "DEL-001 - Flash Express",
      mileage: "125,450 km",
      fuelLevel: 75,
      nextMaintenance: "Jan 25, 2024",
      maintenanceDue: 15,
      lastService: "Dec 15, 2023",
    },
    {
      plateNumber: "XYZ-5678",
      model: "Mitsubishi Canter",
      capacity: "4 tons",
      year: "2019",
      status: "Available",
      currentLocation: "Depot",
      assignedDriver: "Maria Cruz",
      currentJob: "None",
      mileage: "98,230 km",
      fuelLevel: 90,
      nextMaintenance: "Feb 10, 2024",
      maintenanceDue: 31,
      lastService: "Nov 20, 2023",
    },
    {
      plateNumber: "DEF-9012",
      model: "Isuzu Elf",
      capacity: "3 tons",
      year: "2021",
      status: "Active",
      currentLocation: "Cavite",
      assignedDriver: "Pedro Reyes",
      currentJob: "DEL-002 - LBC",
      mileage: "67,890 km",
      fuelLevel: 45,
      nextMaintenance: "Jan 30, 2024",
      maintenanceDue: 20,
      lastService: "Dec 30, 2023",
    },
    {
      plateNumber: "GHI-3456",
      model: "Hyundai Mighty",
      capacity: "5 tons",
      year: "2018",
      status: "Maintenance",
      currentLocation: "Workshop",
      assignedDriver: "Ana Garcia",
      currentJob: "Under Service",
      mileage: "156,780 km",
      fuelLevel: 20,
      nextMaintenance: "In Progress",
      maintenanceDue: 0,
      lastService: "Jan 10, 2024",
    },
    {
      plateNumber: "JKL-7890",
      model: "Isuzu Forward",
      capacity: "6 tons",
      year: "2020",
      status: "Active",
      currentLocation: "Manila",
      assignedDriver: "Carlos Santos",
      currentJob: "LB-046 - Lipat Bahay",
      mileage: "89,340 km",
      fuelLevel: 85,
      nextMaintenance: "Feb 15, 2024",
      maintenanceDue: 36,
      lastService: "Dec 20, 2023",
    },
    {
      plateNumber: "MNO-2468",
      model: "Mitsubishi Fuso",
      capacity: "4 tons",
      year: "2019",
      status: "Active",
      currentLocation: "Quezon City",
      assignedDriver: "Rosa Cruz",
      currentJob: "LB-048 - Lipat Bahay",
      mileage: "112,560 km",
      fuelLevel: 60,
      nextMaintenance: "Jan 28, 2024",
      maintenanceDue: 18,
      lastService: "Dec 28, 2023",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Available":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Maintenance":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getFuelColor = (level: number) => {
    if (level > 50) return "text-green-600"
    if (level > 25) return "text-yellow-600"
    return "text-red-600"
  }

  const getMaintenanceUrgency = (days: number) => {
    if (days <= 7) return "text-red-600"
    if (days <= 14) return "text-yellow-600"
    return "text-green-600"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fleet Overview</CardTitle>
        <CardDescription>Monitor all trucks, their status, and assignments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {trucks.map((truck) => (
            <Card key={truck.plateNumber} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{truck.plateNumber}</CardTitle>
                      <CardDescription>
                        {truck.model} • {truck.capacity} • {truck.year}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(truck.status)}>{truck.status}</Badge>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Location and Assignment */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-muted-foreground">{truck.currentLocation}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Driver</div>
                      <div className="text-muted-foreground">{truck.assignedDriver}</div>
                    </div>
                  </div>
                </div>

                {/* Current Job */}
                <div className="text-sm">
                  <div className="font-medium">Current Assignment</div>
                  <div className="text-muted-foreground">{truck.currentJob}</div>
                </div>

                {/* Fuel Level */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Fuel className="h-4 w-4 text-muted-foreground" />
                      <span>Fuel Level</span>
                    </div>
                    <span className={`font-medium ${getFuelColor(truck.fuelLevel)}`}>{truck.fuelLevel}%</span>
                  </div>
                  <Progress value={truck.fuelLevel} className="h-2" />
                </div>

                {/* Maintenance Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Gauge className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Mileage</div>
                      <div className="text-muted-foreground">{truck.mileage}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Next Service</div>
                      <div className={`${getMaintenanceUrgency(truck.maintenanceDue)}`}>
                        {truck.status === "Maintenance" ? "In Progress" : `${truck.maintenanceDue} days`}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    Schedule Service
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
