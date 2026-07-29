export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "Sites" | "Finished" | "Workers" | "Machinery" | "Before & After";
  height: "short" | "medium" | "tall"; // controls masonry span
}

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "/images/gallery/site-1.jpg", alt: "Construction site with crane", category: "Sites", height: "tall" },
  { id: "g2", src: "/images/gallery/finished-1.jpg", alt: "Completed commercial building", category: "Finished", height: "medium" },
  { id: "g3", src: "/images/gallery/workers-1.jpg", alt: "Construction workers on site", category: "Workers", height: "short" },
  { id: "g4", src: "/images/gallery/machinery-1.jpg", alt: "Excavator on construction site", category: "Machinery", height: "medium" },
  { id: "g5", src: "/images/gallery/before-after-1.jpg", alt: "Before and after renovation", category: "Before & After", height: "tall" },
  { id: "g6", src: "/images/gallery/site-2.jpg", alt: "Foundation work in progress", category: "Sites", height: "medium" },
  { id: "g7", src: "/images/gallery/finished-2.jpg", alt: "Completed residential estate", category: "Finished", height: "short" },
  { id: "g8", src: "/images/gallery/workers-2.jpg", alt: "Engineer reviewing blueprints on site", category: "Workers", height: "tall" },
  { id: "g9", src: "/images/gallery/machinery-2.jpg", alt: "Concrete mixer truck pouring foundation", category: "Machinery", height: "short" },
  { id: "g10", src: "/images/gallery/site-3.jpg", alt: "Road construction site", category: "Sites", height: "medium" },
  { id: "g11", src: "/images/gallery/finished-3.jpg", alt: "Completed office park exterior", category: "Finished", height: "tall" },
  { id: "g12", src: "/images/gallery/before-after-2.jpg", alt: "Before and after hotel renovation", category: "Before & After", height: "medium" },
];