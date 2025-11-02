import { ReactNode } from "react";

// Tipe untuk Media
interface MediaItem {
  url: string;
  name: string;
}

// Tipe untuk Services
interface ServiceItem {
  icon: ReactNode;
  title: string;
  description: string;
}

// Tipe untuk Features
interface FeatureItem {
  icon: ReactNode;
  title: string;
  stat: string;
  description: string;
}

// Tipe untuk Portfolio
interface PortfolioItem {
  title: string;
  category: string;
  image: string;
}

// Tipe untuk Testimonials
interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  rating: number;
}

// Data dengan tipe TypeScript
export const media = [
  {
    url: "",
    name: "instagram",
  },
];

export const portfolio: PortfolioItem[] = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8Ymx1ZXwxNzYxOTIxMjg4fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    image:
      "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxtb2JpbGUlMjBhcHB8ZW58MHx8fGJsdWV8MTc2MTkyMTI5M3ww&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHw0fHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8Ymx1ZXwxNzYxOTIxMjg4fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "Tech Startup Website",
    category: "Web Development",
    image:
      "https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Siti Nurhaliza",
    role: "Mahasiswa",
    content:
      "Sangat membantu dalam menyelesaikan tugas akhir saya. Hasilnya memuaskan dan tepat waktu!",
    rating: 4,
  },
];
