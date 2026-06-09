"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Home,
  BookOpen,
  Users,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Community", href: "/community", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Help", href: "/help", icon: HelpCircle },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <motion.aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-zinc-900/80 backdrop-blur-xl border-r border-zinc-800/50",
        collapsed ? "w-20" : "w-64"
      )}
      animate={{ width: collapsed ? 80 : 256 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex flex-col h-full p-4">
        {/* Logo */}
        <div className={cn("flex items-center gap-3 mb-8", collapsed && "justify-center")}>
          <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
            <GraduationCap size={24} className="text-white" />
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-lg font-bold text-zinc-100"
              >
                LearnHub
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-colors relative",
                  collapsed && "justify-center px-3",
                  isActive
                    ? "bg-zinc-800 text-zinc-100"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
                )}
              >
                <item.icon size={20} />
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-sm font-medium"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full"
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Collapse Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="mt-auto flex items-center justify-center p-3 rounded-xl text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
    </motion.aside>
  )
}