import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import {
  FINANCIAL_SUMMARY,
  REVENUE_STREAMS_BLUEPRINT,
} from '../data/bakeryData';
import { StudioTab } from './AtelierStudioSection';

interface RevenueBlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToFeature: (sectionId: string, tab?: StudioTab) => void;
}

export const RevenueBlueprintModal: React.FC<RevenueBlueprintModalProps> = ({
  isOpen,
  onClose,
  onJumpToFeature,
}) => {
  const [showOriginalNote, setShowOriginalNote] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1A1917]/50 backdrop-blur-[1px]"
      role="dialog"
      aria-modal="true"
      aria-label="Business Revenue Blueprint"
    >
      <div className="w-full max-w-3xl max-h-[90vh] bg-[#FAF9F6] rounded-lg border border-[rgba(26,25,23,0.14)] shadow-xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[rgba(26,25,23,0.1)] flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-[#5E5B55] uppercase tracking-wider mb-1">
              Founder Canvas Reference
            </p>
            <h2 className="font-display text-2xl text-[#1A1917]">
              Monthly Revenue Streams Blueprint
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close blueprint"
            className="p-2 text-[#5E5B55] hover:text-[#1A1917] rounded-md cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2D5A3D]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* 4-Metric Financial Summary Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-[rgba(26,25,23,0.1)]">
            <div>
              <span className="block text-xs text-[#5E5B55] mb-1">
                Listed Gross Revenue
              </span>
              <span className="font-mono text-xl font-medium text-[#1A1917] tabular-nums">
                ${FINANCIAL_SUMMARY.listedGrossRevenue.toLocaleString()}
              </span>
            </div>
            <div>
              <span className="block text-xs text-[#5E5B55] mb-1">
                Operating Costs
              </span>
              <span className="font-mono text-xl font-medium text-[#1A1917] tabular-nums">
                ${FINANCIAL_SUMMARY.estimatedCosts.toLocaleString()}
              </span>
            </div>
            <div>
              <span className="block text-xs text-[#5E5B55] mb-1">
                Monthly Surplus
              </span>
              <span className="font-mono text-xl font-medium text-[#2D5A3D] tabular-nums">
                ${FINANCIAL_SUMMARY.estimatedSurplus.toLocaleString()}
              </span>
            </div>
            <div>
              <span className="block text-xs text-[#5E5B55] mb-1">
                Baseline Target
              </span>
              <span className="font-mono text-xl font-medium text-[#1A1917] tabular-nums">
                ~${FINANCIAL_SUMMARY.monthlyTargetRevenue.toLocaleString()}
              </span>
            </div>
          </div>

          {/* 8 Streams Table mapped to live storefront features */}
          <div>
            <div className="flex items-center justify-between gap-4 mb-3">
              <h3 className="text-sm font-semibold text-[#1A1917]">
                8 Revenue Streams Mapped to Live Storefront Modules
              </h3>
              <button
                type="button"
                onClick={() => setShowOriginalNote((prev) => !prev)}
                className="text-xs font-medium text-[#2D5A3D] underline underline-offset-4 cursor-pointer"
              >
                {showOriginalNote ? 'Hide Original Note' : 'View Original Note'}
              </button>
            </div>

            {showOriginalNote && (
              <div className="mb-5 p-3 bg-[#FFFFFF] rounded-md border border-[rgba(26,25,23,0.1)]">
                <img
                  src="/assets/aistudio/Cafe_f4c6c1a1.jpg"
                  alt="Uploaded Revenue Streams canvas sticky note"
                  referrerPolicy="no-referrer"
                  className="w-full max-h-64 object-contain rounded"
                />
              </div>
            )}

            <div className="divide-y divide-[rgba(26,25,23,0.08)] border border-[rgba(26,25,23,0.1)] rounded-md bg-[#FFFFFF]">
              {REVENUE_STREAMS_BLUEPRINT.map((stream) => {
                const share = Math.round(
                  (stream.monthlyTarget / FINANCIAL_SUMMARY.listedGrossRevenue) * 100
                );
                return (
                  <div
                    key={stream.id}
                    className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2 text-xs text-[#5E5B55]">
                        <span>{stream.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{share}% of gross</span>
                      </div>
                      <p className="text-sm font-semibold text-[#1A1917]">
                        {stream.name}
                      </p>
                      <p className="text-xs text-[#5E5B55]">{stream.note}</p>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0">
                      <span className="font-mono text-sm font-medium text-[#1A1917] tabular-nums">
                        ${stream.monthlyTarget.toLocaleString()}/mo
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          onJumpToFeature(stream.targetSectionId, stream.targetTab);
                          onClose();
                        }}
                        className="inline-flex items-center gap-1 text-xs font-medium text-[#2D5A3D] hover:underline underline-offset-4 cursor-pointer"
                      >
                        <span>Open Section</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
