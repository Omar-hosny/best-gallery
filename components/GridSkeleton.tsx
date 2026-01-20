export function GridSkeleton() {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 animate-pulse">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="w-full bg-muted/50 rounded-xl overflow-hidden aspect-3/4 break-inside-avoid"
        ></div>
      ))}
    </div>
  );
}
