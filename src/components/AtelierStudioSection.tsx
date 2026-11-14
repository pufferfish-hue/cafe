import React, { useState } from 'react';
import { Calendar, Check, MapPin, Plus } from 'lucide-react';
import {
  CAKE_FILLINGS,
  CAKE_FINISHES,
  CAKE_SIZES,
  CAKE_SPONGES,
  MARKET_STOPS,
  VisualVariant,
  WORKSHOP_SESSIONS,
} from '../data/bakeryData';
import { ArtisanVisual } from './ArtisanVisual';

export type StudioTab = 'cakes' | 'workshops' | 'markets';

interface AtelierStudioSectionProps {
  activeTab: StudioTab;
  onChangeTab: (tab: StudioTab) => void;
  onAddToBag: (item: {
    id: string;
    name: string;
    subtitle: string;
    price: number;
    visual: VisualVariant;
  }) => void;
}

export const AtelierStudioSection: React.FC<AtelierStudioSectionProps> = ({
  activeTab,
  onChangeTab,
  onAddToBag,
}) => {
  // Custom Cake state
  const [selectedSizeId, setSelectedSizeId] = useState(CAKE_SIZES[1].id);
  const [selectedSpongeId, setSelectedSpongeId] = useState(CAKE_SPONGES[0].id);
  const [selectedFillingId, setSelectedFillingId] = useState(CAKE_FILLINGS[0].id);
  const [selectedFinishId, setSelectedFinishId] = useState(CAKE_FINISHES[0].id);
  const [eventDate, setEventDate] = useState('2026-11-28');
  const [inscription, setInscription] = useState('');
  const [cakeAdded, setCakeAdded] = useState(false);

  // Workshop / Market added feedback
  const [addedFeedbackId, setAddedFeedbackId] = useState<string | null>(null);
  const [reservedSeatsMap, setReservedSeatsMap] = useState<Record<string, number>>({});

  const size = CAKE_SIZES.find((s) => s.id === selectedSizeId) || CAKE_SIZES[0];
  const sponge = CAKE_SPONGES.find((s) => s.id === selectedSpongeId) || CAKE_SPONGES[0];
  const filling = CAKE_FILLINGS.find((f) => f.id === selectedFillingId) || CAKE_FILLINGS[0];
  const finish = CAKE_FINISHES.find((f) => f.id === selectedFinishId) || CAKE_FINISHES[0];

  const totalCakePrice =
    size.basePrice + sponge.priceDelta + filling.priceDelta + finish.priceDelta;

  const handleAddCustomCake = (e: React.FormEvent) => {
    e.preventDefault();
    const noteParts = [
      size.label,
      sponge.name,
      filling.name,
      `Pickup ${eventDate}`,
      inscription.trim() ? `Note: "${inscription.trim()}"` : '',
    ].filter(Boolean);

    onAddToBag({
      id: `custom-cake-${size.id}-${sponge.id}-${filling.id}-${eventDate}`,
      name: `Custom Celebration Cake (${size.label})`,
      subtitle: noteParts.join(' · '),
      price: totalCakePrice,
      visual: 'cake',
    });

    setCakeAdded(true);
    window.setTimeout(() => setCakeAdded(false), 1600);
  };

  const handleReserveWorkshop = (sessionId: string) => {
    const session = WORKSHOP_SESSIONS.find((w) => w.id === sessionId);
    if (!session) return;

    const alreadyTaken = reservedSeatsMap[sessionId] || 0;
    if (session.seatsLeft - alreadyTaken <= 0) return;

    setReservedSeatsMap((prev) => ({
      ...prev,
      [sessionId]: (prev[sessionId] || 0) + 1,
    }));

    onAddToBag({
      id: `workshop-${session.id}`,
      name: `Workshop Seat: ${session.title}`,
      subtitle: `${session.date} · ${session.time}`,
      price: session.price,
      visual: 'workshop',
    });

    setAddedFeedbackId(session.id);
    window.setTimeout(() => {
      setAddedFeedbackId((curr) => (curr === session.id ? null : curr));
    }, 1300);
  };

  const handleReserveMarketBox = (marketId: string) => {
    const stop = MARKET_STOPS.find((m) => m.id === marketId);
    if (!stop) return;

    onAddToBag({
      id: `market-${stop.id}`,
      name: stop.featuredBoxName,
      subtitle: `Pickup at ${stop.marketName} (${stop.date})`,
      price: stop.featuredBoxPrice,
      visual: 'market',
    });

    setAddedFeedbackId(stop.id);
    window.setTimeout(() => {
      setAddedFeedbackId((curr) => (curr === stop.id ? null : curr));
    }, 1300);
  };

  return (
    <section
      id="atelier-studio"
      className="py-16 lg:py-20 bg-[#F2EFE9]/55 border-b border-[rgba(26,25,23,0.1)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-medium tracking-wider uppercase text-[#5E5B55] mb-2">
              Bespoke Commissions · Classes · Weekend Booths
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A1917] [text-wrap:balance]">
              Custom Cakes, Workshops &amp; Pop-Ups
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Atelier studio sections"
            className="inline-flex items-center gap-1 p-1 bg-[#FFFFFF] rounded-lg border border-[rgba(26,25,23,0.1)] self-start md:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'cakes'}
              onClick={() => onChangeTab('cakes')}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'cakes'
                  ? 'bg-[#2D5A3D] text-[#FAF9F6]'
                  : 'text-[#5E5B55] hover:text-[#1A1917]'
              }`}
            >
              Custom Cakes
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'workshops'}
              onClick={() => onChangeTab('workshops')}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'workshops'
                  ? 'bg-[#2D5A3D] text-[#FAF9F6]'
                  : 'text-[#5E5B55] hover:text-[#1A1917]'
              }`}
            >
              Baking Workshops
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'markets'}
              onClick={() => onChangeTab('markets')}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'markets'
                  ? 'bg-[#2D5A3D] text-[#FAF9F6]'
                  : 'text-[#5E5B55] hover:text-[#1A1917]'
              }`}
            >
              Pop-Ups &amp; Markets
            </button>
          </div>
        </div>

        {/* TAB 1: CUSTOM CELEBRATION CAKES */}
        {activeTab === 'cakes' && (
          <form
            onSubmit={handleAddCustomCake}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch bg-[#FFFFFF] rounded-lg border border-[rgba(26,25,23,0.1)] p-6 sm:p-8 lg:p-10"
          >
            {/* Left Visual & Live Summary */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <div className="aspect-[4/3] w-full rounded-md overflow-hidden border border-[rgba(26,25,23,0.08)]">
                <ArtisanVisual
                  variant="cake"
                  className="w-full h-full"
                  label="Custom celebration tiered cake with fresh figs and botanical garnish"
                />
              </div>

              <div className="pt-5 border-t border-[rgba(26,25,23,0.08)]">
                <p className="text-xs font-medium uppercase tracking-wider text-[#5E5B55] mb-3">
                  Your Commission Summary
                </p>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#5E5B55]">Size</dt>
                    <dd className="font-medium text-[#1A1917] text-right">
                      {size.label} ({size.servings})
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#5E5B55]">Sponge</dt>
                    <dd className="font-medium text-[#1A1917] text-right">
                      {sponge.name}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#5E5B55]">Filling</dt>
                    <dd className="font-medium text-[#1A1917] text-right">
                      {filling.name}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#5E5B55]">Finish</dt>
                    <dd className="font-medium text-[#1A1917] text-right">
                      {finish.name}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Right Interactive Configurator */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-6">
              <div className="space-y-6">
                {/* Size Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1917] mb-3">
                    01. Tier &amp; Serving Size
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {CAKE_SIZES.map((option) => {
                      const active = selectedSizeId === option.id;
                      return (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setSelectedSizeId(option.id)}
                          className={`text-left p-3.5 rounded-md border transition-colors cursor-pointer ${
                            active
                              ? 'border-[#2D5A3D] bg-[#2D5A3D]/5'
                              : 'border-[rgba(26,25,23,0.12)] hover:border-[#1A1917]'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-0.5">
                            <span className="text-sm font-semibold text-[#1A1917]">
                              {option.label}
                            </span>
                            <span className="font-mono text-xs text-[#1A1917] tabular-nums">
                              ${option.basePrice}
                            </span>
                          </div>
                          <p className="text-xs text-[#5E5B55]">{option.servings}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sponge & Filling Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="cake-sponge"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#1A1917] mb-2"
                    >
                      02. Cake Sponge
                    </label>
                    <select
                      id="cake-sponge"
                      value={selectedSpongeId}
                      onChange={(e) => setSelectedSpongeId(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[rgba(26,25,23,0.16)] rounded-md text-[#1A1917] focus-visible:outline-2 focus-visible:outline-[#2D5A3D]"
                    >
                      {CAKE_SPONGES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} {s.priceDelta > 0 ? `(+$${s.priceDelta})` : ''}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-[#5E5B55] mt-1.5">{sponge.note}</p>
                  </div>

                  <div>
                    <label
                      htmlFor="cake-filling"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#1A1917] mb-2"
                    >
                      03. Seasonal Filling
                    </label>
                    <select
                      id="cake-filling"
                      value={selectedFillingId}
                      onChange={(e) => setSelectedFillingId(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[rgba(26,25,23,0.16)] rounded-md text-[#1A1917] focus-visible:outline-2 focus-visible:outline-[#2D5A3D]"
                    >
                      {CAKE_FILLINGS.map((f) => (
                        <option key={f.id} value={f.id}>
                          {f.name} {f.priceDelta > 0 ? `(+$${f.priceDelta})` : ''}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-[#5E5B55] mt-1.5">{filling.note}</p>
                  </div>
                </div>

                {/* Exterior Finish */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1917] mb-2.5">
                    04. Buttercream &amp; Botanical Finish
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {CAKE_FINISHES.map((option) => {
                      const active = selectedFinishId === option.id;
                      return (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setSelectedFinishId(option.id)}
                          className={`text-left p-3 rounded-md border transition-colors cursor-pointer ${
                            active
                              ? 'border-[#2D5A3D] bg-[#2D5A3D]/5'
                              : 'border-[rgba(26,25,23,0.12)] hover:border-[#1A1917]'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="text-xs font-semibold text-[#1A1917]">
                              {option.name}
                            </span>
                          </div>
                          <p className="text-xs font-mono text-[#5E5B55] tabular-nums">
                            {option.priceDelta === 0 ? 'Included' : `+$${option.priceDelta}`}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Event Date & Inscription */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="cake-date"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#1A1917] mb-2"
                    >
                      05. Pickup / Celebration Date
                    </label>
                    <input
                      id="cake-date"
                      type="date"
                      value={eventDate}
                      min="2026-11-18"
                      onChange={(e) => setEventDate(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[rgba(26,25,23,0.16)] rounded-md text-[#1A1917] focus-visible:outline-2 focus-visible:outline-[#2D5A3D]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cake-note"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#1A1917] mb-2"
                    >
                      06. Optional Card or Plaque Note
                    </label>
                    <input
                      id="cake-note"
                      type="text"
                      maxLength={48}
                      value={inscription}
                      onChange={(e) => setInscription(e.target.value)}
                      placeholder="e.g., Happy 30th Maya"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[rgba(26,25,23,0.16)] rounded-md text-[#1A1917] placeholder:text-[#5E5B55]/60 focus-visible:outline-2 focus-visible:outline-[#2D5A3D]"
                    />
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-5 border-t border-[rgba(26,25,23,0.1)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[#5E5B55] block">
                    Estimated Custom Cake Total
                  </span>
                  <span className="font-mono text-2xl font-medium text-[#1A1917] tabular-nums">
                    ${totalCakePrice}
                  </span>
                </div>

                <button
                  type="submit"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D5A3D] ${
                    cakeAdded
                      ? 'bg-[#1A1917] text-[#FAF9F6]'
                      : 'bg-[#2D5A3D] text-[#FAF9F6] hover:bg-[#22452F]'
                  }`}
                >
                  {cakeAdded ? (
                    <>
                      <Check className="w-4 h-4" aria-hidden="true" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" aria-hidden="true" />
                      <span>Add Custom Cake to Bag</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}

        {/* TAB 2: BAKING WORKSHOPS */}
        {activeTab === 'workshops' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-4 bg-[#FFFFFF] rounded-lg border border-[rgba(26,25,23,0.1)] overflow-hidden flex flex-col">
              <div className="aspect-[4/3] w-full border-b border-[rgba(26,25,23,0.08)]">
                <ArtisanVisual
                  variant="workshop"
                  className="w-full h-full"
                  label="Hands-on baking workshop marble lamination station"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl text-[#1A1917] mb-3">
                    Small-Group Kitchen Sessions
                  </h3>
                  <p className="text-sm text-[#5E5B55] leading-relaxed">
                    Held around our marble pastry island for 8–10 bakers at a time. All
                    cultured butter, heritage flour, aprons, and espresso service are
                    included.
                  </p>
                </div>
                <p className="mt-6 pt-4 border-t border-[rgba(26,25,23,0.08)] text-xs text-[#5E5B55]">
                  Studio Location · 418 Linden Alley · Private team classes available
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-4">
              {WORKSHOP_SESSIONS.map((ws) => {
                const taken = reservedSeatsMap[ws.id] || 0;
                const remaining = Math.max(0, ws.seatsLeft - taken);
                const isJustAdded = addedFeedbackId === ws.id;

                return (
                  <div
                    key={ws.id}
                    className="bg-[#FFFFFF] rounded-lg border border-[rgba(26,25,23,0.1)] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                  >
                    <div className="space-y-2 max-w-xl">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#5E5B55]">
                        <span className="inline-flex items-center gap-1.5 font-medium text-[#1A1917]">
                          <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                          {ws.date}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{ws.time}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">
                          {remaining} of {ws.totalSeats} seats open
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-[#1A1917]">
                        {ws.title}
                      </h3>
                      <p className="text-sm text-[#5E5B55] leading-relaxed">
                        {ws.description}
                      </p>
                      <p className="text-xs text-[#2D5A3D] font-medium">
                        Take home: {ws.takeHome}
                      </p>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3 shrink-0">
                      <span className="font-mono text-xl font-medium text-[#1A1917] tabular-nums">
                        ${ws.price}
                        <span className="text-xs font-sans text-[#5E5B55] ml-1">
                          / seat
                        </span>
                      </span>
                      <button
                        type="button"
                        disabled={remaining === 0}
                        onClick={() => handleReserveWorkshop(ws.id)}
                        className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
                          isJustAdded
                            ? 'bg-[#1A1917] text-[#FAF9F6]'
                            : 'bg-[#2D5A3D] text-[#FAF9F6] hover:bg-[#22452F]'
                        }`}
                      >
                        {remaining === 0 ? (
                          <span>Class Full</span>
                        ) : isJustAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Seat Added</span>
                          </>
                        ) : (
                          <span>Reserve Seat</span>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: POP-UPS & FARMERS MARKETS */}
        {activeTab === 'markets' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-4 bg-[#FFFFFF] rounded-lg border border-[rgba(26,25,23,0.1)] overflow-hidden flex flex-col">
              <div className="aspect-[4/3] w-full border-b border-[rgba(26,25,23,0.08)]">
                <ArtisanVisual
                  variant="market"
                  className="w-full h-full"
                  label="Farine and Fig weekend farmers market pastry booth"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl text-[#1A1917] mb-3">
                    Weekend Market Schedule
                  </h3>
                  <p className="text-sm text-[#5E5B55] leading-relaxed">
                    Skip the morning sell-out line by pre-reserving a curated Market
                    Tasting Box for pickup directly at our booth.
                  </p>
                </div>
                <p className="mt-6 pt-4 border-t border-[rgba(26,25,23,0.08)] text-xs text-[#5E5B55]">
                  Hold window · Reserved boxes held until 30 mins before close
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-4">
              {MARKET_STOPS.map((stop) => {
                const isJustAdded = addedFeedbackId === stop.id;
                return (
                  <div
                    key={stop.id}
                    className="bg-[#FFFFFF] rounded-lg border border-[rgba(26,25,23,0.1)] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                  >
                    <div className="space-y-2 max-w-xl">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#5E5B55]">
                        <span className="inline-flex items-center gap-1.5 font-medium text-[#1A1917]">
                          <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                          {stop.neighborhood}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{stop.date}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{stop.hours}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-[#1A1917]">
                        {stop.marketName}
                      </h3>
                      <p className="text-sm text-[#5E5B55]">
                        <span className="font-medium text-[#1A1917]">
                          {stop.featuredBoxName}:
                        </span>{' '}
                        {stop.contents}
                      </p>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3 shrink-0">
                      <span className="font-mono text-xl font-medium text-[#1A1917] tabular-nums">
                        ${stop.featuredBoxPrice}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleReserveMarketBox(stop.id)}
                        className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          isJustAdded
                            ? 'bg-[#1A1917] text-[#FAF9F6]'
                            : 'bg-[#2D5A3D] text-[#FAF9F6] hover:bg-[#22452F]'
                        }`}
                      >
                        {isJustAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Box Reserved</span>
                          </>
                        ) : (
                          <span>Pre-Reserve Box</span>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
