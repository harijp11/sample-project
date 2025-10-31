"use client"

import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../components/user/Sidebar"

interface EnquiryPageProps {
  onLogout: () => void
}

export default function EnquiryPage({ onLogout }: EnquiryPageProps) {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [formData, setFormData] = useState({
    mobile: "",
    code: "167",
    businessType: "",
    name: "",
    district: "",
    details: "",
    date: "02/12/2004",
    nextDate: "31/10/2025",
    status: "enquiry",
    followupDate: "30/10/2025",
    nextFollowupDate: "30/10/2025",
    duration: "0",
    hours: "0",
    amount: "0",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      status: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.details) {
      alert("Please fill in the Details field")
      return
    }
    console.log("Enquiry submitted:", formData)
    alert("Enquiry submitted successfully!")
    setFormData({
      mobile: "",
      code: "167",
      businessType: "",
      name: "",
      district: "",
      details: "",
      date: "02/12/2004",
      nextDate: "31/10/2025",
      status: "enquiry",
      followupDate: "30/10/2025",
      nextFollowupDate: "30/10/2025",
      duration: "0",
      hours: "0",
      amount: "0",
    })
  }

  const handleCancel = () => {
    navigate("/dashboard")
  }

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
            <h1 className="text-2xl font-bold text-gray-800">Enquiry Form</h1>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Logout
          </button>
        </header>

        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Mobile and Code Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter mobile number"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Code</label>
                  <input
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
                <input
                  type="text"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  placeholder="Enter business type"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter name"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">District</label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  placeholder="Enter district"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder="Enter details"
                  rows={4}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition resize-none"
                ></textarea>
              </div>

              {/* Date Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Next Date</label>
                  <input
                    type="date"
                    name="nextDate"
                    value={formData.nextDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  />
                </div>
              </div>

              {/* Status Radio Buttons */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Status</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { value: "enquiry", label: "Enquiry" },
                    { value: "interested", label: "Interested" },
                    { value: "workorder", label: "Work Order" },
                    { value: "cancelled", label: "Cancelled" },
                    { value: "quote", label: "Quote" },
                    { value: "workrun", label: "Work Run" },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="status"
                        value={option.value}
                        checked={formData.status === option.value}
                        onChange={() => handleRadioChange(option.value)}
                        className="w-4 h-4 text-teal-600 cursor-pointer"
                      />
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Follow-up Dates Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Follow-up Date</label>
                  <input
                    type="date"
                    name="followupDate"
                    value={formData.followupDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Next Follow-up Date</label>
                  <input
                    type="date"
                    name="nextFollowupDate"
                    value={formData.nextFollowupDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  />
                </div>
              </div>

              {/* Duration and Hours Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <input
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Total Hours</label>
                  <input
                    type="number"
                    name="hours"
                    value={formData.hours}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  />
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex gap-4 pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-lg transition"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}
