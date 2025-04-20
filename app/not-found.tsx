'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { SearchX } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center animate-fadeIn">
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 p-3 rounded-full">
            <SearchX className="text-red-500 w-8 h-8" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h1>
        <p className="text-sm text-gray-500 mb-6">We couldn’t find the page you were looking for.</p>
        <Button
          variant="default"
          className="px-5 py-2 rounded-xl"
          onClick={() => (window.location.href = '/')}
        >
          Go Back Home
        </Button>
      </div>
    </div>
  )
}
