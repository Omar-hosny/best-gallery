"use server";

export interface Photo {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export async function fetchPhotos(): Promise<Photo[]> {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=30",
      { cache: "no-store" }, // Ensure fresh data or use appropriate caching strategy
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch photos: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch photos:", error);
    return [];
  }
}
