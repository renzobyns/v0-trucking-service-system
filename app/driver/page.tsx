"use client"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import {
  getEmployeeByUserId,
  getPendingAssignments,
  getCurrentAssignments,
  getCompletedAssignments,
  getBookingWithAssignment,
  getLipatBahayBookingWithAssignment,
} from "@/lib/db-utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle, AlertCircle } from "lucide-react"

export default function DriverPortal() {
  const { user } = useAuth()
  const router = useRouter()
  const [employee, setEmployee] = useState<any>(null)
  const [pending, setPending] = useState<any[]>([])
  const [current, setCurrent] = useState<any[]>([])
  const [history, setHistory] = useState<any[]>([])

  useEffect(() => {
    if (!user) {
      router.push("/login")
      return
    }

    const emp = getEmployeeByUserId(user.userId)
    if (!emp) {
      router.push("/login")
      return
    }

    setEmployee(emp)

    // Get assignments
    const pendingAssignments = getPendingAssignments(emp.employeeId)
    const currentAssignments = getCurrentAssignments(emp.employeeId)
    const completedAssignments = getCompletedAssignments(emp.employeeId)

    setPending(pendingAssignments)
    setCurrent(currentAssignments)
    setHistory(completedAssignments)
  }, [user, router])

  if (!employee) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="space-y-8">
      {/* Driver Header */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6 rounded-lg">
        <h1 className="text-3xl font-bold">{employee.fullName}</h1>
        <p className="text-primary-foreground/80">
          {employee.position} - {employee.employeeCode}
        </p>
      </div>

      {/* Bookings Tabs */}
      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending">Pending ({pending.length})</TabsTrigger>
          <TabsTrigger value="current">Current ({current.length})</TabsTrigger>
          <TabsTrigger value="history">History ({history.length})</TabsTrigger>
        </TabsList>

        {/* Pending Bookings */}
        <TabsContent value="pending" className="space-y-4">
          {pending.length === 0 ? (
            <Card>
              <CardContent className="pt-6 text-center text-muted-foreground">No pending bookings</CardContent>
            </Card>
          ) : (
            pending.map((assignment) => (
              <BookingCard key={assignment.assignmentId} assignment={assignment} type="pending" />
            ))
          )}
        </TabsContent>

        {/* Current Bookings */}
        <TabsContent value="current" className="space-y-4">
          {current.length === 0 ? (
            <Card>
              <CardContent className="pt-6 text-center text-muted-foreground">No current bookings</CardContent>
            </Card>
          ) : (
            current.map((assignment) => (
              <BookingCard key={assignment.assignmentId} assignment={assignment} type="current" />
            ))
          )}
        </TabsContent>

        {/* History */}
        <TabsContent value="history" className="space-y-4">
          {history.length === 0 ? (
            <Card>
              <CardContent className="pt-6 text-center text-muted-foreground">No completed deliveries</CardContent>
            </Card>
          ) : (
            history.map((assignment) => (
              <BookingCard key={assignment.assignmentId} assignment={assignment} type="history" />
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function BookingCard({ assignment, type }: { assignment: any; type: string }) {
  const bookingInfo =
    getBookingWithAssignment(assignment.assignmentId) || getLipatBahayBookingWithAssignment(assignment.assignmentId)

  if (!bookingInfo) return null

  const { booking, truck, helper } = bookingInfo
  const isPartnership = "drNumber" in booking
  const drNumber = isPartnership ? booking.drNumber : `LP-${booking.bookingId}`

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Pending":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />
      case "Completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      default:
        return <Clock className="h-4 w-4 text-blue-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "OTW to SOC":
      case "OTW to Pickup":
        return "bg-blue-100 text-blue-800"
      case "Loading":
        return "bg-purple-100 text-purple-800"
      case "OTW to Destination":
        return "bg-indigo-100 text-indigo-800"
      case "Unloading":
        return "bg-orange-100 text-orange-800"
      case "Completed":
        return "bg-green-100 text-green-800"
      case "Incomplete":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              {getStatusIcon(assignment.currentStatus)}
              {drNumber}
            </CardTitle>
            <CardDescription>{isPartnership ? booking.partnerName : booking.customerName}</CardDescription>
          </div>
          <Badge className={getStatusColor(assignment.currentStatus)}>{assignment.currentStatus}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Route</p>
            <p className="font-medium">
              {isPartnership
                ? `${booking.routeFrom} → ${booking.routeTo}`
                : `${booking.fromAddress} → ${booking.toAddress}`}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Truck</p>
            <p className="font-medium">{truck?.plateNumber}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Weight</p>
            <p className="font-medium">{booking.estimatedWeight} kg</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Helper</p>
            <p className="font-medium">{helper?.fullName || "None"}</p>
          </div>
        </div>
        {assignment.remarks && (
          <div>
            <p className="text-sm text-muted-foreground">Remarks</p>
            <p className="font-medium">{assignment.remarks}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
