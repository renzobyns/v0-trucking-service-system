"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  ComposedChart,
} from "recharts"
import { TrendingUp, TrendingDown, DollarSign, Clock, MapPin, Fuel } from "lucide-react"
import { useState } from "react"

// Mock data for statistical analysis
const dailyVolumeData = [
  { date: "Jan 1", partnership: 12, lipatBahay: 8, total: 20 },
  { date: "Jan 2", partnership: 15, lipatBahay: 6, total: 21 },
  { date: "Jan 3", partnership: 18, lipatBahay: 10, total: 28 },
  { date: "Jan 4", partnership: 14, lipatBahay: 7, total: 21 },
  { date: "Jan 5", partnership: 20, lipatBahay: 12, total: 32 },
  { date: "Jan 6", partnership: 16, lipatBahay: 15, total: 31 },
  { date: "Jan 7", partnership: 10, lipatBahay: 9, total: 19 },
  { date: "Jan 8", partnership: 22, lipatBahay: 11, total: 33 },
  { date: "Jan 9", partnership: 19, lipatBahay: 13, total: 32 },
  { date: "Jan 10", partnership: 17, lipatBahay: 8, total: 25 },
]

const revenueData = [
  { date: "Jan 1", partnership: 45000, lipatBahay: 68000, total: 113000 },
  { date: "Jan 2", partnership: 52000, lipatBahay: 51000, total: 103000 },
  { date: "Jan 3", partnership: 48000, lipatBahay: 85000, total: 133000 },
  { date: "Jan 4", partnership: 41000, lipatBahay: 59500, total: 100500 },
  { date: "Jan 5", partnership: 58000, lipatBahay: 102000, total: 160000 },
  { date: "Jan 6", partnership: 46000, lipatBahay: 127500, total: 173500 },
  { date: "Jan 7", partnership: 35000, lipatBahay: 76500, total: 111500 },
  { date: "Jan 8", partnership: 61000, lipatBahay: 93500, total: 154500 },
  { date: "Jan 9", partnership: 53000, lipatBahay: 110500, total: 163500 },
  { date: "Jan 10", partnership: 49000, lipatBahay: 68000, total: 117000 },
]

const successRateData = [
  { week: "Week 1", partnership: 98, lipatBahay: 95, average: 96.5 },
  { week: "Week 2", partnership: 97, lipatBahay: 96, average: 96.5 },
  { week: "Week 3", partnership: 99, lipatBahay: 94, average: 96.5 },
  { week: "Week 4", partnership: 96, lipatBahay: 97, average: 96.5 },
]

const truckUtilizationData = [
  { truck: "ABC-123", utilization: 85, deliveries: 45, revenue: 125000 },
  { truck: "XYZ-456", utilization: 92, deliveries: 52, revenue: 145000 },
  { truck: "DEF-789", utilization: 78, deliveries: 38, revenue: 98000 },
  { truck: "GHI-012", utilization: 88, deliveries: 48, revenue: 132000 },
  { truck: "JKL-345", utilization: 75, deliveries: 35, revenue: 89000 },
  { truck: "MNO-678", utilization: 90, deliveries: 50, revenue: 138000 },
]

const peakHoursData = [
  { hour: "6AM", deliveries: 5, efficiency: 85 },
  { hour: "7AM", deliveries: 12, efficiency: 88 },
  { hour: "8AM", deliveries: 18, efficiency: 92 },
  { hour: "9AM", deliveries: 25, efficiency: 95 },
  { hour: "10AM", deliveries: 22, efficiency: 93 },
  { hour: "11AM", deliveries: 20, efficiency: 90 },
  { hour: "12PM", deliveries: 15, efficiency: 87 },
  { hour: "1PM", deliveries: 18, efficiency: 89 },
  { hour: "2PM", deliveries: 24, efficiency: 94 },
  { hour: "3PM", deliveries: 28, efficiency: 96 },
  { hour: "4PM", deliveries: 26, efficiency: 94 },
  { hour: "5PM", deliveries: 20, efficiency: 88 },
  { hour: "6PM", deliveries: 12, efficiency: 85 },
]

