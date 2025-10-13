"use client"

import { useState } from "react"
import { SoaHeader } from "@/components/soa/soa-header"
import { SoaFilters } from "@/components/soa/soa-filters"
import { SoaList } from "@/components/soa/soa-list"
import { SoaPreview } from "@/components/soa/soa-preview"

export default function SoaPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("current-month")
  const [selectedClient, setSelectedClient] = useState("all")
  const [selectedService, setSelectedService] = useState("all")
  const [previewSoa, setPreviewSoa] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <SoaHeader />

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <SoaFilters
              selectedPeriod={selectedPeriod}
              setSelectedPeriod={setSelectedPeriod}
              selectedClient={selectedClient}
              setSelectedClient={setSelectedClient}
              selectedService={selectedService}
              setSelectedService={setSelectedService}
            />
            <SoaList
              filters={{
                period: selectedPeriod,
                client: selectedClient,
                service: selectedService,
              }}
              onPreview={setPreviewSoa}
            />
          </div>
          <div>
            <SoaPreview soaId={previewSoa} />
          </div>
        </div>
      </main>
    </div>
  )
}
