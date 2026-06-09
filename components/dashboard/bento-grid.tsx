import { Course } from "@/types/course"
import { HeroTile } from "./hero-tile"
import { CourseCard } from "./course-card"
import { ActivityTile } from "./activity-tile"
import { StatsTile } from "./stats-tile"

interface BentoGridProps {
  courses: Course[]
}

export function BentoGrid({ courses }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {/* Hero Tile - Spans 2 columns on large screens */}
      <div className="lg:col-span-2 lg:row-span-2">
        <HeroTile />
      </div>
      
      {/* Course Tiles */}
      {courses.slice(0, 2).map((course, index) => (
        <div key={course.id} className="lg:col-span-1">
          <CourseCard
            title={course.title}
            progress={course.progress}
            icon_name={course.icon_name}
            index={index}
          />
        </div>
      ))}
      
      {/* Activity Tile - Spans 2 columns on large screens */}
      <div className="lg:col-span-2 lg:row-span-1">
        <ActivityTile />
      </div>
      
      {/* Stats Tile */}
      <div className="lg:col-span-1 lg:row-span-2">
        <StatsTile />
      </div>
      
      {/* Remaining Course Tiles */}
      {courses.slice(2, 4).map((course, index) => (
        <div key={course.id} className="lg:col-span-1">
          <CourseCard
            title={course.title}
            progress={course.progress}
            icon_name={course.icon_name}
            index={index + 2}
          />
        </div>
      ))}
    </div>
  )
}