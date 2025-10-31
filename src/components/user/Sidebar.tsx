"use client"

import { useState } from "react"
import { useNavigate ,useLocation} from "react-router-dom"

interface SidebarProps {
  isOpen: boolean
  onNavigate: () => void
}

export default function Sidebar({ isOpen, onNavigate }: SidebarProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [enquiriesOpen, setEnquiriesOpen] = useState(false)

  const handleDashboardClick = () => {
    navigate("/dashboard")
    onNavigate()
  }

  const handleEnquiryClick = () => {
    navigate("/enquiry")
    onNavigate()
  }

  const toggleEnquiries = () => {
    setEnquiriesOpen(!enquiriesOpen)
  }

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-0"
      } bg-gray-900 text-white transition-all duration-300 overflow-hidden flex flex-col fixed md:relative h-screen z-50`}
    >
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-xl font-bold">Menu</h2>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <div>
          <button
            onClick={handleDashboardClick}
            className={`w-full text-left px-4 py-3 rounded-lg transition ${
              location.pathname === "/dashboard"
                ? "bg-teal-600 text-white font-semibold"
                : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            📊 Dashboard
          </button>
        </div>

        <div>
          <button
            onClick={toggleEnquiries}
            className={`w-full text-left px-4 py-3 rounded-lg transition flex items-center justify-between ${
              enquiriesOpen ? "bg-gray-800" : "hover:bg-gray-800"
            }`}
          >
            <span className="text-gray-300">📋 Enquiries</span>
            <span className={`transition-transform ${enquiriesOpen ? "rotate-180" : ""}`}>▼</span>
          </button>

          {enquiriesOpen && (
            <div className="pl-4 mt-2 space-y-2 border-l border-gray-700">
              <button
                onClick={handleEnquiryClick}
                className={`w-full text-left px-4 py-2.5 rounded-lg transition ${
                  location.pathname === "/enquiry"
                    ? "bg-teal-600 text-white font-semibold"
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
                }`}
              >
                ➕ New Enquiry
              </button>
              <button className="w-full text-left px-4 py-2.5 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-gray-800 transition">
                👁️ View All
              </button>
              <button className="w-full text-left px-4 py-2.5 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-gray-800 transition">
                📈 Reports
              </button>
            </div>
          )}
        </div>
      </nav>
    </aside>
  )
}
