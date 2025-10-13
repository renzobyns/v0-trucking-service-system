import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Award } from "lucide-react"

export function ScheduleOverview() {
  const todaySchedule = [
    {
      time: "06:00 AM",
      employee: "Juan Santos",
      role: "Driver",
      assignment: "DEL-001 - Flash Express",
      status: "Active",
    },
    {
      time: "07:00 AM",
      employee: "Carlos Santos",
      role: "Driver",
      assignment: "LB-046 - Lipat Bahay",
      status: "Active",
    },
    {
      time: "08:00 AM",
      employee: "Pedro Reyes",
      role: "Driver",
      assignment: "DEL-002 - LBC",
      status: "Active",
    },
    {
      time: "09:00 AM",
      employee: "Rosa Cruz",
      role: "Driver",
      assignment: "LB-048 - Lipat Bahay",
      status: "Scheduled",
    },
  ]

  const topPerformers = [
    {
      name: "Maria Cruz",
      role: "Driver",
      rating: 4.9,
      completedJobs: 189,
      onTimeRate: "98%",
    },
    {
      name: "Carlos Santos",
      role: "Driver",
      rating: 4.9,
      completedJobs: 203,
      onTimeRate: "96%",
    },
    {
      name: "Juan Santos",
      role: "Driver",
      rating: 4.8,
      completedJobs: 245,
      onTimeRate: "94%",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Scheduled":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>Today's Schedule</span>
          </CardTitle>
          <CardDescription>Current and upcoming assignments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {todaySchedule.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-sm">{item.time}</span>
                  </div>
                  <div className="text-sm font-medium">{item.employee}</div>
                  <div className="text-xs text-muted-foreground">{item.assignment}</div>
                </div>
                <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-5 w-5" />
            <span>Top Performers</span>
          </CardTitle>
          <CardDescription>This month's best employees</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPerformers.map((performer, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium text-sm">{performer.name}</div>
                  <div className="text-xs text-muted-foreground">{performer.role}</div>
                  <div className="text-xs text-muted-foreground">{performer.completedJobs} jobs completed</div>
                </div>
                <div className="text-right space-y-1">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium">{performer.rating}</span>
                    <span className="text-yellow-500">★</span>
                  </div>
                  <div className="text-xs text-muted-foreground">{performer.onTimeRate} on-time</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <span>Team Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Drivers</span>
              <span className="font-semibold">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Helpers</span>
              <span className="font-semibold">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Currently Working</span>
              <span className="font-semibold">18</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Available</span>
              <span className="font-semibold">6</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Avg. Rating</span>
              <span className="font-semibold">4.7/5.0</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
