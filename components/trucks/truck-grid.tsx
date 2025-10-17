import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Truck, User, MoreHorizontal } from "lucide-react"

export function TruckGrid() {
  const trucks = [
    {
      plateNumber: "ABC-1234",
      model: "Isuzu Forward",
      capacity: "6 tons",
      year: "2020",
      deliveryStatus: "OTW to Destination",
      truckStatus: "Okay to Use",
      assignedDriver: "Juan Santos",
      route: "Pasig → Laguna",
      isOnDelivery: true,
    },
    {
      plateNumber: "XYZ-5678",
      model: "Mitsubishi Canter",
      capacity: "4 tons",
      year: "2019",
      deliveryStatus: null,
      truckStatus: "Okay to Use",
      assignedDriver: "Maria Cruz",
      route: "N/A",
      isOnDelivery: false,
    },
    {
      plateNumber: "DEF-9012",
      model: "Isuzu Elf",
      capacity: "3 tons",
      year: "2021",
      deliveryStatus: "Loading",
      truckStatus: "Okay to Use",
      assignedDriver: "Pedro Reyes",
      route: "Manila → Cavite",
      isOnDelivery: true,
    },
    {
      plateNumber: "GHI-3456",
      model: "Hyundai Mighty",
      capacity: "5 tons",
      year: "2018",
      deliveryStatus: null,
      truckStatus: "Not Okay to Use",
      assignedDriver: "Ana Garcia",
      route: "N/A",
      isOnDelivery: false,
    },
    {
      plateNumber: "JKL-7890",
      model: "Isuzu Forward",
      capacity: "6 tons",
      year: "2020",
      deliveryStatus: "Unloading",
      truckStatus: "Okay to Use",
      assignedDriver: "Carlos Santos",
      route: "Quezon City → Makati",
      isOnDelivery: true,
    },
    {
      plateNumber: "MNO-2468",
      model: "Mitsubishi Fuso",
      capacity: "4 tons",
      year: "2019",
      deliveryStatus: "Completed",
      truckStatus: "Needs Document Renewal",
      assignedDriver: "Rosa Cruz",
      route: "Taguig → Antipolo",
      isOnDelivery: true,
    },
  ]

  const getDeliveryStatusColor = (status: string) => {
    switch (status) {
      case "OTW to SOC":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Loading":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "OTW to Destination":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "Unloading":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Incomplete":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTruckStatusColor = (status: string) => {
    switch (status) {
      case "Okay to Use":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Not Okay to Use":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "Needs Document Renewal":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fleet Overview</CardTitle>
        <CardDescription>Monitor all trucks and their operational status</CardDescription>
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
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {truck.isOnDelivery && (
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-muted-foreground">Delivery Status</div>
                    <Badge className={getDeliveryStatusColor(truck.deliveryStatus)}>{truck.deliveryStatus}</Badge>
                  </div>
                )}

                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground">Truck Status</div>
                  <Badge className={getTruckStatusColor(truck.truckStatus)}>{truck.truckStatus}</Badge>
                </div>

                {/* Driver and Route Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Driver</div>
                      <div className="text-muted-foreground">{truck.assignedDriver}</div>
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">Route</div>
                    <div className="text-muted-foreground">{truck.route}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    View Details
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
