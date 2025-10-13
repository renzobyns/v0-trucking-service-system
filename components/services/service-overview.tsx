import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export function ServiceOverview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Service Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Service Performance</CardTitle>
          <CardDescription>Monthly performance metrics for both services</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Partnership Deliveries</span>
              <span className="text-sm text-muted-foreground">156 active</span>
            </div>
            <Progress value={78} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Target: 200</span>
              <span>78% complete</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Lipat Bahay Services</span>
              <span className="text-sm text-muted-foreground">42 bookings</span>
            </div>
            <Progress value={84} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Target: 50</span>
              <span>84% complete</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Service Updates */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Updates</CardTitle>
          <CardDescription>Latest activities across all services</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <div className="flex-1">
              <p className="text-sm font-medium">New Flash Express partnership route added</p>
              <p className="text-xs text-muted-foreground">2 hours ago</p>
            </div>
            <Badge variant="secondary">Partnership</Badge>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <div className="flex-1">
              <p className="text-sm font-medium">Large office move completed in Makati</p>
              <p className="text-xs text-muted-foreground">4 hours ago</p>
            </div>
            <Badge variant="secondary" className="bg-accent/10 text-accent">
              Lipat Bahay
            </Badge>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <div className="flex-1">
              <p className="text-sm font-medium">Monthly service targets exceeded</p>
              <p className="text-xs text-muted-foreground">1 day ago</p>
            </div>
            <Badge variant="secondary" className="bg-green-50 text-green-700">
              Achievement
            </Badge>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <div className="flex-1">
              <p className="text-sm font-medium">New customer feedback system deployed</p>
              <p className="text-xs text-muted-foreground">2 days ago</p>
            </div>
            <Badge variant="secondary" className="bg-blue-50 text-blue-700">
              System
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
