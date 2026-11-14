import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ArtisanVisual } from './ArtisanVisual';

interface HeroSectionProps {
  onExploreDrop: () => void;
  onOrderCustomCake: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreDrop,
  onOrderCustomCake,
}) => {
  return (
    <section id="top" className="bg-[#F3EFE8] border-b border-[rgba(43,41,38,0.1)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Copy Column */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <p className="text-xs font-medium tracking-wider uppercase text-[#6E685F] mb-5">
                Nature-Inspired Bakery · Botanical Cakes · Daily Cafe Supply
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.06] tracking-tight text-[#2B2926] [text-wrap:balance] mb-6">
                Carrying a cake is carrying a quiet moment.
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-[#6E685F] max-w-xl mb-8">
                Handcrafted botanical cakes infused with fresh fruits, herbs, and steeped
                teas—alongside Friday pre-order pastry drops, weekend baking workshops,
                and wholesale cafe partnerships.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <button
                  type="button"
                  onClick={onExploreDrop}
                  className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium text-[#FAF8F5] bg-[#3E5643] hover:bg-[#2F4334] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E5643]"
                >
                  <span>Explore Cakes &amp; Drops</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={onOrderCustomCake}
                  className="text-sm font-medium text-[#2B2926] underline underline-offset-4 hover:text-[#3E5643] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3E5643]"
                >
                  Build Custom Cake
                </button>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[rgba(43,41,38,0.1)] flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#6E685F]">
              <span>Lighter chantilly &amp; tea sponges</span>
              <span aria-hidden="true">·</span>
              <span>Next-day &amp; Friday pickup</span>
              <span aria-hidden="true">·</span>
              <span>Flexi islandwide courier</span>
            </div>
          </div>

          {/* Right Media Column */}
          <div className="lg:col-span-6">
            <div className="h-full min-h-[300px] lg:min-h-[430px] rounded-lg overflow-hidden border border-[rgba(43,41,38,0.1)] bg-[#FAF8F5]">
              <ArtisanVisual
                variant="hero"
                className="w-full h-full object-cover"
                label="Botanical lychee rose cake, mango yuzu cake under cloche, and eucalyptus stem on warm oatmeal table."
              />
            </div>
          </div>
        </div>

        {/* Full-width 4-Column Fieldnotes Lead-Time & Fulfillment Strip */}
        <div className="mt-12 pt-8 border-t border-[rgba(43,41,38,0.1)] grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <p className="text-xs text-[#6E685F] mb-1">Next-Day Signature Cakes</p>
            <p className="text-sm font-semibold text-[#2B2926] tabular-nums">
              Order by 4:00 PM Daily
            </p>
          </div>
          <div>
            <p className="text-xs text-[#6E685F] mb-1">Weekly Pre-Order Drop</p>
            <p className="text-sm font-semibold text-[#2B2926] tabular-nums">
              Fridays · Cookies, Loaves &amp; Tarts
            </p>
          </div>
          <div>
            <p className="text-xs text-[#6E685F] mb-1">Pop-Up &amp; Market Booths</p>
            <p className="text-sm font-semibold text-[#2B2926] tabular-nums">
              Sat Pier Stall 14 · 8:00 AM
            </p>
          </div>
          <div>
            <p className="text-xs text-[#6E685F] mb-1">Cafe Wholesale &amp; Pilots</p>
            <p className="text-sm font-semibold text-[#2B2926] tabular-nums">
              3 Partner Slots Available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
