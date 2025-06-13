import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Login from "../pages/Login"

import AnimatedAuthWrapper from "../components/AnimatedAuthWrapper"
import Signup from "../pages/Signup"
import ForgotPassword from "../pages/ForgotPassword"

export default function AppRoutes() {
  const location = useLocation()

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-700 p-4">
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/login"
            element={
              <AnimatedAuthWrapper keyId="/login">
                <Login />
              </AnimatedAuthWrapper>
            }
          />
            <Route
            path="/forgot-password"
            element={
              <AnimatedAuthWrapper keyId="/forgot-password">
                <ForgotPassword />
              </AnimatedAuthWrapper>
            }
          />
          <Route
            path="/signup"
            element={
              <AnimatedAuthWrapper keyId="/register">
                <Signup />
              </AnimatedAuthWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
