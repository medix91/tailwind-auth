// src/components/AuthCard.tsx
import type { ReactNode } from 'react'

export default function AuthCard({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 w-full">
      {children}
    </div>
  )
}
