/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AtelierStudioSection, StudioTab } from './components/AtelierStudioSection';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { CorporateWholesaleSection } from './components/CorporateWholesaleSection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { RevenueBlueprintModal } from './components/RevenueBlueprintModal';
import { WeeklyDropSection } from './components/WeeklyDropSection';
import { VisualVariant } from './data/bakeryData';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [studioTab, setStudioTab] = useState<StudioTab>('cakes');
  const [isBlueprintOpen, setIsBlueprintOpen] = useState(false);

  const bagCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToBag = (incoming: {
    id: string;
    name: string;
    subtitle: string;
    price: number;
    visual: VisualVariant;
  }) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === incoming.id);
      if (existing) {
        return prev.map((item) =>
          item.id === incoming.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...incoming, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (sectionId: string, tab?: StudioTab) => {
    if (tab) {
      setStudioTab(tab);
    }
    window.setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 30);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1A1917]">
      <Header
        bagCount={bagCount}
        onOpenBag={() => setIsBagOpen(true)}
        onNavigateStudioTab={(tab) => setStudioTab(tab)}
      />

      <main className="flex-1">
        <HeroSection
          onExploreDrop={() => scrollToSection('weekly-drop')}
          onOrderCustomCake={() => scrollToSection('atelier-studio', 'cakes')}
        />

        <WeeklyDropSection onAddToBag={handleAddToBag} />

        <AtelierStudioSection
          activeTab={studioTab}
          onChangeTab={setStudioTab}
          onAddToBag={handleAddToBag}
        />

        <CorporateWholesaleSection onAddToBag={handleAddToBag} />
      </main>

      <footer className="bg-[#FAF9F6] py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="font-display text-lg text-[#1A1917] mb-1">
              Farine &amp; Fig
            </p>
            <p className="text-xs text-[#5E5B55]">
              418 Linden Alley · Open Wed–Sun, 8:00 AM – 3:00 PM · hello@farineandfig.com
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#5E5B55]">
            <button
              type="button"
              onClick={() => scrollToSection('weekly-drop')}
              className="hover:text-[#1A1917] cursor-pointer"
            >
              Weekly Drops
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('atelier-studio', 'cakes')}
              className="hover:text-[#1A1917] cursor-pointer"
            >
              Custom Cakes
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('atelier-studio', 'workshops')}
              className="hover:text-[#1A1917] cursor-pointer"
            >
              Workshops
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('gifting-wholesale')}
              className="hover:text-[#1A1917] cursor-pointer"
            >
              Wholesale
            </button>
            <button
              type="button"
              onClick={() => setIsBlueprintOpen(true)}
              className="text-[#2D5A3D] font-medium hover:underline underline-offset-4 cursor-pointer"
            >
              Revenue Blueprint
            </button>
          </div>
        </div>
      </footer>

      <CartDrawer
        isOpen={isBagOpen}
        items={cartItems}
        onClose={() => setIsBagOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <RevenueBlueprintModal
        isOpen={isBlueprintOpen}
        onClose={() => setIsBlueprintOpen(false)}
        onJumpToFeature={scrollToSection}
      />
    </div>
  );
}
