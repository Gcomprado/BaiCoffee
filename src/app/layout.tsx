import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LUMINA SPRITZ • Prebiotic Botanical Sparkling Craft Soda",
  description:
    "Artisanal sparkling craft soda crafted with real cold-pressed fruit botanicals, 5g gut-loving prebiotic fiber, 30 calories, and zero added sugar.",
  keywords: [
    "healthy soda",
    "prebiotic soda",
    "craft sparkling soda",
    "botanical soda",
    "low calorie soda",
    "gut health drink",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-[#07090e] text-zinc-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
