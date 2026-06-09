import { BentoGrid } from "@/components/dashboard/bento-grid"

export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="h-12 w-64 bg-zinc-800/50 rounded-xl animate-pulse" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div
            key={i}
            className="glass rounded-2xl p-6 h-full min-h-[200px] animate-pulse"
          >
            <div className="h-8 w-8 bg-zinc-800 rounded-xl mb-4" />
            <div className="h-6 w-3/4 bg-zinc-800 rounded-lg mb-2" />
            <div className="h-2 w-full bg-zinc-800/50 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  )
}