const deliveryTimeData = [
  { date: "Jan 1", avgTime: 2.5, partnership: 2.2, lipatBahay: 3.8 },
  { date: "Jan 2", avgTime: 2.3, partnership: 2.1, lipatBahay: 3.5 },
  { date: "Jan 3", avgTime: 2.7, partnership: 2.4, lipatBahay: 4.2 },
  { date: "Jan 4", avgTime: 2.4, partnership: 2.2, lipatBahay: 3.6 },
  { date: "Jan 5", avgTime: 2.6, partnership: 2.3, lipatBahay: 4.0 },
  { date: "Jan 6", avgTime: 2.8, partnership: 2.5, lipatBahay: 4.1 },
  { date: "Jan 7", avgTime: 2.2, partnership: 2.0, lipatBahay: 3.4 },
]

const geographicData = [
  { area: "Quezon City", deliveries: 45, revenue: 125000, density: "High" },
  { area: "Makati", deliveries: 38, revenue: 145000, density: "High" },
  { area: "Manila", deliveries: 42, revenue: 118000, density: "High" },
  { area: "Pasig", deliveries: 28, revenue: 89000, density: "Medium" },
  { area: "Taguig", deliveries: 32, revenue: 98000, density: "Medium" },
  { area: "Mandaluyong", deliveries: 25, revenue: 76000, density: "Medium" },
  { area: "Caloocan", deliveries: 22, revenue: 65000, density: "Low" },
  { area: "Marikina", deliveries: 18, revenue: 52000, density: "Low" },
]

const costBreakdownData = [
  { month: "Oct", fuel: 45000, maintenance: 25000, salary: 180000, other: 15000 },
  { month: "Nov", fuel: 48000, maintenance: 22000, salary: 185000, other: 18000 },
  { month: "Dec", fuel: 52000, maintenance: 28000, salary: 190000, other: 20000 },
  { month: "Jan", fuel: 49000, maintenance: 24000, salary: 195000, other: 17000 },
]

