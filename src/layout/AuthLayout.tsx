import type { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gradient-start to-gradient-end px-4">
      <div className="max-w-md w-full">{children}</div>
    </div>
  )
}
