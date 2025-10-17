"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus } from "lucide-react"

export function AddTruckDialog() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    plateNumber: "",
    model: "",
    capacity: "",
    year: "",
    status: "Okay to Use",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] New truck data:", formData)
    setFormData({ plateNumber: "", model: "", capacity: "", year: "", status: "Okay to Use" })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Truck
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Truck</DialogTitle>
          <DialogDescription>Enter the truck details to add it to the fleet</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Plate Number</label>
            <Input
              placeholder="ABC-1234"
              value={formData.plateNumber}
              onChange={(e) => setFormData({ ...formData, plateNumber: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Model</label>
            <Input
              placeholder="Isuzu Forward"
              value={formData.model}
              onChange={(e) => setFormData({ ...formData, model: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Capacity (kg)</label>
            <Input
              type="number"
              placeholder="5000"
              value={formData.capacity}
              onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Year</label>
            <Input
              type="number"
              placeholder="2024"
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Status</label>
            <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Okay to Use">Okay to Use</SelectItem>
                <SelectItem value="Not Okay to Use">Not Okay to Use</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">
            Add Truck
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
