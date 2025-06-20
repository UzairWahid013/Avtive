"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8f7f5] to-[#f0f9f8] flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full mx-auto text-center">
        {/* 404 Illustration */}
        <div className="mb-8 relative">
          <div className="text-[180px] md:text-[220px] font-bold text-[#4a9b94]/10 leading-none select-none">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <NotFoundIllustration />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#4a9b94] mb-4">Page Not Found</h1>

        {/* Description */}
        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
          The page you are looking for does not exist or has been moved. Do not worry, you can find your way back to our
          amazing content.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="outline" className="flex items-center gap-2" onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>

          <Link href="/">
            <Button className="bg-[#4a9b94] hover:bg-[#3d8a84] text-white flex items-center gap-2">
              <Home className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}

function NotFoundIllustration() {
  return (
    <div className="relative w-64 h-64">
      {/* Character looking confused */}
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto"
      >
        {/* Head with confused expression */}
        <circle cx="100" cy="70" r="40" fill="#FFD8C9" />
        <circle cx="85" cy="60" r="5" fill="#333" />
        <circle cx="115" cy="60" r="5" fill="#333" />
        <path d="M90 85 Q100 80 110 85" stroke="#333" strokeWidth="2" />

        {/* Question mark */}
        <path
          d="M130 40 Q150 30 140 50 Q130 70 130 75 L130 80"
          stroke="#e97670"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <circle cx="130" cy="95" r="4" fill="#e97670" />

        {/* Confused lines */}
        <path d="M60 40 L70 50" stroke="#4a9b94" strokeWidth="3" strokeLinecap="round" />
        <path d="M50 60 L60 65" stroke="#4a9b94" strokeWidth="3" strokeLinecap="round" />
        <path d="M150 60 L140 70" stroke="#4a9b94" strokeWidth="3" strokeLinecap="round" />

        {/* Body */}
        <path d="M70 110 Q100 130 130 110 L120 160 Q100 170 80 160 Z" fill="#6B8FF8" />

        {/* Arms */}
        <path d="M70 120 Q50 130 40 120" stroke="#FFD8C9" strokeWidth="10" strokeLinecap="round" />
        <path d="M130 120 Q150 140 160 130" stroke="#FFD8C9" strokeWidth="10" strokeLinecap="round" />
      </svg>

      {/* Magnifying glass */}
      <div className="absolute bottom-0 right-0">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="20" fill="white" stroke="#4a9b94" strokeWidth="4" />
          <line x1="45" y1="45" x2="65" y2="65" stroke="#4a9b94" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}

