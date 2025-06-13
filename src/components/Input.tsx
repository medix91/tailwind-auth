// src/components/Input.tsx
import  type { InputHTMLAttributes } from 'react'

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary transition-all"
    />
  )
}
