// src/components/AnimatedAuthWrapper.tsx
import { motion } from "framer-motion"
import type { ReactNode } from "react"

export default function AnimatedAuthWrapper({ children, keyId }: { children: ReactNode; keyId: string }) {
  return (
    <motion.div
      key={keyId}
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      exit={{ rotateY: -90, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full max-w-md rounded-2xl"
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </motion.div>
  )
}
