import Image from "next/image";
import { Download, Heart } from "lucide-react";
import { fetchPhotos } from "@/app/actions";

export async function ImageGrid() {
  const photos = await fetchPhotos();

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {photos.map((photo) => {
        // Randomize aspect ratio slightly for the "masonry" feel since picsum returns huge images
        // We will just use the original aspect ratio logic but use the download_url
        // Picsum download URLs are like: https://picsum.photos/id/0/5000/3333
        // We can resize them for performance: https://picsum.photos/id/{id}/{width}/{height}
        const height = (photo.height / photo.width) * 500; // normalized height for 500px width

        return (
          <div
            key={photo.id}
            className="group relative break-inside-avoid rounded-xl overflow-hidden bg-muted/20"
          >
            <Image
              src={`https://picsum.photos/id/${photo.id}/500/${Math.round(height)}`}
              alt={`Photo by ${photo.author}`}
              width={500}
              height={Math.round(height)}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />

            {/* Hover Actions */}
            <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0 bg-linear-to-t from-black/80 to-transparent flex items-center justify-between text-white opacity-0 group-hover:opacity-100">
              <span className="text-sm font-medium truncate max-w-[120px]">
                {photo.author}
              </span>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors">
                  <Heart className="h-4 w-4" />
                </button>
                <button className="p-2 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
