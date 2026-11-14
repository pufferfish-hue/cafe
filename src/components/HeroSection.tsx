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
    <section id="top" className="border-b border-[rgba(26,25,23,0.1)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Copy Column */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <p className="text-xs font-medium tracking-wider uppercase text-[#5E5B55] mb-5">
                Small-Batch Patisserie · Custom Cake Atelier · Roastery Supply
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-tight text-[#1A1917] [text-wrap:balance] mb-6">
                Handcrafted pastry, baked for celebration and daily ritual.
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-[#5E5B55] max-w-xl mb-8">
                From multi-tier botanical wedding cakes and Friday pre-order cookie drops to
                intimate lamination workshops and daily cafe wholesale partnerships.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <button
                  type="button"
                  onClick={onExploreDrop}
                  className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium text-[#FAF9F6] bg-[#2D5A3D] hover:bg-[#22452F] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D5A3D]"
                >
                  <span>Shop Weekly Drop</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={onOrderCustomCake}
                  className="text-sm font-medium text-[#1A1917] underline underline-offset-4 hover:text-[#2D5A3D] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2D5A3D]"
                >
                  Configure a Custom Cake
                </button>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[rgba(26,25,23,0.08)] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#5E5B55]">
              <span>Stone-milled organic grains</span>
              <span aria-hidden="true">·</span>
              <span>72-hour laminated viennoiserie</span>
              <span aria-hidden="true">·</span>
              <span>Pickup &amp; local courier</span>
            </div>
          </div>

          {/* Right Media Column */}
          <div className="lg:col-span-6">
            <div className="h-full min-h-[300px] lg:min-h-[420px] rounded-lg overflow-hidden border border-[rgba(26,25,23,0.1)]">
              <ArtisanVisual
                variant="hero"
                className="w-full h-full object-cover"
                label="Illustration of Farine and Fig limestone pastry counter with two-tier fig celebration cake, croissants under glass cloche, pistachio tart, and espresso."
              />
            </div>
          </div>
        </div>

        {/* Full-width 4-Column Studio Dispatch Strip below Hero Split */}
        <div className="mt-12 pt-8 border-t border-[rgba(26,25,23,0.1)] grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <p className="text-xs text-[#5E5B55] mb-1">Weekly Pre-Order Drop</p>
            <p className="text-sm font-semibold text-[#1A1917] tabular-nums">
              Fridays · 9:00 AM Pickup
            </p>
          </div>
          <div>
            <p className="text-xs text-[#5E5B55] mb-1">Custom Celebration Cakes</p>
            <p className="text-sm font-semibold text-[#1A1917] tabular-nums">
              5-Day Notice · 4 Sizes
            </p>
          </div>
          <div>
            <p className="text-xs text-[#5E5B55] mb-1">Next Farmers Market</p>
            <p className="text-sm font-semibold text-[#1A1917] tabular-nums">
              Sat Pier Stall 14 · 8:00 AM
            </p>
          </div>
          <div>
            <p className="text-xs text-[#5E5B55] mb-1">Wholesale &amp; Collab Pilot</p>
            <p className="text-sm font-semibold text-[#1A1917] tabular-nums">
              3 Cafe Partner Slots Open
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
