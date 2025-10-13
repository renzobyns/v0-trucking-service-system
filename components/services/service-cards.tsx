import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Package, Home, TrendingUp, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export function ServiceCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Partnership Deliveries Card */}
      <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:from-primary/20 transition-colors" />
        <CardHeader className="relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl">Partnership Deliveries</CardTitle>
                <CardDescription>B2B logistics with Flash Express, LBC & more</CardDescription>
              </div>
            </div>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              B2B
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">156</div>
              <div className="text-xs text-muted-foreground">Active Deliveries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">98%</div>
              <div className="text-xs text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">₱2.1M</div>
              <div className="text-xs text-muted-foreground">Monthly Revenue</div>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">Active Partners</p>
            <div className="flex items-center space-x-4">
              <div className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs font-medium border border-red-200">
                Flash Express
              </div>
              <div className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-xs font-medium border border-yellow-200">
                LBC Express
              </div>
              <div className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">
                J&T Express
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">Recent Activity</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>12 deliveries completed today</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="h-4 w-4 text-blue-500" />
                <span>8 deliveries in progress</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span>15% increase from last week</span>
              </div>
            </div>
          </div>

          <Link href="/partnership">
            <Button className="w-full group">
              Manage Partnership Deliveries
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Lipat Bahay Services Card */}
      <Card className="relative overflow-hidden border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-lg group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:from-accent/20 transition-colors" />
        <CardHeader className="relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Home className="h-6 w-6 text-accent" />
              </div>
              <div>
                <CardTitle className="text-xl">Lipat Bahay Services</CardTitle>
                <CardDescription>Household moving & retail delivery services</CardDescription>
              </div>
            </div>
            <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
              Retail
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">42</div>
              <div className="text-xs text-muted-foreground">Active Bookings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">95%</div>
              <div className="text-xs text-muted-foreground">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">₱850K</div>
              <div className="text-xs text-muted-foreground">Monthly Revenue</div>
            </div>
          </div>

          {/* Service Types */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">Service Categories</p>
            <div className="flex items-center space-x-4">
              <div className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-medium border border-orange-200">
                Small House
              </div>
              <div className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium border border-purple-200">
                Apartment
              </div>
              <div className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-200">
                Office Move
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">Recent Activity</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>3 moves completed today</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="h-4 w-4 text-blue-500" />
                <span>5 bookings scheduled</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span>8% increase from last week</span>
              </div>
            </div>
          </div>

          <Link href="/lipat-bahay">
            <Button className="w-full group bg-accent hover:bg-accent/90 text-accent-foreground">
              Manage Lipat Bahay Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
