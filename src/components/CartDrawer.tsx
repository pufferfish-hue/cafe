import React, { useState } from 'react';
import { Check, Minus, Plus, Trash2, X } from 'lucide-react';
import { VisualVariant } from '../data/bakeryData';
import { ArtisanVisual } from './ArtisanVisual';

export interface CartItem {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  quantity: number;
  visual: VisualVariant;
}

interface CartDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [fulfillment, setFulfillment] = useState<'pickup' | 'delivery'>('pickup');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [confirmedOrder, setConfirmedOrder] = useState<{
    orderNumber: string;
    total: number;
    customerName: string;
    fulfillment: 'pickup' | 'delivery';
    itemCount: number;
  } | null>(null);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = fulfillment === 'delivery' && subtotal > 0 ? 12 : 0;
  const total = subtotal + deliveryFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0 || !customerName.trim() || !customerEmail.trim()) {
      return;
    }

    const orderNum = `FF-${Math.floor(1040 + Math.random() * 8900)}`;
    const count = items.reduce((sum, i) => sum + i.quantity, 0);

    setConfirmedOrder({
      orderNumber: orderNum,
      total,
      customerName: customerName.trim(),
      fulfillment,
      itemCount: count,
    });
    onClearCart();
  };

  const handleCloseDrawer = () => {
    setConfirmedOrder(null);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#1A1917]/40 backdrop-blur-[1px]"
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Bag"
    >
      <div className="w-full max-w-md bg-[#FAF9F6] h-full flex flex-col border-l border-[rgba(26,25,23,0.12)] shadow-xl">
        {/* Drawer Header */}
        <div className="px-6 py-5 border-b border-[rgba(26,25,23,0.1)] flex items-center justify-between">
          <h2 className="font-display text-xl text-[#1A1917]">
            {confirmedOrder ? 'Order Confirmed' : 'Your Pastry Bag'}
          </h2>
          <button
            type="button"
            onClick={handleCloseDrawer}
            aria-label="Close bag"
            className="p-2 text-[#5E5B55] hover:text-[#1A1917] rounded-md cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2D5A3D]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {confirmedOrder ? (
            <div className="bg-[#FFFFFF] rounded-lg border border-[rgba(26,25,23,0.1)] p-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D5A3D]">
                <Check className="w-4 h-4" aria-hidden="true" />
                <span>Order #{confirmedOrder.orderNumber} Confirmed</span>
              </div>
              <p className="text-sm text-[#1A1917] leading-relaxed">
                Thank you, <strong>{confirmedOrder.customerName}</strong>. We have
                queued your {confirmedOrder.itemCount} item(s) for{' '}
                {confirmedOrder.fulfillment === 'pickup'
                  ? 'Atelier Pickup (418 Linden Alley)'
                  : 'Local Courier Delivery'}
                .
              </p>
              <div className="pt-4 border-t border-[rgba(26,25,23,0.08)] flex justify-between text-sm">
                <span className="text-[#5E5B55]">Total Paid</span>
                <span className="font-mono font-semibold text-[#1A1917] tabular-nums">
                  ${confirmedOrder.total}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCloseDrawer}
                className="w-full mt-2 px-4 py-2.5 text-sm font-medium bg-[#1A1917] text-[#FAF9F6] rounded-md hover:bg-[#33302B] cursor-pointer"
              >
                Return to Storefront
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <p className="font-display text-xl text-[#1A1917]">
                Your bag is currently empty
              </p>
              <p className="text-sm text-[#5E5B55] max-w-xs mx-auto">
                Add items from our Friday pastry drop, configure a custom cake, or
                reserve a baking workshop seat.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#FFFFFF] rounded-lg border border-[rgba(26,25,23,0.1)] p-4 flex gap-4"
                >
                  <div className="w-20 h-16 rounded overflow-hidden shrink-0 border border-[rgba(26,25,23,0.08)]">
                    <ArtisanVisual variant={item.visual} className="w-full h-full" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold text-[#1A1917] leading-snug">
                        {item.name}
                      </h3>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="text-[#5E5B55] hover:text-[#1A1917] p-1 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-xs text-[#5E5B55] mt-0.5 line-clamp-2">
                      {item.subtitle}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-[rgba(26,25,23,0.16)] rounded bg-[#FAF9F6]">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          aria-label={`Decrease quantity of ${item.name}`}
                          className="p-1.5 text-[#1A1917] hover:bg-[#F2EFE9] cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-mono tabular-nums text-[#1A1917]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          aria-label={`Increase quantity of ${item.name}`}
                          className="p-1.5 text-[#1A1917] hover:bg-[#F2EFE9] cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-mono text-sm font-medium text-[#1A1917] tabular-nums">
                        ${item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Checkout Footer */}
        {!confirmedOrder && items.length > 0 && (
          <form
            onSubmit={handleCheckout}
            className="border-t border-[rgba(26,25,23,0.1)] bg-[#FFFFFF] px-6 py-5 space-y-4"
          >
            <div className="grid grid-cols-2 gap-2 p-1 bg-[#F2EFE9] rounded-md">
              <button
                type="button"
                onClick={() => setFulfillment('pickup')}
                className={`py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                  fulfillment === 'pickup'
                    ? 'bg-[#FFFFFF] text-[#1A1917] shadow-xs'
                    : 'text-[#5E5B55]'
                }`}
              >
                Atelier Pickup (Free)
              </button>
              <button
                type="button"
                onClick={() => setFulfillment('delivery')}
                className={`py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                  fulfillment === 'delivery'
                    ? 'bg-[#FFFFFF] text-[#1A1917] shadow-xs'
                    : 'text-[#5E5B55]'
                }`}
              >
                Local Courier (+$12)
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Your full name"
                aria-label="Your full name"
                className="px-3 py-2 text-xs bg-[#FAF9F6] border border-[rgba(26,25,23,0.16)] rounded-md text-[#1A1917]"
              />
              <input
                type="email"
                required
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                placeholder="Email for receipt"
                aria-label="Email for receipt"
                className="px-3 py-2 text-xs bg-[#FAF9F6] border border-[rgba(26,25,23,0.16)] rounded-md text-[#1A1917]"
              />
            </div>

            <div className="space-y-1.5 text-xs pt-1">
              <div className="flex justify-between text-[#5E5B55]">
                <span>Subtotal</span>
                <span className="font-mono tabular-nums">${subtotal}</span>
              </div>
              {deliveryFee > 0 && (
                <div className="flex justify-between text-[#5E5B55]">
                  <span>Local Courier</span>
                  <span className="font-mono tabular-nums">${deliveryFee}</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-semibold text-[#1A1917] pt-1.5 border-t border-[rgba(26,25,23,0.08)]">
                <span>Total</span>
                <span className="font-mono tabular-nums">${total}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-sm font-medium text-[#FAF9F6] bg-[#2D5A3D] hover:bg-[#22452F] rounded-md transition-colors cursor-pointer"
            >
              Place Order · ${total}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
