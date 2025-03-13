import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FeaturedPosts } from "@/components/featured-posts"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <section className="container py-12 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Featured Content</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Discover the latest posts from our community of creators sharing their thoughts, photos, videos, and more.
          </p>
        </div>
        <FeaturedPosts />
        <div className="flex justify-center">
          <Button asChild>
            <Link href="/explore">
              Explore more <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

