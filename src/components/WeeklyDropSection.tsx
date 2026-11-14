import React, { useState } from 'react';
import { Check, Plus } from 'lucide-react';
import {
  BakeryProduct,
  DropCategory,
  GIFT_CARD_AMOUNTS,
  WEEKLY_DROP_PRODUCTS,
} from '../data/bakeryData';
import { ArtisanVisual } from './ArtisanVisual';

interface WeeklyDropSectionProps {
  onAddToBag: (item: {
    id: string;
    name: string;
    subtitle: string;
    price: number;
    visual: BakeryProduct['visual'];
  }) => void;
}

const FILTER_TABS: { id: DropCategory; label: string }[] = [
  { id: 'all', label: 'All Offerings' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'loaves', label: 'Loaves' },
  { id: 'tarts', label: 'Tarts' },
  { id: 'gift-cards', label: 'Gift Cards' },
];

export const WeeklyDropSection: React.FC<WeeklyDropSectionProps> = ({
  onAddToBag,
}) => {
  const [activeFilter, setActiveFilter] = useState<DropCategory>('all');
  const [selectedGiftAmount, setSelectedGiftAmount] = useState<number>(50);
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const filteredProducts =
    activeFilter === 'all'
      ? WEEKLY_DROP_PRODUCTS
      : WEEKLY_DROP_PRODUCTS.filter((item) => item.category === activeFilter);

  const handleAdd = (product: BakeryProduct) => {
    const isGift = Boolean(product.isGiftCard);
    const price = isGift ? selectedGiftAmount : product.price;
    const itemId = isGift ? `${product.id}-${selectedGiftAmount}` : product.id;
    const subtitle = isGift
      ? `$${selectedGiftAmount} Digital & Linen Card`
      : product.unit;

    onAddToBag({
      id: itemId,
      name: product.name,
      subtitle,
      price,
      visual: product.visual,
    });

    setRecentlyAddedId(product.id);
    window.setTimeout(() => {
      setRecentlyAddedId((curr) => (curr === product.id ? null : curr));
    }, 1200);
  };

  return (
    <section
      id="weekly-drop"
      className="py-16 lg:py-20 border-b border-[rgba(26,25,23,0.1)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header + Filter Segmented Control */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-medium tracking-wider uppercase text-[#5E5B55] mb-2">
              Friday Small-Batch Pre-Order · Gift Cards
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A1917] [text-wrap:balance]">
              Weekly Pastry Drop
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter weekly drop items"
            className="flex flex-wrap items-center gap-1 p-1 bg-[#F2EFE9] rounded-lg border border-[rgba(26,25,23,0.08)]"
          >
            {FILTER_TABS.map((tab) => {
              const active = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2D5A3D] ${
                    active
                      ? 'bg-[#FFFFFF] text-[#1A1917] shadow-xs'
                      : 'text-[#5E5B55] hover:text-[#1A1917]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Uniform Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isAdded = recentlyAddedId === product.id;
            const displayPrice = product.isGiftCard
              ? selectedGiftAmount
              : product.price;

            return (
              <article
                key={product.id}
                className="group flex flex-col bg-[#FFFFFF] rounded-lg border border-[rgba(26,25,23,0.1)] overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="aspect-[4/3] w-full overflow-hidden border-b border-[rgba(26,25,23,0.08)]">
                  <ArtisanVisual
                    variant={product.visual}
                    className="w-full h-full"
                    label={product.name}
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs text-[#5E5B55] mb-2">
                      <span className="uppercase tracking-wider">
                        {product.categoryLabel}
                      </span>
                      {!product.isGiftCard && (
                        <span className="tabular-nums">
                          {product.batchRemaining} left
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-semibold text-[#1A1917] mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#5E5B55] leading-relaxed">
                      {product.tastingNote}
                    </p>

                    {product.isGiftCard && (
                      <div className="mt-4">
                        <p className="text-xs font-medium text-[#5E5B55] mb-2">
                          Select Amount
                        </p>
                        <div className="flex items-center gap-2">
                          {GIFT_CARD_AMOUNTS.map((amt) => (
                            <button
                              key={amt}
                              type="button"
                              onClick={() => setSelectedGiftAmount(amt)}
                              className={`px-2.5 py-1 text-xs font-mono tabular-nums rounded border transition-colors cursor-pointer ${
                                selectedGiftAmount === amt
                                  ? 'bg-[#1A1917] text-[#FAF9F6] border-[#1A1917]'
                                  : 'bg-[#FAF9F6] text-[#1A1917] border-[rgba(26,25,23,0.15)] hover:border-[#1A1917]'
                              }`}
                            >
                              ${amt}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[rgba(26,25,23,0.08)] flex items-center justify-between gap-4">
                    <div>
                      <span className="font-mono text-base font-medium text-[#1A1917] tabular-nums">
                        ${displayPrice}
                      </span>
                      <span className="text-xs text-[#5E5B55] ml-2">
                        {product.isGiftCard ? 'no expiry' : product.unit}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAdd(product)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D5A3D] ${
                        isAdded
                          ? 'bg-[#1A1917] text-[#FAF9F6]'
                          : 'bg-[#2D5A3D] text-[#FAF9F6] hover:bg-[#22452F]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
