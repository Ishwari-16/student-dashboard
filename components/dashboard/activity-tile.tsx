"use client"

import { motion } from "framer-motion"

const data = Array.from({ length: 49 }).map((_, i) => ({
  id: i,
  value: (i % 4)
}))

export function ActivityTile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="glass rounded-2xl p-6 h-full flex flex-col"
    >
      <h3 className="text-lg font-semibold text-zinc-100 mb-6">
        Learning Activity
      </h3>

      <div className="flex-1 flex items-end justify-between gap-1">
        {data.map((item) => {
          const opacity = item.value === 0 ? 0.1 : item.value * 0.25

          return (
            <motion.div
              key={item.id}
              className="flex-1 bg-cyan-500/20 rounded-sm"
              style={{ opacity }}
              whileHover={{
                scale: 1.2,
                backgroundColor: "rgba(6, 182, 212, 0.5)",
              }}
            />
          )
        })}
      </div>
    </motion.div>
  )
}