import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Send, Edit } from "lucide-react"

interface SoaPreviewProps {
  soaId: string | null
}

export function SoaPreview({ soaId }: SoaPreviewProps) {
  if (!soaId) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            SOA Preview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">Select an SOA to preview</div>
        </CardContent>
      </Card>
    )
  }

  // Mock SOA data
  const soaData = {
    id: "SOA-2024-001",
    client: "Flash Express",
    clientAddress: "123 Business Ave, Makati City",
    period: "January 2024",
    generatedDate: "2024-01-31",
    dueDate: "2024-02-15",
    status: "paid",
    items: [
      { description: "Metro Manila Deliveries", quantity: 25, rate: "₱450.00", amount: "₱11,250.00" },
      { description: "Provincial Deliveries", quantity: 15, rate: "₱650.00", amount: "₱9,750.00" },
      { description: "Express Deliveries", quantity: 5, rate: "₱850.00", amount: "₱4,250.00" },
    ],
    subtotal: "₱25,250.00",
    tax: "₱2,525.00",
    total: "₱27,775.00",
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            SOA Preview
          </span>
          <Badge className="bg-green-100 text-green-800">{soaData.status}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* SOA Header */}
        <div className="space-y-4">
          <div className="text-center border-b pb-4">
            <h2 className="text-xl font-bold">BOYONAS TRUCKING SERVICE</h2>
            <p className="text-sm text-muted-foreground">Statement of Account</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-medium">Bill To:</div>
              <div>{soaData.client}</div>
              <div className="text-muted-foreground">{soaData.clientAddress}</div>
            </div>
            <div className="text-right">
              <div>
                <span className="font-medium">SOA #:</span> {soaData.id}
              </div>
              <div>
                <span className="font-medium">Period:</span> {soaData.period}
              </div>
              <div>
                <span className="font-medium">Generated:</span> {soaData.generatedDate}
              </div>
              <div>
                <span className="font-medium">Due Date:</span> {soaData.dueDate}
              </div>
            </div>
          </div>
        </div>

        {/* SOA Items */}
        <div className="space-y-3">
          <div className="font-medium">Service Details:</div>
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-2">Description</th>
                  <th className="text-center p-2">Qty</th>
                  <th className="text-right p-2">Rate</th>
                  <th className="text-right p-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {soaData.items.map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-2">{item.description}</td>
                    <td className="text-center p-2">{item.quantity}</td>
                    <td className="text-right p-2">{item.rate}</td>
                    <td className="text-right p-2 font-medium">{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SOA Totals */}
        <div className="space-y-2 border-t pt-4">
          <div className="flex justify-between text-sm">
            <span>Subtotal:</span>
            <span>{soaData.subtotal}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Tax (10%):</span>
            <span>{soaData.tax}</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Total Amount:</span>
            <span>{soaData.total}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2 pt-4">
          <Button className="w-full">
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
          <Button variant="outline" className="w-full bg-transparent">
            <Send className="h-4 w-4 mr-2" />
            Send to Client
          </Button>
          <Button variant="outline" className="w-full bg-transparent">
            <Edit className="h-4 w-4 mr-2" />
            Edit SOA
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
