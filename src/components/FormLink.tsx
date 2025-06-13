// src/components/FormLink.tsx
import { Link } from 'react-router-dom'

export default function FormLink({ text, to }: { text: string; to: string }) {
  return (
    <Link to={to} className="text-sm text-primary hover:underline text-center block mt-4">
      {text}
    </Link>
  )
}
