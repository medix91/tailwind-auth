// src/components/Button.tsx
import type { ButtonHTMLAttributes } from 'react'

export default function Button({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-primary-dark transition-all"
    >
      {children}
    </button>
  )
}
