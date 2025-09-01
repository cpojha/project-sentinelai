// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { UserProvider } from "@/context/UserContext"

// Pages
import LoginPage from "@/pages/LoginPage"
import SignupPage from "@/pages/SignupPage"
import ForgotPasswordPage from "@/pages/ForgotPasswordPage"
import DashboardPage from "@/pages/DashboardPage"
import AIAssistantPage from "@/pages/AIAssistantPage"
import CampaignDetailsPage from "@/pages/CampaignDetailsPage"
import CampaignsArchivePage from "@/pages/CampaignsArchivePage"
import AnalyticsTrendsPage from "@/pages/AnalyticsTrendsPage"
import SettingsPage from "@/pages/SettingsPage"
import HelpPage from "@/pages/HelpPage"

// Minimal no-op boundary so the app never breaks if you don't have a custom one
function ErrorOverlay({ children }) {
  return <>{children}</>
}

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <ErrorOverlay>
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />

            {/* App routes */}
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/assistant" element={<AIAssistantPage />} />
            <Route path="/archive" element={<CampaignsArchivePage />} />
            <Route path="/analytics" element={<AnalyticsTrendsPage />} />
            <Route path="/campaigns/:id" element={<CampaignDetailsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/help" element={<HelpPage />} />

            {/* Redirects */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </ErrorOverlay>
      </BrowserRouter>
    </UserProvider>
  )
}
