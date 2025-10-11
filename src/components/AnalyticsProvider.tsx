// src/components/AnalyticsProvider.tsx
'use client'

interface AnalyticsProviderProps {
  children: React.ReactNode
}

// Simplified provider - GA4 handles all analytics tracking
const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  return <>{children}</>
}

export default AnalyticsProvider
