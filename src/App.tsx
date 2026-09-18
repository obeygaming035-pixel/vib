import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/home/HomePage';
import { DigitalProfilesPage } from './components/profiles/DigitalProfilesPage';
import { VPPacksPage } from './components/vp/VPPacksPage';
import { VPSelector } from './components/VPSelector';
import { CartDrawer } from './components/CartDrawer';
import { VP_PACKAGES } from './data/packages';
import { Currency, AppPage, CartItem } from './types';
import { CheckoutModal } from './components/CheckoutModal';
import { DiscordModal } from './components/home/DiscordModal';
import { EscrowModal } from './components/home/EscrowModal';
import { soundFx } from './utils/audio';

export default function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('home');
  const [currency, setCurrency] = useState<Currency>('INR');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [vpInitialIndex, setVpInitialIndex] = useState(0);
  const [use3DVPSelector, setUse3DVPSelector] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Shopping Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Modals state
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutCustomItem, setCheckoutCustomItem] = useState<
    { title: string; priceINR: number } | undefined
  >(undefined);
  const [isDiscordModalOpen, setIsDiscordModalOpen] = useState(false);
  const [isEscrowModalOpen, setIsEscrowModalOpen] = useState(false);

  // Active theme color for VP page
  const [currentThemeColor, setCurrentThemeColor] = useState(VP_PACKAGES[0].theme.primaryColor);

  const handleAddToCart = (item: CartItem) => {
    soundFx.playClickSound();
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, item];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    soundFx.playClickSound();
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleNavigate = (page: AppPage, pkgIndex?: number) => {
    soundFx.playClickSound();

    if (page === 'support' || page === 'community') {
      setIsDiscordModalOpen(true);
      return;
    }

    if (page === 'vp') {
      if (pkgIndex !== undefined) {
        setVpInitialIndex(pkgIndex);
        setCurrentThemeColor(VP_PACKAGES[pkgIndex].theme.primaryColor);
        setUse3DVPSelector(true);
      } else {
        setUse3DVPSelector(false);
      }
      setCurrentPage('vp');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (page === 'profiles' || page === 'marketplace') {
      setCurrentPage('profiles');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (page === 'rankup') {
      handleOpenCustomCheckout('Competitive Rankup Boost Service', 2499);
      return;
    }

    if (page === 'services') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById('services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    // Default to home
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCustomCheckout = (title?: string, price?: number) => {
    if (title && price) {
      setCheckoutCustomItem({ title, priceINR: price });
    } else {
      setCheckoutCustomItem(undefined);
    }
    setIsCheckoutOpen(true);
  };

  const handleProceedFromCart = () => {
    if (cartItems.length === 0) return;
    const totalINR = cartItems.reduce((sum, item) => sum + item.priceINR * item.quantity, 0);
    const itemNames = cartItems.map((i) => `${i.title} (x${i.quantity})`).join(', ');
    setIsCartOpen(false);
    handleOpenCustomCheckout(`Cart Order: ${itemNames}`, totalINR);
  };

  return (
    <div className="min-h-screen bg-[#070a10] text-white flex flex-col justify-between relative overflow-x-hidden font-chakra selection:bg-fuchsia-600 selection:text-white">
      {/* Top Header Navigation */}
      <Navbar
        currentThemeColor={currentThemeColor}
        currency={currency}
        onCurrencyChange={setCurrency}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled((prev) => !prev)}
        onOpenCheckout={(title, price) => handleOpenCustomCheckout(title, price)}
        activePage={currentPage}
        onNavigate={handleNavigate}
        cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onSearchQuery={(q) => {
          setSearchQuery(q);
          setCurrentPage('profiles');
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            currency={currency}
            onNavigate={handleNavigate}
            onOpenCheckout={handleOpenCustomCheckout}
            onAddToCart={handleAddToCart}
            onOpenDiscordModal={() => setIsDiscordModalOpen(true)}
            onOpenEscrowModal={() => setIsEscrowModalOpen(true)}
          />
        )}

        {currentPage === 'profiles' && (
          <DigitalProfilesPage
            currency={currency}
            onNavigateHome={() => handleNavigate('home')}
            onAddToCart={handleAddToCart}
            onDirectBuy={handleOpenCustomCheckout}
            initialSearchQuery={searchQuery}
          />
        )}

        {currentPage === 'vp' && (
          use3DVPSelector ? (
            <div className="w-full flex flex-col justify-center">
              <div className="max-w-7xl mx-auto px-4 py-3 w-full flex justify-end">
                <button
                  onClick={() => setUse3DVPSelector(false)}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-chakra font-bold text-gray-300 hover:text-white cursor-pointer"
                >
                  ← Back to VP Pack Catalog
                </button>
              </div>
              <VPSelector
                currency={currency}
                initialIndex={vpInitialIndex}
                onActiveChange={(pkg) => setCurrentThemeColor(pkg.theme.primaryColor)}
              />
            </div>
          ) : (
            <VPPacksPage
              currency={currency}
              onNavigateHome={() => handleNavigate('home')}
              onAddToCart={handleAddToCart}
              onDirectBuy={handleOpenCustomCheckout}
              onSwitchTo3DStage={() => setUse3DVPSelector(true)}
            />
          )
        )}
      </main>

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onProceedToCheckout={handleProceedFromCart}
        currency={currency}
      />

      {/* Global Modals */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => {
          setIsCheckoutOpen(false);
          setCheckoutCustomItem(undefined);
        }}
        pkg={VP_PACKAGES[vpInitialIndex]}
        customItem={checkoutCustomItem}
        currency={currency}
      />

      <DiscordModal
        isOpen={isDiscordModalOpen}
        onClose={() => setIsDiscordModalOpen(false)}
      />

      <EscrowModal
        isOpen={isEscrowModalOpen}
        onClose={() => setIsEscrowModalOpen(false)}
      />
    </div>
  );
}