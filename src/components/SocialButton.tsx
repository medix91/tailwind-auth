// src/components/SocialButton.tsx
export default function SocialButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="w-full border border-gray-300 py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition-all">
      {icon}
      <span>{label}</span>
    </button>
  )
}
