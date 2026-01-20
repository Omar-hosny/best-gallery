import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Camera, Users, Globe, Heart } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BestGallery's mission to curate inspiring visuals and connect creators worldwide.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-linear-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            About BestGallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are dedicated to curating the world's most inspiring visuals,
            connecting creators and creative minds through the power of
            photography.
          </p>
        </div>

        {/* Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-6 rounded-2xl bg-muted/30 border border-white/5 space-y-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Camera size={24} />
            </div>
            <h3 className="text-xl font-bold">Visual Excellence</h3>
            <p className="text-muted-foreground">
              We verify every image to ensure high resolution and artistic
              value, providing you with a premium browsing experience.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-white/5 space-y-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold">Community Driven</h3>
            <p className="text-muted-foreground">
              Our platform is powered by a diverse community of photographers
              who share their unique perspectives with the world.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-white/5 space-y-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold">Global Reach</h3>
            <p className="text-muted-foreground">
              From urban streetscapes to remote landscapes, our collection spans
              every corner of the globe.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-3xl mx-auto text-center space-y-8 p-8 rounded-3xl bg-muted/20">
          <Heart className="h-12 w-12 mx-auto text-red-500 fill-red-500/20" />
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Started in 2024, BestGallery began as a small project to organize
            open-source photography. Today, it serves as a daily source of
            inspiration for designers, developers, and art lovers everywhere. We
            believe that great imagery should be accessible to everyone, helping
            to tell better stories and build beautiful things.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
