import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Truck, Users, Package, Clock } from "lucide-react"

export function OperationalMetrics() {
  const metrics = [
    {
      title: "Active Deliveries",
      value: "24",
      change: "+12%",
      trend: "up",
      icon: Package,
      color: "text-blue-600",
    },
    {
      title: "Trucks in Operation",
      value: "8/10",
      change: "80%",
      trend: "up",
      icon: Truck,
      color: "text-green-600",
    },
    {
      title: "Active Drivers",
      value: "12",
      change: "+2",
      trend: "up",
      icon: Users,
      color: "text-orange-600",
    },
    {
      title: "Avg Delivery Time",
      value: "2.4h",
      change: "-15min",
      trend: "down",
      icon: Clock,
      color: "text-purple-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
            <metric.icon className={`h-4 w-4 ${metric.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {metric.trend === "up" ? (
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 text-green-500 mr-1" />
              )}
              <span className="text-green-500">{metric.change}</span>
              <span className="ml-1">from yesterday</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
