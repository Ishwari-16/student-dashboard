"use client"

import { motion } from "framer-motion"

interface ProgressBarProps {
  progress: number
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      />
    </div>
  )
}