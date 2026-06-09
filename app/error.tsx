"use client"

import { motion } from "framer-motion"
import { AlertCircle, RefreshCw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-2xl p-8 max-w-md text-center"
      >
        <div className="p-4 rounded-full bg-red-500/10 text-red-400 w-fit mx-auto mb-4">
          <AlertCircle size={32} />
        </div>
        
        <h2 className="text-2xl font-bold text-zinc-100 mb-2">Something went wrong</h2>
        <p className="text-zinc-400 mb-6">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        
        <button
          onClick={reset}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium mx-auto hover:opacity-90 transition-opacity"
        >
          <RefreshCw size={18} />
          Try again
        </button>
      </motion.div>
    </div>
  )
}