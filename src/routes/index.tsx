import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import NotFound from "../pages/NotFound"


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
