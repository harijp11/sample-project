"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "./pages/login"
import DashboardPage from "./pages/dashboard"
import EnquiryPage from "./pages/enquiryPage"

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("user"))

  const handleLogin = (username: string, designation: string) => {
    localStorage.setItem("user", JSON.stringify({ username, designation }))
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    setIsAuthenticated(false)
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage onLogin={handleLogin} />}
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <DashboardPage onLogout={handleLogout} /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/enquiry"
          element={isAuthenticated ? <EnquiryPage onLogout={handleLogout} /> : <Navigate to="/login" replace />}
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  )
}
