import { FaGoogle, FaGithub, FaFacebookF } from 'react-icons/fa'

const buttons = [
  {
    icon: <FaGoogle />,
    color: 'bg-red-500 hover:bg-red-600',
    label: 'Google'
  },
  {
    icon: <FaGithub />,
    color: 'bg-gray-800 hover:bg-gray-900',
    label: 'GitHub'
  },
  {
    icon: <FaFacebookF />,
    color: 'bg-blue-600 hover:bg-blue-700',
    label: 'Facebook'
  }
]

export default function SocialButtons() {
  return (
    <div className="flex justify-center gap-3 mt-6">
      {buttons.map(({ icon, color, label }) => (
        <button
          key={label}
          title={`Continuer avec ${label}`}
          className={`text-white text-lg w-10 h-10 flex items-center justify-center rounded-md shadow-sm transition-all ${color}`}
        >
          {icon}
        </button>
      ))}
    </div>
  )
}
