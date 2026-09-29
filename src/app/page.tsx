"use client";

import React, { useState } from "react";
import { FLAVORS, Flavor, CartItem } from "@/data/sodaData";
import { Navbar } from "@/components/Navbar";
import { FizzCanvas } from "@/components/FizzCanvas";
import { HeroSection } from "@/components/HeroSection";
import { FlavorShowcase } from "@/components/FlavorShowcase";
import { ComparisonSection } from "@/components/ComparisonSection";
import { GutHealthScience } from "@/components/GutHealthScience";
import { CustomPackBuilder } from "@/components/CustomPackBuilder";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";

export default function Home() {
  const [selectedHeroFlavor, setSelectedHeroFlavor] = useState<Flavor>(FLAVORS[0]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Add standard pack to cart
  const handleAddToCart = (
    flavor: Flavor,
    packSize: "4-pack" | "12-pack" | "24-pack"
  ) => {
    const price =
      packSize === "4-pack"
        ? flavor.prices.pack4
        : packSize === "12-pack"
        ? flavor.prices.pack12
        : flavor.prices.pack24;

    const itemId = `${flavor.id}-${packSize}`;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: itemId,
          flavorId: flavor.id,
          flavorName: flavor.name,
          packSize: packSize,
          quantity: 1,
          price: price,
          color: flavor.primaryColor,
        },
      ];
    });

    setIsCartOpen(true);
  };

  // Add custom crate to cart
  const handleAddCustomCrate = (customItem: CartItem) => {
    setCartItems((prev) => [...prev, customItem]);
    setIsCartOpen(true);
  };

  // Update quantity in cart
  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  // Remove single item
  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear entire cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 selection:bg-amber-500 selection:text-black relative">
      {/* Interactive Background Fizz Particles */}
      <FizzCanvas glowColor={selectedHeroFlavor.primaryColor} />

      {/* Navigation Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Sections */}
      <main className="relative z-10">
        <HeroSection
          selectedFlavor={selectedHeroFlavor}
          onSelectFlavor={setSelectedHeroFlavor}
          onAddToCart={(flavor, pack) => handleAddToCart(flavor, pack)}
        />

        <FlavorShowcase
          onAddToCart={handleAddToCart}
          onSelectFlavorForHero={(flavor) => setSelectedHeroFlavor(flavor)}
        />

        <ComparisonSection />

        <GutHealthScience />

        <CustomPackBuilder onAddCustomCrate={handleAddCustomCrate} />

        <TestimonialsSection />

        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
