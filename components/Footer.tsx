export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-muted/30 py-12">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="flex justify-center gap-6 text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            <span className="sr-only">GitHub</span>
          </a>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} BestGallery. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
