"use client"

import { motion } from "framer-motion"
import { getIcon } from "@/lib/icon-mapper"
import { ProgressBar } from "./progress-bar"

interface CourseCardProps {
  title: string
  progress: number
  icon_name: string
  index: number
}

export function CourseCard({ title, progress, icon_name, index }: CourseCardProps) {
  const Icon = getIcon(icon_name)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 flex flex-col justify-between h-full group hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-xl bg-zinc-800/80 text-cyan-400 group-hover:text-cyan-300 group-hover:bg-zinc-700/80 transition-colors">
          <Icon size={24} />
        </div>
        <span className="text-sm font-medium text-zinc-400">{progress}%</span>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-zinc-100 mb-2">{title}</h3>
        <ProgressBar progress={progress} />
      </div>
    </motion.div>
  )
}