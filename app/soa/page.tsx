"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, Download, Plus, Trash2 } from "lucide-react"
import Link from "next/link"

interface CompletedTrip {
  id: string
  date: string
  route: string
  plateNumber: string
  amount: number
  drNumber: string
}

const mockCompletedTrips: CompletedTrip[] = [
  {
    id: "1",
    date: "Jan 15, 2025",
    route: "Quezon City → Makati",
    plateNumber: "ABC-1234",
    amount: 2500,
    drNumber: "SPX-2025-0001",
  },
  {
    id: "2",
    date: "Jan 16, 2025",
    route: "Manila → Cavite",
    plateNumber: "DEF-9012",
    amount: 1800,
    drNumber: "SPX-2025-0002",
  },
  {
    id: "3",
    date: "Jan 17, 2025",
    route: "Pasig → Laguna",
    plateNumber: "ABC-1234",
    amount: 2200,
    drNumber: "SPX-2025-0003",
  },
  {
    id: "4",
    date: "Jan 14, 2025",
    route: "Makati → Quezon City",
    plateNumber: "XYZ-5678",
    amount: 8500,
    drNumber: "LP-2025-0001",
  },
  {
    id: "5",
    date: "Jan 18, 2025",
    route: "Taguig → Antipolo",
    plateNumber: "GHI-3456",
    amount: 12000,
    drNumber: "LP-2025-0002",
  },
]

export default function SoaPage() {
  const [serviceType, setServiceType] = useState<"spx" | "lipat-bahay" | null>(null)
  const [dateFrom, setDateFrom] = useState("")
  const [dateTo, setDateTo] = useState("")
  const [trips, setTrips] = useState<CompletedTrip[]>([])
  const [editingAmounts, setEditingAmounts] = useState<{ [key: string]: number }>({})
  const [soaStatus, setSoaStatus] = useState<{ [key: string]: "paid" | "not-paid" }>({})

  const handleServiceSelect = (service: "spx" | "lipat-bahay") => {
    setServiceType(service)
    setTrips([])
    setEditingAmounts({})
    setSoaStatus({})
  }

  const handleGenerateSOA = () => {
    if (!serviceType || !dateFrom || !dateTo) {
      alert("Please select service type and date range")
      return
    }

    // Filter trips based on service type
    const filteredTrips = mockCompletedTrips.filter((trip) => {
      if (serviceType === "spx") {
        return trip.drNumber.startsWith("SPX")
      } else {
        return trip.drNumber.startsWith("LP")
      }
    })

    setTrips(filteredTrips)
    filteredTrips.forEach((trip) => {
      setEditingAmounts((prev) => ({
        ...prev,
        [trip.id]: trip.amount,
      }))
      setSoaStatus((prev) => ({
        ...prev,
        [trip.id]: "not-paid",
      }))
    })
  }

  const handleAmountChange = (tripId: string, newAmount: number) => {
    setEditingAmounts((prev) => ({
      ...prev,
      [tripId]: newAmount,
    }))
  }

  const handleStatusChange = (tripId: string, status: "paid" | "not-paid") => {
    setSoaStatus((prev) => ({
      ...prev,
      [tripId]: status,
    }))
  }

  const handleGenerateDocument = () => {
    alert("SOA document generated successfully!")
  }

  const totalAmount = Object.values(editingAmounts).reduce((sum, amount) => sum + amount, 0)
  const paidAmount = trips
    .filter((trip) => soaStatus[trip.id] === "paid")
    .reduce((sum, trip) => sum + (editingAmounts[trip.id] || 0), 0)
  const unpaidAmount = totalAmount - paidAmount

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-foreground">SOA Generation</h1>
                <p className="text-sm text-muted-foreground">Generate Statement of Accounts for services</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 space-y-8">
        {!serviceType ? (
          // Step 1: Service Selection
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">Step 1: Select Service Type</h2>
              <p className="text-muted-foreground">Choose which service you want to generate SOA for</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                className="cursor-pointer hover:shadow-lg transition-all border-2 hover:border-primary/50"
                onClick={() => handleServiceSelect("spx")}
              >
                <CardHeader>
                  <CardTitle>Partnership Deliveries (SPX)</CardTitle>
                  <CardDescription>B2B logistics operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Generate SOA for Flash Express and partnership deliveries
                  </p>
                  <Button className="w-full">Select SPX</Button>
                </CardContent>
              </Card>

              <Card
                className="cursor-pointer hover:shadow-lg transition-all border-2 hover:border-accent/50"
                onClick={() => handleServiceSelect("lipat-bahay")}
              >
                <CardHeader>
                  <CardTitle>Lipat Bahay Services</CardTitle>
                  <CardDescription>Household moving & retail deliveries</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Generate SOA for household moving and retail delivery services
                  </p>
                  <Button className="w-full bg-accent hover:bg-accent/90">Select Lipat Bahay</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          // Step 2 & 3: Date Range and Trip Selection
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">
                  Step 2: Select Date Range - {serviceType === "spx" ? "SPX" : "Lipat Bahay"}
                </h2>
                <p className="text-muted-foreground">Choose the period for the SOA</p>
              </div>
              <Button variant="outline" onClick={() => setServiceType(null)}>
                Change Service
              </Button>
            </div>

            {/* Date Range Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Date Range</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">From Date</label>
                    <Input
                      type="month"
                      value={dateFrom}
                      onChange={(e) => setDateFrom(e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">To Date</label>
                    <Input type="month" value={dateTo} onChange={(e) => setDateTo(e.target.value)} className="mt-2" />
                  </div>
                </div>
                <Button onClick={handleGenerateSOA} className="w-full">
                  Generate SOA
                </Button>
              </CardContent>
            </Card>

            {/* Completed Trips Table */}
            {trips.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Step 3: Review and Edit Amounts</CardTitle>
                  <CardDescription>Adjust delivery amounts as needed</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>No.</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Route</TableHead>
                          <TableHead>Plate Number</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {trips.map((trip, index) => (
                          <TableRow key={trip.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{trip.date}</TableCell>
                            <TableCell>{trip.route}</TableCell>
                            <TableCell>{trip.plateNumber}</TableCell>
                            <TableCell>
                              <Input
                                type="number"
                                value={editingAmounts[trip.id] || 0}
                                onChange={(e) => handleAmountChange(trip.id, Number.parseFloat(e.target.value))}
                                className="w-24"
                              />
                            </TableCell>
                            <TableCell>
                              <Select
                                value={soaStatus[trip.id] || "not-paid"}
                                onValueChange={(value) => handleStatusChange(trip.id, value as "paid" | "not-paid")}
                              >
                                <SelectTrigger className="w-32">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="paid">Paid</SelectItem>
                                  <SelectItem value="not-paid">Not Yet Paid</SelectItem>
                                </SelectContent>
                              </Select>
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  {/* Summary */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-sm text-muted-foreground">Total Amount</div>
                        <div className="text-2xl font-bold">₱{totalAmount.toLocaleString()}</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-sm text-muted-foreground">Paid</div>
                        <div className="text-2xl font-bold text-green-600">₱{paidAmount.toLocaleString()}</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-sm text-muted-foreground">Not Yet Paid</div>
                        <div className="text-2xl font-bold text-red-600">₱{unpaidAmount.toLocaleString()}</div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button onClick={handleGenerateDocument} className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Generate SOA Document
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Manual Entry
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </main>
    </div>
  )
}
