import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ImageGrid } from "@/components/ImageGrid";
import { GridSkeleton } from "@/components/GridSkeleton";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground">
      <Navbar />

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
        <div className="mb-12 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-linear-to-br from-foreground to-muted-foreground bg-clip-text text-transparent pb-2">
            BestGallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore best collection of images from around the world
          </p>
        </div>

        <Suspense fallback={<GridSkeleton />}>
          <ImageGrid />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
