import React from 'react';
import { VisualVariant } from '../data/bakeryData';

interface ArtisanVisualProps {
  variant: VisualVariant;
  className?: string;
  label?: string;
}

export const ArtisanVisual: React.FC<ArtisanVisualProps> = ({
  variant,
  className = '',
  label,
}) => {
  const renderArtwork = () => {
    switch (variant) {
      case 'hero':
        return (
          <svg
            viewBox="0 0 640 480"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="heroWarmBg" x1="0" y1="0" x2="640" y2="480" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#EFECE4" />
                <stop offset="100%" stopColor="#E1DDD2" />
              </linearGradient>
              <linearGradient id="limestoneCounter" x1="0" y1="330" x2="640" y2="480" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#DDD8CB" />
                <stop offset="100%" stopColor="#CFC8B8" />
              </linearGradient>
              <radialGradient id="sunlightBeam" cx="0.25" cy="0.2" r="0.7">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="640" height="480" fill="url(#heroWarmBg)" />
            <rect width="640" height="480" fill="url(#sunlightBeam)" />
            {/* Architectural window shadow lines */}
            <path d="M90 0 L210 340" stroke="#C8C2B4" strokeWidth="1" opacity="0.55" />
            <path d="M290 0 L410 340" stroke="#C8C2B4" strokeWidth="1" opacity="0.45" />
            {/* Limestone counter */}
            <rect y="330" width="640" height="150" fill="url(#limestoneCounter)" />
            <line x1="0" y1="330" x2="640" y2="330" stroke="#B7B0A0" strokeWidth="1.5" />

            {/* Tall pedestal cake stand with two-tier fig cake */}
            <path d="M245 330 H355 L322 308 H278 Z" fill="#F8F6F1" stroke="#1A1917" strokeWidth="1.2" />
            <rect x="292" y="274" width="16" height="34" fill="#F8F6F1" stroke="#1A1917" strokeWidth="1.2" />
            <ellipse cx="300" cy="274" rx="92" ry="12" fill="#F8F6F1" stroke="#1A1917" strokeWidth="1.2" />
            {/* Bottom cake tier */}
            <path d="M226 218 V270 C226 277 374 277 374 270 V218 Z" fill="#FAF8F3" stroke="#1A1917" strokeWidth="1.2" />
            <ellipse cx="300" cy="218" rx="74" ry="10" fill="#FFFFFF" stroke="#1A1917" strokeWidth="1.2" />
            {/* Top cake tier */}
            <path d="M248 164 V214 C248 219 352 219 352 214 V164 Z" fill="#FAF8F3" stroke="#1A1917" strokeWidth="1.2" />
            <ellipse cx="300" cy="164" rx="52" ry="8" fill="#FFFFFF" stroke="#1A1917" strokeWidth="1.2" />
            {/* Figs and pistachio botanical garnish */}
            <circle cx="288" cy="158" r="11" fill="#4A2D3B" stroke="#1A1917" strokeWidth="1.1" />
            <circle cx="288" cy="158" r="6" fill="#B85D6E" />
            <circle cx="309" cy="160" r="10" fill="#4A2D3B" stroke="#1A1917" strokeWidth="1.1" />
            <path d="M268 214 Q282 198 296 212" stroke="#2D5A3D" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M312 162 Q328 144 342 152" stroke="#2D5A3D" strokeWidth="1.6" strokeLinecap="round" />
            <ellipse cx="332" cy="151" rx="4" ry="2.2" transform="rotate(-20 332 151)" fill="#2D5A3D" />
            <ellipse cx="322" cy="156" rx="4" ry="2.2" transform="rotate(15 322 156)" fill="#2D5A3D" />

            {/* Left: Glass Cloche with Croissants / Loaves */}
            <ellipse cx="132" cy="348" rx="78" ry="11" fill="#E6E1D6" stroke="#1A1917" strokeWidth="1.2" />
            <path d="M88 345 C88 320 112 312 132 312 C152 312 176 320 176 345 Z" fill="#C99B66" stroke="#1A1917" strokeWidth="1.2" />
            <path d="M104 326 Q132 332 160 326" stroke="#8C5E32" strokeWidth="1.1" fill="none" />
            <path d="M62 346 C62 252 202 252 202 346" fill="#FFFFFF" fillOpacity="0.28" stroke="#1A1917" strokeWidth="1.1" />
            <circle cx="132" cy="242" r="8" fill="#FAF8F3" stroke="#1A1917" strokeWidth="1.1" />

            {/* Right: Ceramic Pour-over & Tart Plate */}
            <ellipse cx="486" cy="356" rx="74" ry="10" fill="#F5F3EE" stroke="#1A1917" strokeWidth="1.2" />
            <path d="M432 336 H540 L534 353 H438 Z" fill="#D5AE7E" stroke="#1A1917" strokeWidth="1.2" />
            <ellipse cx="486" cy="336" rx="54" ry="7" fill="#5D7B52" stroke="#1A1917" strokeWidth="1.1" />
            <circle cx="470" cy="335" r="4" fill="#A23E48" />
            <circle cx="486" cy="334" r="4.5" fill="#A23E48" />
            <circle cx="502" cy="336" r="4" fill="#A23E48" />

            {/* Espresso cup */}
            <path d="M554 316 H598 L592 346 C590 351 562 351 560 346 Z" fill="#FAF8F3" stroke="#1A1917" strokeWidth="1.2" />
            <path d="M598 322 C609 322 609 338 595 338" stroke="#1A1917" strokeWidth="1.2" fill="none" />
            <ellipse cx="576" cy="316" rx="22" ry="4" fill="#4A3222" stroke="#1A1917" strokeWidth="1.1" />

            {/* Subtle Botanical Olive Branch Accent in Background */}
            <path d="M500 96 C524 128 548 168 564 218" stroke="#2D5A3D" strokeWidth="1.5" opacity="0.65" />
            <ellipse cx="514" cy="118" rx="11" ry="4.5" transform="rotate(-35 514 118)" fill="#2D5A3D" opacity="0.25" stroke="#2D5A3D" strokeWidth="1" />
            <ellipse cx="536" cy="144" rx="12" ry="4.5" transform="rotate(28 536 144)" fill="#2D5A3D" opacity="0.25" stroke="#2D5A3D" strokeWidth="1" />
            <ellipse cx="546" cy="176" rx="10" ry="4" transform="rotate(-30 546 176)" fill="#2D5A3D" opacity="0.25" stroke="#2D5A3D" strokeWidth="1" />
          </svg>
        );

      case 'cookies':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="400" height="300" fill="#F2EFE9" />
            <ellipse cx="200" cy="214" rx="134" ry="28" fill="#E6E1D5" stroke="#1A1917" strokeWidth="1.2" />
            <ellipse cx="200" cy="210" rx="112" ry="20" fill="#FAF8F4" stroke="#1A1917" strokeWidth="1" />
            {/* Stacked Artisanal Cookies */}
            <ellipse cx="164" cy="186" rx="52" ry="20" fill="#B9804D" stroke="#1A1917" strokeWidth="1.2" />
            <ellipse cx="228" cy="190" rx="54" ry="21" fill="#C48B57" stroke="#1A1917" strokeWidth="1.2" />
            <ellipse cx="196" cy="162" rx="55" ry="22" fill="#CE9763" stroke="#1A1917" strokeWidth="1.2" />
            {/* Dark Chocolate Chunks & Sea Salt Flakes */}
            <rect x="172" y="152" width="11" height="8" rx="2" transform="rotate(14 172 152)" fill="#2B1E17" />
            <rect x="206" y="148" width="13" height="9" rx="2" transform="rotate(-12 206 148)" fill="#2B1E17" />
            <rect x="190" y="165" width="10" height="7" rx="2" transform="rotate(24 190 165)" fill="#2B1E17" />
            <rect x="228" y="182" width="11" height="8" rx="2" transform="rotate(8 228 182)" fill="#2B1E17" />
            <rect x="148" y="178" width="10" height="7" rx="2" transform="rotate(-18 148 178)" fill="#2B1E17" />
            {/* Flaky sea salt specks */}
            <circle cx="195" cy="153" r="1.8" fill="#FAF8F4" />
            <circle cx="218" cy="162" r="1.5" fill="#FAF8F4" />
            <circle cx="165" cy="166" r="1.6" fill="#FAF8F4" />
          </svg>
        );

      case 'sable':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="400" height="300" fill="#F2EFE9" />
            {/* Tin */}
            <circle cx="200" cy="160" r="96" fill="#FAF8F4" stroke="#1A1917" strokeWidth="1.2" />
            <circle cx="200" cy="160" r="84" fill="#EFECE4" stroke="#1A1917" strokeWidth="0.9" strokeDasharray="3 3" />
            {/* Sablé cookies arranged inside */}
            <circle cx="174" cy="138" r="28" fill="#D5B88E" stroke="#1A1917" strokeWidth="1.2" />
            <circle cx="226" cy="138" r="28" fill="#D5B88E" stroke="#1A1917" strokeWidth="1.2" />
            <circle cx="174" cy="184" r="28" fill="#CFAF82" stroke="#1A1917" strokeWidth="1.2" />
            <circle cx="226" cy="184" r="28" fill="#CFAF82" stroke="#1A1917" strokeWidth="1.2" />
            {/* Pistachio flecks */}
            <circle cx="170" cy="134" r="3" fill="#4E7A51" />
            <circle cx="182" cy="142" r="2.5" fill="#4E7A51" />
            <circle cx="224" cy="133" r="3" fill="#4E7A51" />
            <circle cx="234" cy="144" r="2.2" fill="#4E7A51" />
            <circle cx="176" cy="184" r="3" fill="#4E7A51" />
            <circle cx="222" cy="182" r="2.8" fill="#4E7A51" />
          </svg>
        );

      case 'loaf':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="400" height="300" fill="#EFECE4" />
            {/* Linen cloth */}
            <path d="M56 196 L344 196 L326 244 L74 244 Z" fill="#FAF8F4" stroke="#1A1917" strokeWidth="1" />
            {/* Braided Cardamom Loaf */}
            <path d="M98 188 C98 128 148 112 200 112 C252 112 302 128 302 188 C302 202 98 202 98 188 Z" fill="#C98A4B" stroke="#1A1917" strokeWidth="1.3" />
            <path d="M128 130 Q155 156 182 126" stroke="#8C5320" strokeWidth="1.6" fill="none" />
            <path d="M174 122 Q204 156 232 124" stroke="#8C5320" strokeWidth="1.6" fill="none" />
            <path d="M222 126 Q248 156 276 134" stroke="#8C5320" strokeWidth="1.6" fill="none" />
            {/* Pearl sugar & cardamom seeds */}
            <circle cx="154" cy="136" r="2.5" fill="#FFFFFF" />
            <circle cx="198" cy="132" r="2.8" fill="#FFFFFF" />
            <circle cx="242" cy="138" r="2.4" fill="#FFFFFF" />
            <circle cx="180" cy="144" r="2" fill="#2D5A3D" />
            <circle cx="218" cy="146" r="2" fill="#2D5A3D" />
          </svg>
        );

      case 'sourdough':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="400" height="300" fill="#F2EFE9" />
            {/* Wooden board */}
            <rect x="76" y="196" width="248" height="20" rx="4" fill="#DDD3C2" stroke="#1A1917" strokeWidth="1.2" />
            {/* Country Boule */}
            <path d="M110 196 C110 118 156 96 200 96 C244 96 290 118 290 196 Z" fill="#B57B45" stroke="#1A1917" strokeWidth="1.3" />
            {/* Artisanal scoring ear */}
            <path d="M150 118 C176 102 224 106 248 134 C220 132 186 138 150 118 Z" fill="#E3C396" stroke="#1A1917" strokeWidth="1.1" />
            <path d="M138 152 Q160 144 176 160" stroke="#7A4C22" strokeWidth="1.2" fill="none" />
            {/* Fig & walnut cross-section hint */}
            <circle cx="228" cy="166" r="5" fill="#4A2D3B" />
            <circle cx="176" cy="172" r="4" fill="#6E492B" />
          </svg>
        );

      case 'tart':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="400" height="300" fill="#EFECE4" />
            {/* Pedestal */}
            <ellipse cx="200" cy="212" rx="116" ry="20" fill="#FAF8F4" stroke="#1A1917" strokeWidth="1.2" />
            {/* Tart fluted crust */}
            <path d="M104 166 H296 L284 202 C284 210 116 210 116 202 Z" fill="#CEA067" stroke="#1A1917" strokeWidth="1.3" />
            <ellipse cx="200" cy="166" rx="96" ry="18" fill="#5D8056" stroke="#1A1917" strokeWidth="1.2" />
            {/* Raspberries & Pistachio crown */}
            <circle cx="164" cy="165" r="8" fill="#9E3342" stroke="#1A1917" strokeWidth="0.9" />
            <circle cx="186" cy="160" r="8.5" fill="#9E3342" stroke="#1A1917" strokeWidth="0.9" />
            <circle cx="212" cy="161" r="8.5" fill="#9E3342" stroke="#1A1917" strokeWidth="0.9" />
            <circle cx="234" cy="166" r="8" fill="#9E3342" stroke="#1A1917" strokeWidth="0.9" />
            <circle cx="199" cy="170" r="8.5" fill="#B53E4F" stroke="#1A1917" strokeWidth="0.9" />
            <ellipse cx="144" cy="167" rx="4" ry="2.2" fill="#A9C797" />
            <ellipse cx="256" cy="167" rx="4" ry="2.2" fill="#A9C797" />
          </svg>
        );

      case 'lemon-tart':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="400" height="300" fill="#F2EFE9" />
            <ellipse cx="200" cy="212" rx="112" ry="20" fill="#FAF8F4" stroke="#1A1917" strokeWidth="1.2" />
            <path d="M108 166 H292 L282 202 C282 210 118 210 118 202 Z" fill="#C9995F" stroke="#1A1917" strokeWidth="1.3" />
            <ellipse cx="200" cy="166" rx="92" ry="17" fill="#E8C65B" stroke="#1A1917" strokeWidth="1.2" />
            {/* Torched meringue peaks */}
            <path d="M158 162 Q170 134 184 162 Q198 128 214 162 Q228 136 242 162 Z" fill="#FFFDF8" stroke="#1A1917" strokeWidth="1.1" />
            <path d="M198 130 L202 142" stroke="#A66B33" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M168 140 L172 150" stroke="#A66B33" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );

      case 'cake':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="400" height="300" fill="#EFECE4" />
            <path d="M152 246 H248 L224 226 H176 Z" fill="#FAF8F4" stroke="#1A1917" strokeWidth="1.2" />
            <rect x="192" y="204" width="16" height="22" fill="#FAF8F4" stroke="#1A1917" strokeWidth="1.2" />
            <ellipse cx="200" cy="204" rx="82" ry="11" fill="#FAF8F4" stroke="#1A1917" strokeWidth="1.2" />
            <path d="M134 148 V200 C134 206 266 206 266 200 V148 Z" fill="#FFFFFF" stroke="#1A1917" strokeWidth="1.2" />
            <ellipse cx="200" cy="148" rx="66" ry="9" fill="#FFFFFF" stroke="#1A1917" strokeWidth="1.2" />
            <path d="M154 96 V144 C154 149 246 149 246 144 V96 Z" fill="#FFFFFF" stroke="#1A1917" strokeWidth="1.2" />
            <ellipse cx="200" cy="96" rx="46" ry="7" fill="#FFFFFF" stroke="#1A1917" strokeWidth="1.2" />
            <circle cx="192" cy="90" r="9" fill="#4A2D3B" stroke="#1A1917" strokeWidth="1" />
            <circle cx="192" cy="90" r="5" fill="#B85D6E" />
            <circle cx="211" cy="92" r="8" fill="#4A2D3B" stroke="#1A1917" strokeWidth="1" />
            <path d="M168 144 Q182 132 198 144" stroke="#2D5A3D" strokeWidth="1.6" />
            <path d="M214 96 Q230 82 242 88" stroke="#2D5A3D" strokeWidth="1.6" />
          </svg>
        );

      case 'workshop':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="400" height="300" fill="#E8E4DA" />
            {/* Marble workbench */}
            <rect x="40" y="64" width="320" height="172" rx="4" fill="#FAF8F4" stroke="#1A1917" strokeWidth="1.2" />
            <path d="M68 92 Q140 120 198 86" stroke="#DDD8CC" strokeWidth="1.2" />
            <path d="M210 190 Q278 164 338 206" stroke="#DDD8CC" strokeWidth="1.2" />
            {/* Laminated pastry sheet */}
            <rect x="116" y="108" width="168" height="92" rx="4" fill="#E8CFA0" stroke="#1A1917" strokeWidth="1.2" />
            <line x1="116" y1="138" x2="284" y2="138" stroke="#1A1917" strokeWidth="0.9" strokeDasharray="4 4" />
            <line x1="116" y1="168" x2="284" y2="168" stroke="#1A1917" strokeWidth="0.9" strokeDasharray="4 4" />
            {/* Wooden rolling pin */}
            <rect x="86" y="146" width="228" height="16" rx="8" fill="#B58453" stroke="#1A1917" strokeWidth="1.2" />
            <rect x="64" y="150" width="22" height="8" rx="4" fill="#8C5F35" stroke="#1A1917" strokeWidth="1" />
            <rect x="314" y="150" width="22" height="8" rx="4" fill="#8C5F35" stroke="#1A1917" strokeWidth="1" />
          </svg>
        );

      case 'market':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="400" height="300" fill="#EFECE4" />
            {/* Striped market awning */}
            <path d="M60 72 H340 L358 122 H42 Z" fill="#2D5A3D" stroke="#1A1917" strokeWidth="1.2" />
            <path d="M106 72 H152 L144 122 H94 Z" fill="#FAF8F4" />
            <path d="M198 72 H244 L244 122 H198 Z" fill="#FAF8F4" />
            <path d="M290 72 H334 L348 122 H302 Z" fill="#FAF8F4" />
            {/* Market wooden crate & pastry boxes */}
            <rect x="76" y="188" width="248" height="60" fill="#D5C8B3" stroke="#1A1917" strokeWidth="1.2" />
            <rect x="114" y="156" width="80" height="32" fill="#FAF8F4" stroke="#1A1917" strokeWidth="1.1" />
            <rect x="206" y="156" width="80" height="32" fill="#FAF8F4" stroke="#1A1917" strokeWidth="1.1" />
            <line x1="154" y1="156" x2="154" y2="188" stroke="#2D5A3D" strokeWidth="2.5" />
            <line x1="246" y1="156" x2="246" y2="188" stroke="#2D5A3D" strokeWidth="2.5" />
          </svg>
        );

      case 'corporate':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="400" height="300" fill="#EFECE4" />
            <rect x="88" y="96" width="224" height="120" rx="2" fill="#FAF8F4" stroke="#1A1917" strokeWidth="1.3" />
            <line x1="88" y1="138" x2="312" y2="138" stroke="#2D5A3D" strokeWidth="12" />
            <line x1="196" y1="96" x2="196" y2="216" stroke="#2D5A3D" strokeWidth="12" />
            <circle cx="196" cy="138" r="14" fill="#FAF8F4" stroke="#2D5A3D" strokeWidth="2.5" />
            <path d="M180 124 C172 110 190 108 196 128" stroke="#2D5A3D" strokeWidth="2" fill="none" />
            <path d="M212 124 C220 110 202 108 196 128" stroke="#2D5A3D" strokeWidth="2" fill="none" />
          </svg>
        );

      case 'gift-card':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="400" height="300" fill="#E8E4DA" />
            {/* Embossed botanical atelier gift card */}
            <rect x="64" y="66" width="272" height="168" rx="10" fill="#1A1917" />
            <rect x="74" y="76" width="252" height="148" rx="6" stroke="#FAF8F4" strokeOpacity="0.22" strokeWidth="1" />
            <text
              x="200"
              y="138"
              textAnchor="middle"
              fill="#FAF9F6"
              fontFamily="Fraunces, Georgia, serif"
              fontSize="24"
              letterSpacing="0.5"
            >
              Farine &amp; Fig
            </text>
            <text
              x="200"
              y="164"
              textAnchor="middle"
              fill="#A8C3B0"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="11"
              letterSpacing="2"
            >
              ATELIER GIFT CARD
            </text>
            <path d="M168 186 H232" stroke="#FAF8F4" strokeOpacity="0.3" strokeWidth="1" />
          </svg>
        );
    }
  };

  return (
    <div
      className={`relative overflow-hidden bg-[#F2EFE9] ${className}`}
      role={label ? 'img' : undefined}
      aria-label={label}
    >
      {renderArtwork()}
    </div>
  );
};
