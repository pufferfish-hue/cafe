import React, { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';

interface HeaderProps {
  bagCount: number;
  onOpenBag: () => void;
  onNavigateStudioTab: (tab: 'cakes' | 'workshops' | 'markets') => void;
}

export const Header: React.FC<HeaderProps> = ({
  bagCount,
  onOpenBag,
  onNavigateStudioTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
    studioTab?: 'cakes' | 'workshops' | 'markets'
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (studioTab) {
      onNavigateStudioTab(studioTab);
    }
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {showBanner && (
        <div className="bg-[#3E5643] text-[#FAF8F5] text-xs py-2 px-4 flex items-center justify-center relative">
          <p className="text-center pr-6 truncate">
            Order by 4:00 PM for next-day delivery · Friday drops &amp; custom cakes open
          </p>
          <button
            type="button"
            onClick={() => setShowBanner(false)}
            aria-label="Dismiss announcement"
            className="absolute right-3 p-1 text-[#FAF8F5]/80 hover:text-[#FAF8F5] cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[rgba(43,41,38,0.1)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single-element Brand Wordmark */}
          <a
            href="#top"
            onClick={(e) => handleLinkClick(e, 'top')}
            className="font-display text-2xl font-medium tracking-tight text-[#2B2926] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3E5643]"
          >
            Farine &amp; Fig
          </a>

          {/* Zone 2: 4 concise single-line text navigation links */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6E685F]"
          >
            <a
              href="#weekly-drop"
              onClick={(e) => handleLinkClick(e, 'weekly-drop')}
              className="hover:text-[#2B2926] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3E5643]"
            >
              Shop Bakes
            </a>
            <a
              href="#atelier-studio"
              onClick={(e) => handleLinkClick(e, 'atelier-studio', 'cakes')}
              className="hover:text-[#2B2926] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3E5643]"
            >
              Custom Cakes
            </a>
            <a
              href="#atelier-studio"
              onClick={(e) => handleLinkClick(e, 'atelier-studio', 'workshops')}
              className="hover:text-[#2B2926] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3E5643]"
            >
              Workshops
            </a>
            <a
              href="#gifting-wholesale"
              onClick={(e) => handleLinkClick(e, 'gifting-wholesale')}
              className="hover:text-[#2B2926] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3E5643]"
            >
              Wholesale
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenBag}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#FAF8F5] bg-[#3E5643] hover:bg-[#2F4334] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E5643]"
            >
              <ShoppingBag className="w-4 h-4" aria-hidden="true" />
              <span>Bag</span>
              <span className="font-mono text-xs tabular-nums">({bagCount})</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 text-[#2B2926] hover:bg-[#F3EFE8] rounded-md cursor-pointer focus-visible:outline-2 focus-visible:outline-[#3E5643]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile Navigation"
            className="md:hidden border-t border-[rgba(43,41,38,0.1)] bg-[#FAF8F5] px-6 py-4 flex flex-col gap-3 text-sm font-medium text-[#2B2926]"
          >
            <a
              href="#weekly-drop"
              onClick={(e) => handleLinkClick(e, 'weekly-drop')}
              className="py-2 border-b border-[rgba(43,41,38,0.06)]"
            >
              Shop Bakes &amp; Drops
            </a>
            <a
              href="#atelier-studio"
              onClick={(e) => handleLinkClick(e, 'atelier-studio', 'cakes')}
              className="py-2 border-b border-[rgba(43,41,38,0.06)]"
            >
              Custom Celebration Cakes
            </a>
            <a
              href="#atelier-studio"
              onClick={(e) => handleLinkClick(e, 'atelier-studio', 'workshops')}
              className="py-2 border-b border-[rgba(43,41,38,0.06)]"
            >
              Workshops &amp; Pop-Ups
            </a>
            <a
              href="#gifting-wholesale"
              onClick={(e) => handleLinkClick(e, 'gifting-wholesale')}
              className="py-2"
            >
              Corporate Gifting &amp; Wholesale
            </a>
          </nav>
        )}
      </header>
    </>
  );
};
