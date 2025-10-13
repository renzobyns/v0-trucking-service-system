import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Clock, Phone } from "lucide-react"

export function LiveTracking() {
  const activeDeliveries = [
    {
      id: "DEL-001",
      driver: "Juan Santos",
      truck: "BOY-001",
      route: "Manila → Quezon City",
      status: "in-transit",
      progress: 65,
      eta: "2:30 PM",
      customer: "Flash Express Hub",
      type: "Partnership",
    },
    {
      id: "LB-045",
      driver: "Maria Cruz",
      truck: "BOY-003",
      route: "Makati → Pasig",
      status: "loading",
      progress: 25,
      eta: "4:15 PM",
      customer: "Rodriguez Family",
      type: "Lipat Bahay",
    },
    {
      id: "DEL-002",
      driver: "Pedro Reyes",
      truck: "BOY-005",
      route: "Taguig → Mandaluyong",
      status: "delivered",
      progress: 100,
      eta: "Completed",
      customer: "LBC Branch",
      type: "Partnership",
    },
    {
      id: "LB-046",
      driver: "Ana Garcia",
      truck: "BOY-007",
      route: "Paranaque → Las Pinas",
      status: "in-transit",
      progress: 80,
      eta: "3:45 PM",
      customer: "Dela Cruz Family",
      type: "Lipat Bahay",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in-transit":
        return "bg-blue-100 text-blue-800"
      case "loading":
        return "bg-yellow-100 text-yellow-800"
      case "delivered":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeColor = (type: string) => {
    return type === "Partnership" ? "bg-blue-100 text-blue-800" : "bg-orange-100 text-orange-800"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Navigation className="h-5 w-5" />
          Live Tracking
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activeDeliveries.map((delivery) => (
            <div key={delivery.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-semibold">{delivery.id}</div>
                    <div className="text-sm text-muted-foreground">{delivery.customer}</div>
                  </div>
                  <Badge className={getTypeColor(delivery.type)}>{delivery.type}</Badge>
                </div>
                <Badge className={getStatusColor(delivery.status)}>{delivery.status.replace("-", " ")}</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{delivery.route}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>ETA: {delivery.eta}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <span className="text-muted-foreground">Driver:</span> {delivery.driver} • {delivery.truck}
                </div>
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4 mr-1" />
                  Contact
                </Button>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{delivery.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${delivery.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
