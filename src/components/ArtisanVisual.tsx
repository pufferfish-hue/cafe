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
              <linearGradient id="fnOatmealBg" x1="0" y1="0" x2="640" y2="480" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#F5F1EA" />
                <stop offset="100%" stopColor="#EAE3D6" />
              </linearGradient>
              <linearGradient id="fnTableTop" x1="0" y1="336" x2="640" y2="480" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E4DDD0" />
                <stop offset="100%" stopColor="#D7CFC0" />
              </linearGradient>
              <radialGradient id="fnWindowLight" cx="0.25" cy="0.18" r="0.72">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="640" height="480" fill="url(#fnOatmealBg)" />
            <rect width="640" height="480" fill="url(#fnWindowLight)" />
            <rect y="336" width="640" height="144" fill="url(#fnTableTop)" />
            <line x1="0" y1="336" x2="640" y2="336" stroke="#C5BDB0" strokeWidth="1.2" />

            {/* Delicate Botanical Eucalyptus Stem in Ceramic Vase */}
            <path d="M510 336 L520 264 H552 L562 336 Z" fill="#FAF8F5" stroke="#2B2926" strokeWidth="1.1" />
            <path d="M536 264 C526 205 512 162 496 118" stroke="#3E5643" strokeWidth="1.4" />
            <path d="M538 264 C554 202 566 168 584 134" stroke="#3E5643" strokeWidth="1.3" />
            <ellipse cx="514" cy="186" rx="13" ry="6" transform="rotate(-35 514 186)" fill="#3E5643" fillOpacity="0.25" stroke="#3E5643" strokeWidth="1" />
            <ellipse cx="502" cy="148" rx="11" ry="5" transform="rotate(-30 502 148)" fill="#3E5643" fillOpacity="0.25" stroke="#3E5643" strokeWidth="1" />
            <ellipse cx="558" cy="198" rx="12" ry="5.5" transform="rotate(32 558 198)" fill="#3E5643" fillOpacity="0.25" stroke="#3E5643" strokeWidth="1" />
            <ellipse cx="572" cy="162" rx="10" ry="4.5" transform="rotate(28 572 162)" fill="#3E5643" fillOpacity="0.25" stroke="#3E5643" strokeWidth="1" />

            {/* Centerpiece: Signature Lychee Strawberry Rose Cake on Linen Pedestal */}
            <path d="M235 336 H365 L328 312 H272 Z" fill="#FAF8F5" stroke="#2B2926" strokeWidth="1.1" />
            <rect x="292" y="278" width="16" height="34" fill="#FAF8F5" stroke="#2B2926" strokeWidth="1.1" />
            <ellipse cx="300" cy="278" rx="96" ry="12" fill="#FAF8F5" stroke="#2B2926" strokeWidth="1.1" />
            {/* Soft blush-ivory chantilly cake */}
            <path d="M222 192 V272 C222 280 378 280 378 272 V192 Z" fill="#F9EFEA" stroke="#2B2926" strokeWidth="1.2" />
            <ellipse cx="300" cy="192" rx="78" ry="11" fill="#FFFDFB" stroke="#2B2926" strokeWidth="1.2" />
            {/* Botanical strawberry & rose petal crown */}
            <path d="M276 186 C276 172 292 168 296 186 Z" fill="#B55B64" stroke="#2B2926" strokeWidth="1" />
            <path d="M304 185 C306 171 322 170 324 186 Z" fill="#B55B64" stroke="#2B2926" strokeWidth="1" />
            <circle cx="298" cy="187" r="7" fill="#F4DCE0" stroke="#2B2926" strokeWidth="1" />
            <ellipse cx="264" cy="190" rx="8" ry="3.5" transform="rotate(-15 264 190)" fill="#9B6B65" fillOpacity="0.55" />
            <ellipse cx="336" cy="189" rx="8" ry="3.5" transform="rotate(18 336 189)" fill="#3E5643" fillOpacity="0.45" />

            {/* Left: Petite Mango Yuzu Cake under Glass Cloche */}
            <ellipse cx="132" cy="350" rx="74" ry="10" fill="#EBE4D9" stroke="#2B2926" strokeWidth="1.1" />
            <path d="M90 344 V308 C90 302 174 302 174 308 V344 Z" fill="#F6E5B8" stroke="#2B2926" strokeWidth="1.1" />
            <ellipse cx="132" cy="308" rx="42" ry="6" fill="#FAF0D2" stroke="#2B2926" strokeWidth="1.1" />
            <circle cx="132" cy="305" r="5" fill="#E3A84B" />
            <path d="M66 348 C66 258 198 258 198 348" fill="#FFFFFF" fillOpacity="0.25" stroke="#2B2926" strokeWidth="1" />
            <circle cx="132" cy="249" r="7" fill="#FAF8F5" stroke="#2B2926" strokeWidth="1" />

            {/* Foreground Ceramic Tea Cup */}
            <path d="M416 322 H460 L454 352 C452 357 424 357 422 352 Z" fill="#FAF8F5" stroke="#2B2926" strokeWidth="1.1" />
            <ellipse cx="438" cy="322" rx="22" ry="4" fill="#C9A882" stroke="#2B2926" strokeWidth="1" />
          </svg>
        );

      case 'lychee-rose':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="400" height="300" fill="#F3EFE8" />
            <ellipse cx="200" cy="222" rx="112" ry="18" fill="#FAF8F5" stroke="#2B2926" strokeWidth="1.1" />
            {/* Soft Chantilly body */}
            <path d="M118 134 V214 C118 222 282 222 282 214 V134 Z" fill="#F9EEEB" stroke="#2B2926" strokeWidth="1.2" />
            <ellipse cx="200" cy="134" rx="82" ry="12" fill="#FFFDFB" stroke="#2B2926" strokeWidth="1.2" />
            {/* Fresh strawberries, lychee & rose petals */}
            <path d="M170 128 C170 112 188 109 192 129 Z" fill="#B55B64" stroke="#2B2926" strokeWidth="1" />
            <path d="M208 128 C210 112 228 111 230 129 Z" fill="#B55B64" stroke="#2B2926" strokeWidth="1" />
            <circle cx="200" cy="130" r="9" fill="#FAF2F0" stroke="#2B2926" strokeWidth="1" />
            <ellipse cx="152" cy="132" rx="7" ry="3.5" transform="rotate(-18 152 132)" fill="#9B6B65" fillOpacity="0.6" />
            <ellipse cx="248" cy="132" rx="7" ry="3.5" transform="rotate(18 248 132)" fill="#3E5643" fillOpacity="0.55" />
          </svg>
        );

      case 'mango-yuzu':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="400" height="300" fill="#F3EFE8" />
            <ellipse cx="200" cy="222" rx="112" ry="18" fill="#FAF8F5" stroke="#2B2926" strokeWidth="1.1" />
            <path d="M118 134 V214 C118 222 282 222 282 214 V134 Z" fill="#F8E9C1" stroke="#2B2926" strokeWidth="1.2" />
            <ellipse cx="200" cy="134" rx="82" ry="12" fill="#FFF9E8" stroke="#2B2926" strokeWidth="1.2" />
            {/* Yuzu wheel & mango cubes */}
            <circle cx="186" cy="128" r="11" fill="#E8B84B" stroke="#2B2926" strokeWidth="1" />
            <rect x="202" y="121" width="12" height="10" rx="2" fill="#E69A3A" stroke="#2B2926" strokeWidth="0.9" />
            <rect x="218" y="125" width="11" height="9" rx="2" fill="#F2B84B" stroke="#2B2926" strokeWidth="0.9" />
            <ellipse cx="164" cy="132" rx="6" ry="3" transform="rotate(-20 164 132)" fill="#3E5643" fillOpacity="0.6" />
          </svg>
        );

      case 'cookies':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="400" height="300" fill="#F3EFE8" />
            <ellipse cx="200" cy="214" rx="134" ry="28" fill="#E6E1D5" stroke="#2B2926" strokeWidth="1.1" />
            <ellipse cx="200" cy="210" rx="112" ry="20" fill="#FAF8F5" stroke="#2B2926" strokeWidth="1" />
            <ellipse cx="164" cy="186" rx="52" ry="20" fill="#B9804D" stroke="#2B2926" strokeWidth="1.1" />
            <ellipse cx="228" cy="190" rx="54" ry="21" fill="#C48B57" stroke="#2B2926" strokeWidth="1.1" />
            <ellipse cx="196" cy="162" rx="55" ry="22" fill="#CE9763" stroke="#2B2926" strokeWidth="1.1" />
            <rect x="172" y="152" width="11" height="8" rx="2" transform="rotate(14 172 152)" fill="#2B1E17" />
            <rect x="206" y="148" width="13" height="9" rx="2" transform="rotate(-12 206 148)" fill="#2B1E17" />
            <rect x="190" y="165" width="10" height="7" rx="2" transform="rotate(24 190 165)" fill="#2B1E17" />
            <circle cx="195" cy="153" r="1.8" fill="#FAF8F5" />
            <circle cx="218" cy="162" r="1.5" fill="#FAF8F5" />
          </svg>
        );

      case 'sable':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="400" height="300" fill="#F3EFE8" />
            <circle cx="200" cy="160" r="96" fill="#FAF8F5" stroke="#2B2926" strokeWidth="1.1" />
            <circle cx="200" cy="160" r="84" fill="#EFEAE1" stroke="#2B2926" strokeWidth="0.9" strokeDasharray="3 3" />
            <circle cx="174" cy="138" r="28" fill="#D5B88E" stroke="#2B2926" strokeWidth="1.1" />
            <circle cx="226" cy="138" r="28" fill="#D5B88E" stroke="#2B2926" strokeWidth="1.1" />
            <circle cx="174" cy="184" r="28" fill="#CFAF82" stroke="#2B2926" strokeWidth="1.1" />
            <circle cx="226" cy="184" r="28" fill="#CFAF82" stroke="#2B2926" strokeWidth="1.1" />
            <circle cx="170" cy="134" r="3" fill="#3E5643" />
            <circle cx="224" cy="133" r="3" fill="#3E5643" />
            <circle cx="176" cy="184" r="3" fill="#3E5643" />
            <circle cx="222" cy="182" r="2.8" fill="#3E5643" />
          </svg>
        );

      case 'loaf':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="400" height="300" fill="#EFEAE1" />
            <path d="M56 196 L344 196 L326 244 L74 244 Z" fill="#FAF8F5" stroke="#2B2926" strokeWidth="1" />
            <path d="M98 188 C98 128 148 112 200 112 C252 112 302 128 302 188 C302 202 98 202 98 188 Z" fill="#C98A4B" stroke="#2B2926" strokeWidth="1.2" />
            <path d="M128 130 Q155 156 182 126" stroke="#8C5320" strokeWidth="1.5" fill="none" />
            <path d="M174 122 Q204 156 232 124" stroke="#8C5320" strokeWidth="1.5" fill="none" />
            <path d="M222 126 Q248 156 276 134" stroke="#8C5320" strokeWidth="1.5" fill="none" />
            <circle cx="154" cy="136" r="2.5" fill="#FFFFFF" />
            <circle cx="198" cy="132" r="2.8" fill="#FFFFFF" />
            <circle cx="242" cy="138" r="2.4" fill="#FFFFFF" />
          </svg>
        );

      case 'sourdough':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="400" height="300" fill="#F3EFE8" />
            <rect x="76" y="196" width="248" height="20" rx="4" fill="#DDD3C2" stroke="#2B2926" strokeWidth="1.1" />
            <path d="M110 196 C110 118 156 96 200 96 C244 96 290 118 290 196 Z" fill="#B57B45" stroke="#2B2926" strokeWidth="1.2" />
            <path d="M150 118 C176 102 224 106 248 134 C220 132 186 138 150 118 Z" fill="#E3C396" stroke="#2B2926" strokeWidth="1" />
            <circle cx="228" cy="166" r="5" fill="#4A2D3B" />
          </svg>
        );

      case 'tart':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="400" height="300" fill="#EFEAE1" />
            <ellipse cx="200" cy="212" rx="116" ry="20" fill="#FAF8F5" stroke="#2B2926" strokeWidth="1.1" />
            <path d="M104 166 H296 L284 202 C284 210 116 210 116 202 Z" fill="#CEA067" stroke="#2B2926" strokeWidth="1.2" />
            <ellipse cx="200" cy="166" rx="96" ry="18" fill="#5D8056" stroke="#2B2926" strokeWidth="1.1" />
            <circle cx="164" cy="165" r="8" fill="#9E3342" stroke="#2B2926" strokeWidth="0.9" />
            <circle cx="186" cy="160" r="8.5" fill="#9E3342" stroke="#2B2926" strokeWidth="0.9" />
            <circle cx="212" cy="161" r="8.5" fill="#9E3342" stroke="#2B2926" strokeWidth="0.9" />
            <circle cx="234" cy="166" r="8" fill="#9E3342" stroke="#2B2926" strokeWidth="0.9" />
            <circle cx="199" cy="170" r="8.5" fill="#B53E4F" stroke="#2B2926" strokeWidth="0.9" />
          </svg>
        );

      case 'lemon-tart':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="400" height="300" fill="#F3EFE8" />
            <ellipse cx="200" cy="212" rx="112" ry="20" fill="#FAF8F5" stroke="#2B2926" strokeWidth="1.1" />
            <path d="M108 166 H292 L282 202 C282 210 118 210 118 202 Z" fill="#C9995F" stroke="#2B2926" strokeWidth="1.2" />
            <ellipse cx="200" cy="166" rx="92" ry="17" fill="#E8C65B" stroke="#2B2926" strokeWidth="1.1" />
            <path d="M158 162 Q170 134 184 162 Q198 128 214 162 Q228 136 242 162 Z" fill="#FFFDF8" stroke="#2B2926" strokeWidth="1.1" />
          </svg>
        );

      case 'cake':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="400" height="300" fill="#EFEAE1" />
            <path d="M152 246 H248 L224 226 H176 Z" fill="#FAF8F5" stroke="#2B2926" strokeWidth="1.1" />
            <rect x="192" y="204" width="16" height="22" fill="#FAF8F5" stroke="#2B2926" strokeWidth="1.1" />
            <ellipse cx="200" cy="204" rx="82" ry="11" fill="#FAF8F5" stroke="#2B2926" strokeWidth="1.1" />
            <path d="M134 148 V200 C134 206 266 206 266 200 V148 Z" fill="#FFFFFF" stroke="#2B2926" strokeWidth="1.1" />
            <ellipse cx="200" cy="148" rx="66" ry="9" fill="#FFFFFF" stroke="#2B2926" strokeWidth="1.1" />
            <path d="M154 96 V144 C154 149 246 149 246 144 V96 Z" fill="#FFFFFF" stroke="#2B2926" strokeWidth="1.1" />
            <ellipse cx="200" cy="96" rx="46" ry="7" fill="#FFFFFF" stroke="#2B2926" strokeWidth="1.1" />
            <circle cx="192" cy="90" r="9" fill="#4A2D3B" stroke="#2B2926" strokeWidth="1" />
            <circle cx="192" cy="90" r="5" fill="#B85D6E" />
            <circle cx="211" cy="92" r="8" fill="#4A2D3B" stroke="#2B2926" strokeWidth="1" />
            <path d="M168 144 Q182 132 198 144" stroke="#3E5643" strokeWidth="1.6" />
            <path d="M214 96 Q230 82 242 88" stroke="#3E5643" strokeWidth="1.6" />
          </svg>
        );

      case 'workshop':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="400" height="300" fill="#EBE4D9" />
            <rect x="40" y="64" width="320" height="172" rx="4" fill="#FAF8F5" stroke="#2B2926" strokeWidth="1.1" />
            <rect x="116" y="108" width="168" height="92" rx="4" fill="#E8CFA0" stroke="#2B2926" strokeWidth="1.1" />
            <line x1="116" y1="138" x2="284" y2="138" stroke="#2B2926" strokeWidth="0.8" strokeDasharray="4 4" />
            <line x1="116" y1="168" x2="284" y2="168" stroke="#2B2926" strokeWidth="0.8" strokeDasharray="4 4" />
            <rect x="86" y="146" width="228" height="16" rx="8" fill="#B58453" stroke="#2B2926" strokeWidth="1.1" />
            <rect x="64" y="150" width="22" height="8" rx="4" fill="#8C5F35" stroke="#2B2926" strokeWidth="1" />
            <rect x="314" y="150" width="22" height="8" rx="4" fill="#8C5F35" stroke="#2B2926" strokeWidth="1" />
          </svg>
        );

      case 'market':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="400" height="300" fill="#EFEAE1" />
            <path d="M60 72 H340 L358 122 H42 Z" fill="#3E5643" stroke="#2B2926" strokeWidth="1.1" />
            <path d="M106 72 H152 L144 122 H94 Z" fill="#FAF8F5" />
            <path d="M198 72 H244 L244 122 H198 Z" fill="#FAF8F5" />
            <path d="M290 72 H334 L348 122 H302 Z" fill="#FAF8F5" />
            <rect x="76" y="188" width="248" height="60" fill="#D5C8B3" stroke="#2B2926" strokeWidth="1.1" />
            <rect x="114" y="156" width="80" height="32" fill="#FAF8F5" stroke="#2B2926" strokeWidth="1" />
            <rect x="206" y="156" width="80" height="32" fill="#FAF8F5" stroke="#2B2926" strokeWidth="1" />
            <line x1="154" y1="156" x2="154" y2="188" stroke="#3E5643" strokeWidth="2.5" />
            <line x1="246" y1="156" x2="246" y2="188" stroke="#3E5643" strokeWidth="2.5" />
          </svg>
        );

      case 'corporate':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="400" height="300" fill="#EFEAE1" />
            <rect x="88" y="96" width="224" height="120" rx="2" fill="#FAF8F5" stroke="#2B2926" strokeWidth="1.2" />
            <line x1="88" y1="138" x2="312" y2="138" stroke="#3E5643" strokeWidth="12" />
            <line x1="196" y1="96" x2="196" y2="216" stroke="#3E5643" strokeWidth="12" />
            <circle cx="196" cy="138" r="14" fill="#FAF8F5" stroke="#3E5643" strokeWidth="2.5" />
            <path d="M180 124 C172 110 190 108 196 128" stroke="#3E5643" strokeWidth="2" fill="none" />
            <path d="M212 124 C220 110 202 108 196 128" stroke="#3E5643" strokeWidth="2" fill="none" />
          </svg>
        );

      case 'gift-card':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="400" height="300" fill="#EBE4D9" />
            <rect x="64" y="66" width="272" height="168" rx="10" fill="#3E5643" />
            <rect x="74" y="76" width="252" height="148" rx="6" stroke="#FAF8F5" strokeOpacity="0.28" strokeWidth="1" />
            <text
              x="200"
              y="138"
              textAnchor="middle"
              fill="#FAF8F5"
              fontFamily="Cormorant Garamond, Georgia, serif"
              fontSize="28"
              letterSpacing="0.5"
            >
              Farine &amp; Fig
            </text>
            <text
              x="200"
              y="164"
              textAnchor="middle"
              fill="#DFD6C7"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="11"
              letterSpacing="2"
            >
              GIFT VOUCHER
            </text>
            <path d="M168 186 H232" stroke="#FAF8F5" strokeOpacity="0.35" strokeWidth="1" />
          </svg>
        );
    }
  };

  return (
    <div
      className={`relative overflow-hidden bg-[#F3EFE8] ${className}`}
      role={label ? 'img' : undefined}
      aria-label={label}
    >
      {renderArtwork()}
    </div>
  );
};
