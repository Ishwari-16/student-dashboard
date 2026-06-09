import { Suspense } from "react"
import { getCourses } from "@/lib/supabase"
import { Sidebar } from "@/components/ui/sidebar"
import { BentoGrid } from "@/components/dashboard/bento-grid"
import { AppShell } from "@/components/layout/app-shell"
import Loading from "./loading"

export const dynamic = "force-dynamic"

async function DashboardContent() {
  const courses = await getCourses()

  // ✅ FIX: convert id from number → string (required for Course type)
  const formattedCourses = courses.map((course) => ({
    ...course,
    id: String(course.id),
  }))

  return (
    <AppShell>
      <Sidebar />
      <BentoGrid courses={formattedCourses} />
    </AppShell>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <DashboardContent />
    </Suspense>
  )
}