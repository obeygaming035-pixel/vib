import React from 'react';
import { X, Trash2, ShieldCheck, ArrowRight, ShoppingBag } from 'lucide-react';
import { CartItem, Currency } from '../types';
import { formatCurrencyPrice } from '../utils/format';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onProceedToCheckout: () => void;
  currency: Currency;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearCart,
  onProceedToCheckout,
  currency,
}) => {
  // Close on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const totalINR = items.reduce((sum, item) => sum + item.priceINR * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Shopping Cart"
          className="w-screen max-w-md bg-[#080c14] border-l border-fuchsia-500/25 flex flex-col shadow-2xl relative"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#0a0f1c]">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-fuchsia-400" />
              <h2 className="font-chakra font-bold text-lg text-white">Your Cart</h2>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-fuchsia-600/30 text-fuchsia-300 border border-fuchsia-500/30">
                {items.reduce((s, i) => s + i.quantity, 0)} items
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close cart drawer"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-3.5">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-400 space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-gray-500" />
                </div>
                <div>
                  <p className="font-chakra font-bold text-lg text-gray-300">Your cart is empty</p>
                  <p className="text-xs text-gray-500 mt-1">Explore our verified Digital Profiles or VP Packs to add items.</p>
                </div>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-[#0e1424] border border-white/10 hover:border-fuchsia-500/40 transition-all flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {item.image && (
                      <div className="w-12 h-12 rounded-lg bg-black/40 border border-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-center"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    <div className="min-w-0">
                      <h4 className="font-chakra font-bold text-sm text-white truncate group-hover:text-fuchsia-300 transition-colors">
                        {item.title}
                      </h4>
                      {item.subtitle && (
                        <p className="text-[11px] text-gray-400 truncate">{item.subtitle}</p>
                      )}
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-mono font-bold text-xs text-fuchsia-400">
                          {formatCurrencyPrice(item.priceINR, currency)}
                        </span>
                        {item.quantity > 1 && (
                          <span className="text-[10px] text-gray-400">x{item.quantity}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onRemoveItem(item.id)}
                    aria-label={`Remove ${item.title} from cart`}
                    className="min-w-[40px] min-h-[40px] flex items-center justify-center p-2 text-gray-500 hover:text-rose-400 rounded-lg hover:bg-rose-500/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer / Summary */}
          {items.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-[#0a0f1c] space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400 font-rajdhani font-semibold">Subtotal</span>
                <span className="text-xl font-bold font-chakra text-white">
                  {formatCurrencyPrice(totalINR, currency)}
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span>Protected by VIB Escrow &amp; Replacement Guarantee.</span>
              </div>

              <button
                type="button"
                onClick={onProceedToCheckout}
                className="w-full min-h-[44px] py-3 rounded-xl font-chakra font-bold text-sm text-white flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-98 cursor-pointer shadow-[0_0_20px_rgba(192,38,211,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #c026d3 50%, #9333ea 100%)',
                }}
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onClearCart}
                className="w-full min-h-[36px] flex items-center justify-center text-center text-xs text-gray-400 hover:text-gray-200 transition-colors cursor-pointer py-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};