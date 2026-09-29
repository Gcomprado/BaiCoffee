"use client";

import React, { useState } from "react";
import { FLAVORS_DATA, ProductFlavor, CartItem } from "@/data/productData";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FlavorDissection } from "@/components/FlavorDissection";
import { BrewingProcess } from "@/components/BrewingProcess";
import { TastingBoxBuilder } from "@/components/TastingBoxBuilder";
import { TransparencyTable } from "@/components/TransparencyTable";
import { Footer } from "@/components/Footer";
import { OrderDrawer } from "@/components/OrderDrawer";

export default function Home() {
  const [selectedHeroFlavor, setSelectedHeroFlavor] = useState<ProductFlavor>(FLAVORS_DATA[0]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);

  // Add individual flavor pack
  const handleAddToCart = (flavor: ProductFlavor, size: "12-pack") => {
    const itemId = `${flavor.id}-${size}`;
    setCartItems((prev) => {
      const existing = prev.find((it) => it.id === itemId);
      if (existing) {
        return prev.map((it) =>
          it.id === itemId ? { ...it, quantity: it.quantity + 1 } : it
        );
      }
      return [
        ...prev,
        {
          id: itemId,
          flavorId: flavor.id,
          name: flavor.name,
          size: size,
          price: flavor.price12Pack,
          quantity: 1,
        },
      ];
    });
    setIsOrderDrawerOpen(true);
  };

  // Add Tasting Box
  const handleAddTastingBox = () => {
    const itemId = `tasting-box-season-3`;
    setCartItems((prev) => {
      const existing = prev.find((it) => it.id === itemId);
      if (existing) {
        return prev.map((it) =>
          it.id === itemId ? { ...it, quantity: it.quantity + 1 } : it
        );
      }
      return [
        ...prev,
        {
          id: itemId,
          flavorId: "tasting-box",
          name: "Season Three Tasting Box",
          size: "tasting-set",
          price: 42,
          quantity: 1,
        },
      ];
    });
    setIsOrderDrawerOpen(true);
  };

  // Update item quantity
  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  // Remove item
  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((it) => it.id !== id));
  };

  // Clear cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, it) => acc + it.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsOrderDrawerOpen(true)}
      />

      {/* Main Content */}
      <main>
        <Hero
          selectedFlavor={selectedHeroFlavor}
          onSelectFlavor={setSelectedHeroFlavor}
          onAddToCart={handleAddToCart}
        />

        <FlavorDissection
          onAddToCart={handleAddToCart}
          onSelectHeroFlavor={(f) => {
            setSelectedHeroFlavor(f);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />

        <BrewingProcess />

        <TastingBoxBuilder onAddTastingBox={handleAddTastingBox} />

        <TransparencyTable />
      </main>

      {/* Footer */}
      <Footer />

      {/* Order Drawer */}
      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
