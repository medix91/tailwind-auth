import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/react.svg'
import { useLocation } from "react-router-dom"

type Props = {
  children: ReactNode
}

export default function AuthCard({ children }: Props) {
  const location = useLocation()
  const isRegister = location.pathname === "/register"

  return (
    <motion.div
      className="bg-white/80 backdrop-blur-xl shadow-2xl border border-white/30 rounded-2xl px-8 py-10 w-full max-w-md transition-all duration-300"
      key={location.pathname}
      initial={{ rotateY: isRegister ? -180 : 180 }}
      animate={{ rotateY: 0 }}
      exit={{ rotateY: isRegister ? 180 : -180 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{
        backfaceVisibility: "hidden",
        transformStyle: "preserve-3d",
      }}
    >
      <img src={logo} alt="Logo" className="mx-auto w-16 mb-6" />
      {children}
    </motion.div>
  )
}
