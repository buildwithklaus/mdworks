export interface HeroSlide {
  id: string;
  image: string;
  eyebrow: string;
  title: string;
  description: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    image: "/images/hero1.avif",
    eyebrow: "Building Tomorrow, Today",
    title: "Engineering Excellence for a Stronger, Safer Future",
    description:
      "MD Works delivers reliable construction, civil engineering, and infrastructure solutions — trusted by businesses, developers, and communities to build with precision and integrity.",
  },
  {
    id: "slide-2",
    image: "/images/hero2.avif",
    eyebrow: "Commercial Construction",
    title: "Spaces Built to Power Business Growth",
    description:
      "From office towers to retail centers, we deliver commercial builds engineered for functionality, durability, and lasting value.",
  },
  {
    id: "slide-3",
    image: "/images/ciala/three.jpeg",
    eyebrow: "Infrastructure Development",
    title: "Building the Backbone of Growing Communities",
    description:
      "Roads, utilities, and public works designed and constructed to support long-term regional development and safety.",
  },
];