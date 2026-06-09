"use client"

import { motion } from "framer-motion"
import { Flame, Trophy, Clock } from "lucide-react"

export function StatsTile() {
  const stats = [
    { label: "Hours Learned", value: "42", icon: Clock },
    { label: "Courses Completed", value: "4", icon: Trophy },
    { label: "Current Streak", value: "7", icon: Flame },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="glass rounded-2xl p-6 h-full flex flex-col"
    >
      <h3 className="text-lg font-semibold text-zinc-100 mb-6">Your Stats</h3>
      
      <div className="flex-1 grid grid-cols-1 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="flex items-center justify-between p-4 rounded-xl bg-zinc-800/40"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(63, 63, 70, 0.4)" }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-zinc-700/50 text-cyan-400">
                <stat.icon size={18} />
              </div>
              <span className="text-sm text-zinc-400">{stat.label}</span>
            </div>
            <span className="text-xl font-bold text-zinc-100">{stat.value}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}