export function DeliveryAnalytics() {
  const [timeRange, setTimeRange] = useState("30d")

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-popover border border-border rounded-lg shadow-lg p-3">
          <p className="text-popover-foreground font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className="space-y-8">
      {/* Header with Time Range Selector */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Performance Analytics</h2>
          <p className="text-muted-foreground">Comprehensive statistical analysis of delivery operations</p>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">7 Days</SelectItem>
            <SelectItem value="30d">30 Days</SelectItem>
            <SelectItem value="90d">90 Days</SelectItem>
            <SelectItem value="1y">1 Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Delivery Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4 hrs</div>
            <p className="text-xs text-muted-foreground">
              <TrendingDown className="inline h-3 w-3 text-green-500" />
              <span className="text-green-600">-8%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fleet Utilization</CardTitle>
            <Fuel className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">84.5%</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 text-green-500" />
              <span className="text-green-600">+5%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue per Delivery</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₱4,850</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 text-green-500" />
              <span className="text-green-600">+12%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Coverage Areas</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8 Cities</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-blue-600">Metro Manila</span> coverage
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Daily Operations Graphs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Daily Delivery Volume</CardTitle>
            <CardDescription>Number of deliveries completed per day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={dailyVolumeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="partnership" fill="hsl(var(--chart-1))" name="Partnership" />
                <Bar dataKey="lipatBahay" fill="hsl(var(--chart-2))" name="Lipat Bahay" />
                <Line type="monotone" dataKey="total" stroke="hsl(var(--chart-3))" strokeWidth={2} name="Total" />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
            <CardDescription>Daily revenue by service type</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  content={<CustomTooltip />}
                  formatter={(value) => [`₱${Number(value).toLocaleString()}`, ""]}
                />
                <Area
                  type="monotone"
                  dataKey="partnership"
                  stackId="1"
                  stroke="hsl(var(--chart-1))"
                  fill="hsl(var(--chart-1))"
                  name="Partnership"
                />
                <Area
                  type="monotone"
                  dataKey="lipatBahay"
                  stackId="1"
                  stroke="hsl(var(--chart-2))"
                  fill="hsl(var(--chart-2))"
                  name="Lipat Bahay"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Fleet Performance Graphs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Truck Utilization</CardTitle>
            <CardDescription>Usage percentage by vehicle</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={truckUtilizationData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
                <YAxis dataKey="truck" type="category" width={80} stroke="hsl(var(--muted-foreground))" />
                <Tooltip content={<CustomTooltip />} formatter={(value) => [`${value}%`, "Utilization"]} />
                <Bar dataKey="utilization" fill="hsl(var(--chart-3))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Peak Hours Analysis</CardTitle>
            <CardDescription>Delivery volume and efficiency by hour</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={peakHoursData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
                <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" />
                <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" />
                <Tooltip content={<CustomTooltip />} />
                <Bar yAxisId="left" dataKey="deliveries" fill="hsl(var(--chart-1))" name="Deliveries" />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="efficiency"
                  stroke="hsl(var(--chart-4))"
                  strokeWidth={2}
                  name="Efficiency %"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Operational Efficiency Graphs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Average Delivery Time</CardTitle>
            <CardDescription>Completion time trends by service type (hours)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={deliveryTimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip formatter={(value) => [`${value} hrs`, ""]} />
                <Line
                  type="monotone"
                  dataKey="partnership"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={2}
                  name="Partnership"
                />
                <Line
                  type="monotone"
                  dataKey="lipatBahay"
                  stroke="hsl(var(--chart-2))"
                  strokeWidth={2}
                  name="Lipat Bahay"
                />
                <Line
                  type="monotone"
                  dataKey="avgTime"
                  stroke="hsl(var(--chart-3))"
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  name="Average"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Delivery Success Rate</CardTitle>
            <CardDescription>Weekly completion rates by service</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={successRateData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
                <YAxis domain={[90, 100]} stroke="hsl(var(--muted-foreground))" />
                <Tooltip formatter={(value) => [`${value}%`, ""]} />
                <Bar dataKey="partnership" fill="hsl(var(--chart-1))" name="Partnership" />
                <Bar dataKey="lipatBahay" fill="hsl(var(--chart-2))" name="Lipat Bahay" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Geographic and Financial Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Geographic Distribution</CardTitle>
            <CardDescription>Delivery density by coverage area</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {geographicData.map((area) => (
                <div key={area.area} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-chart-1" />
                    <span className="font-medium">{area.area}</span>
                    <Badge
                      variant={
                        area.density === "High" ? "default" : area.density === "Medium" ? "secondary" : "outline"
                      }
                    >
                      {area.density}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{area.deliveries} deliveries</div>
                    <div className="text-sm text-muted-foreground">₱{area.revenue.toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cost Breakdown Analysis</CardTitle>
            <CardDescription>Monthly operational costs by category</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={costBreakdownData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip formatter={(value) => [`₱${Number(value).toLocaleString()}`, ""]} />
                <Area
                  type="monotone"
                  dataKey="salary"
                  stackId="1"
                  stroke="hsl(var(--chart-1))"
                  fill="hsl(var(--chart-1))"
                  name="Salary"
                />
                <Area
                  type="monotone"
                  dataKey="fuel"
                  stackId="1"
                  stroke="hsl(var(--chart-2))"
                  fill="hsl(var(--chart-2))"
                  name="Fuel"
                />
                <Area
                  type="monotone"
                  dataKey="maintenance"
                  stackId="1"
                  stroke="hsl(var(--chart-3))"
                  fill="hsl(var(--chart-3))"
                  name="Maintenance"
                />
                <Area
                  type="monotone"
                  dataKey="other"
                  stackId="1"
                  stroke="hsl(var(--chart-4))"
                  fill="hsl(var(--chart-4))"
                  name="Other"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
