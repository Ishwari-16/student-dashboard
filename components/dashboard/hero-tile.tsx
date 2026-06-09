"use client"

import { motion } from "framer-motion"
import { Flame } from "lucide-react"

export function HeroTile() {
  const motivationalMessages = [
    "Keep pushing forward! 💪",
    "Every expert was once a beginner.",
    "Your future self will thank you.",
    "Small steps lead to big changes.",
  ]

 const randomMessage = motivationalMessages[0]

 return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass rounded-2xl p-8 h-full flex flex-col justify-between relative overflow-hidden"
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0 mesh-gradient" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm text-zinc-400">Welcome back,</span>
          <motion.span
            className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            Student
          </motion.span>
        </div>
        
        <h2 className="text-4xl font-bold text-zinc-100 mb-4">
          Ready to learn today?
        </h2>
        
        <p className="text-zinc-400 text-lg">{randomMessage}</p>
      </div>
      
      <motion.div
        className="relative z-10 flex items-center gap-3 bg-zinc-800/50 rounded-xl p-4 w-fit"
        whileHover={{ scale: 1.02 }}
      >
        <div className="p-2 rounded-lg bg-orange-500/20 text-orange-400">
          <Flame size={24} />
        </div>
        <div>
          <p className="text-2xl font-bold text-zinc-100">7 Day Streak</p>
          <p className="text-sm text-zinc-400">Keep it going!</p>
        </div>
      </motion.div>
    </motion.div>
  )
}