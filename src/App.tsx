
import { AnimatePresence } from "framer-motion"
import AppRoutes from "./routes"

export default function App() {
 

  return (
    <AnimatePresence mode="wait" initial={false}>
      <AppRoutes />
    </AnimatePresence>
  )
}
