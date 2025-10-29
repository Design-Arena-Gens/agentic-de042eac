import type { Metadata, Viewport } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "../components/providers/theme-provider";
import { QueryProvider } from "../components/providers/query-provider";
import { cn } from "../lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const vazirmatn = Vazirmatn({
  subsets: ["latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AuraTiles — High-Fidelity Tile Experiences",
    template: "%s — AuraTiles",
  },
  description:
    "Launch a premium tile commerce experience with immersive visualization, smart configuration, and global-ready design.",
  keywords: [
    "floor tiles",
    "tile visualizer",
    "architecture",
    "interior design",
    "tile ecommerce",
  ],
  metadataBase: new URL("https://agentic-de042eac.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://agentic-de042eac.vercel.app",
    siteName: "AuraTiles",
    locale: "en_US",
    title: "AuraTiles — Premium Tile Commerce",
    description:
      "Roadmap, design system, and immersive ecommerce experience for high-end floor tiles.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "AuraTiles hero visual",
      },
    ],
  },
  alternates: {
    canonical: "https://agentic-de042eac.vercel.app",
  },
  other: {
    "hreflang": "en",
  },
};

export const viewport: Viewport = {
  themeColor: "#146A63",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background text-foreground",
          inter.variable,
          vazirmatn.variable
        )}
        data-rtl="false"
        data-theme="light"
      >
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem>
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
