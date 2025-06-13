// src/components/AuthCard.tsx
import type { ReactNode } from 'react'
import logo from "../assets/react.svg"

export default function AuthCard({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white shadow-md shadow-blue-100 border border-blue-100 rounded-2xl px-8 py-10 w-full transition-all duration-300">
      <img src={logo} alt="Logo" className="mx-auto w-16 mb-6" />
      {children}
    </div>
  )
}