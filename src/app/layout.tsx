import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KORU • Botanical Craft Soda",
  description:
    "Sparkling botanical soda brewed with cold-extracted whole fruit, wild mountain herbs, and 3g organic agave. Brewed in small batches in Vermont.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="paper-texture min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
