import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserCheck, Clock, TrendingUp } from "lucide-react"

export function EmployeeStats() {
  const stats = [
    {
      title: "Total Employees",
      value: "24",
      subtitle: "Active workforce",
      icon: Users,
      color: "text-chart-1",
    },
    {
      title: "On Duty",
      value: "18",
      subtitle: "Currently working",
      icon: UserCheck,
      color: "text-green-600",
    },
    {
      title: "Avg. Hours/Week",
      value: "48",
      subtitle: "Per employee",
      icon: Clock,
      color: "text-chart-3",
    },
    {
      title: "Performance",
      value: "92%",
      subtitle: "Overall rating",
      icon: TrendingUp,
      color: "text-chart-4",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{stat.subtitle}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
