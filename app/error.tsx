'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center animate-fadeIn">
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 p-3 rounded-full">
            <AlertTriangle className="text-red-500 w-8 h-8" />
          </div>
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Something went wrong</h1>
        <p className="text-sm text-gray-500 mb-4">{error.message}</p>
        <div className="flex justify-center gap-3 mt-6">
          <Button
            variant="default"
            onClick={() => reset()}
            className="px-5 py-2 rounded-xl"
          >
            Try Again
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = '/')}
            className="px-5 py-2 rounded-xl"
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  )
}
