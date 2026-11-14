import React, { useState } from 'react';
import { Check, Plus } from 'lucide-react';
import { CORPORATE_BOX_TIERS, VisualVariant } from '../data/bakeryData';
import { ArtisanVisual } from './ArtisanVisual';

interface CorporateWholesaleSectionProps {
  onAddToBag: (item: {
    id: string;
    name: string;
    subtitle: string;
    price: number;
    visual: VisualVariant;
  }) => void;
}

export const CorporateWholesaleSection: React.FC<
  CorporateWholesaleSectionProps
> = ({ onAddToBag }) => {
  const [selectedTierId, setSelectedTierId] = useState(CORPORATE_BOX_TIERS[1].id);
  const [customRibbonNote, setCustomRibbonNote] = useState('');
  const [corpAdded, setCorpAdded] = useState(false);

  const [programType, setProgramType] = useState<'daily-wholesale' | 'collab-pilot'>(
    'daily-wholesale'
  );
  const [cafeName, setCafeName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [weeklyVolume, setWeeklyVolume] = useState('60–120 pastries / week');
  const [wholesaleSubmitted, setWholesaleSubmitted] = useState<{
    referenceId: string;
    cafeName: string;
    program: string;
  } | null>(null);

  const selectedTier =
    CORPORATE_BOX_TIERS.find((t) => t.id === selectedTierId) ||
    CORPORATE_BOX_TIERS[0];

  const handleAddCorporateBox = () => {
    const note = customRibbonNote.trim()
      ? ` · Ribbon Note: "${customRibbonNote.trim()}"`
      : '';

    onAddToBag({
      id: `corp-${selectedTier.id}-${customRibbonNote.trim() || 'std'}`,
      name: `Corporate ${selectedTier.name} (${selectedTier.pieceCount} pcs)`,
      subtitle: `${selectedTier.serves} · ${selectedTier.leadTime}${note}`,
      price: selectedTier.price,
      visual: 'corporate',
    });

    setCorpAdded(true);
    window.setTimeout(() => setCorpAdded(false), 1400);
  };

  const handleSubmitWholesale = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cafeName.trim() || !contactEmail.trim()) return;

    const refCode = `WS-${Math.floor(1000 + Math.random() * 8999)}`;
    setWholesaleSubmitted({
      referenceId: refCode,
      cafeName: cafeName.trim(),
      program:
        programType === 'daily-wholesale'
          ? 'Daily Cafe Wholesale Supply'
          : 'First Collab / Wholesale Tasting Pilot (6-Week Run)',
    });
    setCafeName('');
    setContactEmail('');
  };

  return (
    <section
      id="gifting-wholesale"
      className="py-16 lg:py-20 bg-[#FAF8F5] border-b border-[rgba(43,41,38,0.1)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-10">
          <p className="text-xs font-medium tracking-wider uppercase text-[#6E685F] mb-2">
            Corporate Orders · Hospitality &amp; Cafe Supply
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-[#2B2926] [text-wrap:balance]">
            Corporate Gifting &amp; Cafe Wholesale
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Corporate Gifting & Event Boxes */}
          <div className="lg:col-span-6 bg-[#FFFFFF] rounded-lg border border-[rgba(43,41,38,0.1)] p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div>
              <div className="aspect-[16/9] w-full rounded-md overflow-hidden border border-[rgba(43,41,38,0.08)] mb-6">
                <ArtisanVisual
                  variant="corporate"
                  className="w-full h-full"
                  label="Linen-wrapped corporate gifting pastry box with botanical green ribbon"
                />
              </div>

              <h3 className="font-display text-2xl text-[#2B2926] mb-2">
                Corporate Gifting &amp; Event Boxes
              </h3>
              <p className="text-sm text-[#6E685F] leading-relaxed mb-6">
                Brand-matched ribbon boxes, individual door gifts, and dessert tables
                crafted for studio briefings, client gifting, and milestones.
              </p>

              <div className="space-y-3 mb-5">
                {CORPORATE_BOX_TIERS.map((tier) => {
                  const active = tier.id === selectedTierId;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSelectedTierId(tier.id)}
                      className={`w-full text-left p-4 rounded-md border transition-colors cursor-pointer ${
                        active
                          ? 'border-[#3E5643] bg-[#3E5643]/5'
                          : 'border-[rgba(43,41,38,0.12)] hover:border-[#2B2926]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-sm font-semibold text-[#2B2926]">
                          {tier.name} · {tier.pieceCount} pieces
                        </span>
                        <span className="font-mono text-sm font-medium text-[#2B2926] tabular-nums">
                          ${tier.price}
                        </span>
                      </div>
                      <p className="text-xs text-[#6E685F]">{tier.contents}</p>
                    </button>
                  );
                })}
              </div>

              <div>
                <label
                  htmlFor="corp-ribbon-note"
                  className="block text-xs font-medium text-[#6E685F] mb-1.5"
                >
                  Optional Company Ribbon Color or Card Message
                </label>
                <input
                  id="corp-ribbon-note"
                  type="text"
                  maxLength={60}
                  value={customRibbonNote}
                  onChange={(e) => setCustomRibbonNote(e.target.value)}
                  placeholder="e.g., Sage ribbon · Welcome to Design Offsite"
                  className="w-full px-3.5 py-2 text-sm bg-[#FAF8F5] border border-[rgba(43,41,38,0.16)] rounded-md text-[#2B2926] placeholder:text-[#6E685F]/60 focus-visible:outline-2 focus-visible:outline-[#3E5643]"
                />
              </div>
            </div>

            <div className="pt-5 border-t border-[rgba(43,41,38,0.08)] flex items-center justify-between gap-4">
              <div className="text-xs text-[#6E685F]">
                <span className="block font-medium text-[#2B2926]">
                  {selectedTier.serves}
                </span>
                <span>{selectedTier.leadTime}</span>
              </div>
              <button
                type="button"
                onClick={handleAddCorporateBox}
                className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  corpAdded
                    ? 'bg-[#2B2926] text-[#FAF8F5]'
                    : 'bg-[#3E5643] text-[#FAF8F5] hover:bg-[#2F4334]'
                }`}
              >
                {corpAdded ? (
                  <>
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Add Event Box · ${selectedTier.price}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Wholesale Cafes & Collab Pilots */}
          <div className="lg:col-span-6 bg-[#FFFFFF] rounded-lg border border-[rgba(43,41,38,0.1)] p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[#6E685F] mb-2">
                Partner Coffee Bars &amp; Roasteries
              </p>
              <h3 className="font-display text-2xl text-[#2B2926] mb-2">
                Wholesale Cafes &amp; Collab Pilots
              </h3>
              <p className="text-sm text-[#6E685F] leading-relaxed mb-6">
                We bake and deliver morning viennoiserie, cardamom knots, and sliced
                tea cakes before opening hours, and run 6-week co-branded seasonal
                pastry pilots.
              </p>

              {wholesaleSubmitted ? (
                <div className="p-6 rounded-md bg-[#FAF8F5] border border-[#3E5643]/30 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#3E5643]">
                    <Check className="w-4 h-4" aria-hidden="true" />
                    <span>
                      Tasting Request Confirmed ({wholesaleSubmitted.referenceId})
                    </span>
                  </div>
                  <p className="text-sm text-[#2B2926]">
                    Thank you, <strong>{wholesaleSubmitted.cafeName}</strong>. Our head
                    baker will reach out within 24 hours to schedule your complimentary
                    pastry sample box for{' '}
                    <span className="font-medium">{wholesaleSubmitted.program}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setWholesaleSubmitted(null)}
                    className="text-xs font-medium text-[#3E5643] underline underline-offset-4 cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitWholesale} className="space-y-4">
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-[#2B2926] mb-2">
                      Partnership Track
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setProgramType('daily-wholesale')}
                        className={`text-left p-3.5 rounded-md border transition-colors cursor-pointer ${
                          programType === 'daily-wholesale'
                            ? 'border-[#3E5643] bg-[#3E5643]/5'
                            : 'border-[rgba(43,41,38,0.12)] hover:border-[#2B2926]'
                        }`}
                      >
                        <span className="block text-sm font-semibold text-[#2B2926]">
                          Wholesale Cafe Supply
                        </span>
                        <span className="text-xs text-[#6E685F]">
                          Recurring AM pastry delivery
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setProgramType('collab-pilot')}
                        className={`text-left p-3.5 rounded-md border transition-colors cursor-pointer ${
                          programType === 'collab-pilot'
                            ? 'border-[#3E5643] bg-[#3E5643]/5'
                            : 'border-[rgba(43,41,38,0.12)] hover:border-[#2B2926]'
                        }`}
                      >
                        <span className="block text-sm font-semibold text-[#2B2926]">
                          Collab / Pilot Run
                        </span>
                        <span className="text-xs text-[#6E685F]">
                          4–6 week co-branded menu pilot
                        </span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="ws-cafe-name"
                      className="block text-xs font-medium text-[#6E685F] mb-1.5"
                    >
                      Cafe or Hospitality Business Name
                    </label>
                    <input
                      id="ws-cafe-name"
                      type="text"
                      required
                      value={cafeName}
                      onChange={(e) => setCafeName(e.target.value)}
                      placeholder="e.g., Neil Road Espresso Bar"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[rgba(43,41,38,0.16)] rounded-md text-[#2B2926] focus-visible:outline-2 focus-visible:outline-[#3E5643]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="ws-email"
                        className="block text-xs font-medium text-[#6E685F] mb-1.5"
                      >
                        Buyer Email
                      </label>
                      <input
                        id="ws-email"
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="buyer@cafe.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[rgba(43,41,38,0.16)] rounded-md text-[#2B2926] focus-visible:outline-2 focus-visible:outline-[#3E5643]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="ws-volume"
                        className="block text-xs font-medium text-[#6E685F] mb-1.5"
                      >
                        Estimated Weekly Volume
                      </label>
                      <select
                        id="ws-volume"
                        value={weeklyVolume}
                        onChange={(e) => setWeeklyVolume(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[rgba(43,41,38,0.16)] rounded-md text-[#2B2926] focus-visible:outline-2 focus-visible:outline-[#3E5643]"
                      >
                        <option>60–120 pastries / week</option>
                        <option>120–250 pastries / week</option>
                        <option>250+ pastries / week</option>
                        <option>Weekend Collab Pop-Up Only</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-[#FAF8F5] bg-[#2B2926] hover:bg-[#3F3C37] rounded-md transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B2926]"
                    >
                      Request Tasting Sample Box
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="pt-5 border-t border-[rgba(43,41,38,0.08)] flex flex-wrap items-center justify-between gap-4 text-xs text-[#6E685F]">
              <span>Wholesale minimums start at 24 pieces/delivery</span>
              <span className="tabular-nums">Net-15 billing for approved partners</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
