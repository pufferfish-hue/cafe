/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check } from 'lucide-react';
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
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterJoined, setNewsletterJoined] = useState(false);

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

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterJoined(true);
    setNewsletterEmail('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2B2926]">
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

      {/* Fieldnotes-Inspired Warm Oatmeal Footer */}
      <footer className="bg-[#F3EFE8] py-14 border-t border-[rgba(43,41,38,0.1)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="font-display text-2xl text-[#2B2926] mb-2">
              Farine &amp; Fig
            </p>
            <p className="text-xs text-[#6E685F] leading-relaxed mb-4">
              Nature-inspired cakes, Friday pre-order pastry drops, workshops, and
              wholesale cafe partnerships.
            </p>
            <p className="text-xs text-[#6E685F]">
              Neil Road Flagship · Open Daily 11:00 AM – 8:30 PM
              <br />
              Takashimaya &amp; Raffles Pickup Counters · hello@farineandfig.com
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2B2926] mb-3">
              Explore
            </p>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-[#6E685F]">
              <button
                type="button"
                onClick={() => scrollToSection('weekly-drop')}
                className="text-left hover:text-[#2B2926] cursor-pointer"
              >
                Signature Cakes &amp; Drops
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('atelier-studio', 'cakes')}
                className="text-left hover:text-[#2B2926] cursor-pointer"
              >
                Custom Celebration Cakes
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('atelier-studio', 'workshops')}
                className="text-left hover:text-[#2B2926] cursor-pointer"
              >
                Baking Workshops
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('atelier-studio', 'markets')}
                className="text-left hover:text-[#2B2926] cursor-pointer"
              >
                Pop-Ups &amp; Markets
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('gifting-wholesale')}
                className="text-left hover:text-[#2B2926] cursor-pointer"
              >
                Corporate &amp; Wholesale
              </button>
              <button
                type="button"
                onClick={() => setIsBlueprintOpen(true)}
                className="text-left text-[#3E5643] font-medium hover:underline underline-offset-4 cursor-pointer"
              >
                Revenue Blueprint
              </button>
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2B2926] mb-2">
              Stay in the Loop
            </p>
            <p className="text-xs text-[#6E685F] mb-3">
              Join our seasonal journal for $5 off your first pastry drop and early
              access to workshop seats.
            </p>
            {newsletterJoined ? (
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#3E5643]">
                <Check className="w-4 h-4" aria-hidden="true" />
                <span>Subscribed — check your inbox for code FIELD5.</span>
              </div>
            ) : (
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex items-center gap-2"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  aria-label="Email for newsletter"
                  className="flex-1 min-w-0 px-3 py-2 text-xs bg-[#FFFFFF] border border-[rgba(43,41,38,0.16)] rounded-md text-[#2B2926] focus-visible:outline-2 focus-visible:outline-[#3E5643]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-medium bg-[#3E5643] text-[#FAF8F5] hover:bg-[#2F4334] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
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
