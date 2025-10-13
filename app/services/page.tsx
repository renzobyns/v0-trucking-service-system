import { ServiceCards } from "@/components/services/service-cards"
import { ServiceStats } from "@/components/services/service-stats"
import { ServiceOverview } from "@/components/services/service-overview"

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Services</h1>
        <p className="text-muted-foreground mt-2">Manage your Partnership Deliveries and Lipat Bahay Services</p>
      </div>

      {/* Service Statistics */}
      <ServiceStats />

      {/* Main Service Cards */}
      <ServiceCards />

      {/* Service Overview */}
      <ServiceOverview />
    </div>
  )
}
