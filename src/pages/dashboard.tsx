"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../components/user/Sidebar"

interface DashboardPageProps {
  onLogout: () => void
}

export default function DashboardPage({ onLogout }: DashboardPageProps) {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const user = JSON.parse(localStorage.getItem("user") || "{}")

  const handleLogout = () => {
    localStorage.removeItem("user")
    onLogout()
    navigate("/login")
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onNavigate={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden text-gray-600 hover:text-gray-900 text-2xl"
            >
              ☰
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Logout
          </button>
        </header>

        <main className="flex-1 overflow-auto p-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Welcome, {user.username}!</h2>
            <p className="text-gray-600 mt-2">
              Designation: <span className="font-semibold text-gray-800">{user.designation}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-teal-600">
              <h3 className="text-gray-600 font-semibold text-sm mb-2">Total Enquiries</h3>
              <p className="text-4xl font-bold text-teal-600">24</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-amber-500">
              <h3 className="text-gray-600 font-semibold text-sm mb-2">Pending</h3>
              <p className="text-4xl font-bold text-amber-500">8</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
              <h3 className="text-gray-600 font-semibold text-sm mb-2">Converted</h3>
              <p className="text-4xl font-bold text-green-500">16</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span>View all enquiries from the sidebar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span>Create new enquiries using the Enquiry menu</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span>Track your business progress with metrics</span>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}
