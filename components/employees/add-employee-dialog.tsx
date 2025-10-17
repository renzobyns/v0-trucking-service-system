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

export function AddEmployeeDialog() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    position: "Driver",
    employeeCode: "",
    contactNumber: "",
    licenseInfo: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] New employee data:", formData)
    setFormData({
      fullName: "",
      position: "Driver",
      employeeCode: "",
      contactNumber: "",
      licenseInfo: "",
      emergencyContactName: "",
      emergencyContactNumber: "",
    })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Employee
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Employee</DialogTitle>
          <DialogDescription>Enter the employee details to add them to the system</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <Input
              placeholder="Juan Dela Cruz"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Position</label>
            <Select value={formData.position} onValueChange={(value) => setFormData({ ...formData, position: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Driver">Driver</SelectItem>
                <SelectItem value="Helper">Helper</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium">Employee Code</label>
            <Input
              placeholder="DRV-001"
              value={formData.employeeCode}
              onChange={(e) => setFormData({ ...formData, employeeCode: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Contact Number</label>
            <Input
              placeholder="09123456789"
              value={formData.contactNumber}
              onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
              required
            />
          </div>
          {formData.position === "Driver" && (
            <div>
              <label className="text-sm font-medium">License Info</label>
              <Input
                placeholder="License No. D123456"
                value={formData.licenseInfo}
                onChange={(e) => setFormData({ ...formData, licenseInfo: e.target.value })}
              />
            </div>
          )}
          <div>
            <label className="text-sm font-medium">Emergency Contact Name</label>
            <Input
              placeholder="Maria Dela Cruz"
              value={formData.emergencyContactName}
              onChange={(e) => setFormData({ ...formData, emergencyContactName: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Emergency Contact Number</label>
            <Input
              placeholder="09123456789"
              value={formData.emergencyContactNumber}
              onChange={(e) => setFormData({ ...formData, emergencyContactNumber: e.target.value })}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Add Employee
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
