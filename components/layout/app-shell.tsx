"use client"

import { motion } from "framer-motion"
import { useRef, ReactNode } from "react"

interface AppShellProps {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[#09090B]">
      {/* Background gradient */}
      <div className="fixed inset-0 mesh-gradient opacity-50" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 ml-64 min-h-screen"
      >
        <main className="p-8">{children}</main>
      </motion.div>
    </div>
  )
}