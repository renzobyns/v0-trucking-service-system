"use client"

import type React from "react"

import { useSettings } from "@/contexts/settings-context"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { HorizontalNavigation } from "@/components/horizontal-navigation"
import { cn } from "@/lib/utils"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { navigationStyle } = useSettings()

  if (navigationStyle === "horizontal") {
    return (
      <div className="min-h-screen bg-background">
        <HorizontalNavigation />
        <main className="container mx-auto px-6 py-8">{children}</main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <SidebarNavigation />
      <main className={cn("transition-all duration-300 md:ml-64", "min-h-screen p-6")}>{children}</main>
    </div>
  )
}
