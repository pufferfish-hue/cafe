import React, { useState } from 'react';
import { Check, Plus } from 'lucide-react';
import {
  BakeryProduct,
  CATEGORY_TILES,
  DropCategory,
  GIFT_CARD_AMOUNTS,
  LeadTimeFilter,
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
  { id: 'all', label: 'All Bakes' },
  { id: 'cakes', label: 'Signature Cakes' },
  { id: 'tarts', label: 'Tarts' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'loaves', label: 'Loaves' },
  { id: 'gift-cards', label: 'Gift Cards' },
];

const LEAD_TIME_TABS: { id: LeadTimeFilter; label: string }[] = [
  { id: 'all', label: 'Any Lead Time' },
  { id: 'next-day', label: 'Next-Day' },
  { id: 'two-day', label: '2-Day Advance' },
  { id: 'friday-drop', label: 'Friday Drop' },
];

export const WeeklyDropSection: React.FC<WeeklyDropSectionProps> = ({
  onAddToBag,
}) => {
  const [activeFilter, setActiveFilter] = useState<DropCategory>('all');
  const [leadTimeFilter, setLeadTimeFilter] = useState<LeadTimeFilter>('all');
  const [selectedGiftAmount, setSelectedGiftAmount] = useState<number>(50);
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const filteredProducts = WEEKLY_DROP_PRODUCTS.filter((item) => {
    const matchesCategory =
      activeFilter === 'all' || item.category === activeFilter;
    const matchesLeadTime =
      leadTimeFilter === 'all' || item.leadTimeTag === leadTimeFilter;
    return matchesCategory && matchesLeadTime;
  });

  const handleAdd = (product: BakeryProduct) => {
    const isGift = Boolean(product.isGiftCard);
    const price = isGift ? selectedGiftAmount : product.price;
    const itemId = isGift ? `${product.id}-${selectedGiftAmount}` : product.id;
    const subtitle = isGift
      ? `$${selectedGiftAmount} Digital & Linen Card`
      : `${product.unit} · ${product.leadTimeLabel}`;

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
      className="py-16 lg:py-20 bg-[#FAF8F5] border-b border-[rgba(43,41,38,0.1)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Fieldnotes Shop by Category 4-Tile Strip */}
        <div className="mb-14">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-medium tracking-wider uppercase text-[#6E685F] mb-1.5">
                Curated Collections
              </p>
              <h2 className="font-display text-3xl text-[#2B2926]">
                Shop by Category
              </h2>
            </div>
            {activeFilter !== 'all' && (
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className="text-xs font-medium text-[#3E5643] underline underline-offset-4 cursor-pointer"
              >
                Show all collections
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {CATEGORY_TILES.map((tile) => {
              const isSelected = activeFilter === tile.id;
              return (
                <button
                  key={tile.id}
                  type="button"
                  onClick={() =>
                    setActiveFilter(isSelected ? 'all' : tile.id)
                  }
                  className={`group text-left bg-[#FFFFFF] rounded-lg border overflow-hidden transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#3E5643] ${
                    isSelected
                      ? 'border-[#3E5643] ring-1 ring-[#3E5643]'
                      : 'border-[rgba(43,41,38,0.1)] hover:-translate-y-0.5'
                  }`}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden border-b border-[rgba(43,41,38,0.08)]">
                    <ArtisanVisual
                      variant={tile.visual}
                      className="w-full h-full"
                      label={tile.title}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-[#2B2926] mb-0.5">
                      {tile.title}
                    </h3>
                    <p className="text-xs text-[#6E685F]">{tile.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bestsellers & Weekly Drops Header + Dual Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pt-10 border-t border-[rgba(43,41,38,0.08)]">
          <div>
            <p className="text-xs font-medium tracking-wider uppercase text-[#6E685F] mb-2">
              Bestsellers · Friday Small-Batch Drops · Gift Cards
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#2B2926] [text-wrap:balance]">
              Seasonal Menu &amp; Pre-Orders
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            {/* Category Tabs */}
            <div
              role="tablist"
              aria-label="Filter menu by category"
              className="flex flex-wrap items-center gap-1 p-1 bg-[#F3EFE8] rounded-lg border border-[rgba(43,41,38,0.08)]"
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
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#3E5643] ${
                      active
                        ? 'bg-[#FFFFFF] text-[#2B2926] shadow-xs'
                        : 'text-[#6E685F] hover:text-[#2B2926]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Lead Time Selector */}
            <label className="sr-only" htmlFor="lead-time-select">
              Filter by lead time
            </label>
            <select
              id="lead-time-select"
              value={leadTimeFilter}
              onChange={(e) =>
                setLeadTimeFilter(e.target.value as LeadTimeFilter)
              }
              className="px-3 py-2 text-xs font-medium bg-[#FFFFFF] border border-[rgba(43,41,38,0.14)] rounded-lg text-[#2B2926] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#3E5643]"
            >
              {LEAD_TIME_TABS.map((lt) => (
                <option key={lt.id} value={lt.id}>
                  {lt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Empty State if combined filters return zero */}
        {filteredProducts.length === 0 ? (
          <div className="py-14 px-6 bg-[#FFFFFF] rounded-lg border border-[rgba(43,41,38,0.1)] text-center space-y-3">
            <p className="font-display text-2xl text-[#2B2926]">
              No bakes match both filters
            </p>
            <p className="text-sm text-[#6E685F]">
              Try resetting your category or lead-time filter to view all freshly
              baked items.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveFilter('all');
                setLeadTimeFilter('all');
              }}
              className="px-4 py-2 text-xs font-medium text-[#FAF8F5] bg-[#3E5643] rounded-md cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const isAdded = recentlyAddedId === product.id;
              const displayPrice = product.isGiftCard
                ? selectedGiftAmount
                : product.price;

              return (
                <article
                  key={product.id}
                  className="group flex flex-col bg-[#FFFFFF] rounded-lg border border-[rgba(43,41,38,0.1)] overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden border-b border-[rgba(43,41,38,0.08)]">
                    <ArtisanVisual
                      variant={product.visual}
                      className="w-full h-full"
                      label={product.name}
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs text-[#6E685F] mb-2">
                        <span>
                          {product.categoryLabel} · {product.leadTimeLabel}
                        </span>
                        {!product.isGiftCard && (
                          <span className="tabular-nums">
                            {product.batchRemaining} left
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-semibold text-[#2B2926] mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-[#6E685F] leading-relaxed">
                        {product.tastingNote}
                      </p>

                      {product.isGiftCard && (
                        <div className="mt-4">
                          <p className="text-xs font-medium text-[#6E685F] mb-2">
                            Select Voucher Amount
                          </p>
                          <div className="flex items-center gap-2">
                            {GIFT_CARD_AMOUNTS.map((amt) => (
                              <button
                                key={amt}
                                type="button"
                                onClick={() => setSelectedGiftAmount(amt)}
                                className={`px-2.5 py-1 text-xs font-mono tabular-nums rounded border transition-colors cursor-pointer ${
                                  selectedGiftAmount === amt
                                    ? 'bg-[#2B2926] text-[#FAF8F5] border-[#2B2926]'
                                    : 'bg-[#FAF8F5] text-[#2B2926] border-[rgba(43,41,38,0.15)] hover:border-[#2B2926]'
                                }`}
                              >
                                ${amt}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-[rgba(43,41,38,0.08)] flex items-center justify-between gap-4">
                      <div>
                        <span className="font-mono text-base font-medium text-[#2B2926] tabular-nums">
                          ${displayPrice}
                        </span>
                        <span className="text-xs text-[#6E685F] ml-2">
                          {product.unit}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleAdd(product)}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E5643] ${
                          isAdded
                            ? 'bg-[#2B2926] text-[#FAF8F5]'
                            : 'bg-[#3E5643] text-[#FAF8F5] hover:bg-[#2F4334]'
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
        )}
      </div>
    </section>
  );
};
