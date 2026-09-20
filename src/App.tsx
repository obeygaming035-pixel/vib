import React, { useState } from 'react';
import { Header, ClientPage } from './components/client/Header';
import { Footer } from './components/client/Footer';
import { ClientHomePage } from './components/client/ClientHomePage';
import { ClientProfilesPage } from './components/client/ClientProfilesPage';
import { ClientVPOverviewPage } from './components/client/ClientVPOverviewPage';
import { ClientIndianVPPage } from './components/client/ClientIndianVPPage';
import { ClientServicesPage } from './components/client/ClientServicesPage';
import { ClientRankupPage } from './components/client/ClientRankupPage';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { DiscordModal } from './components/home/DiscordModal';
import { EscrowModal } from './components/home/EscrowModal';
import { VP_PACKAGES } from './data/packages';
import { Currency, CartItem } from './types';
import { soundFx } from './utils/audio';

export default function App() {
  const getInitialPage = (): ClientPage => {
    try {
      const params = new URLSearchParams(window.location.search);
      const p = params.get('page') as ClientPage;
      if (p && ['home', 'vp', 'vp-catalog', 'services', 'rankup'].includes(p)) {
        return p;
      }
    } catch {}
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<ClientPage>(getInitialPage);
  const [currency, setCurrency] = useState<Currency>('INR');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  React.useEffect(() => {
    const onPopState = () => {
      const params = new URLSearchParams(window.location.search);
      const p = (params.get('page') as ClientPage) || 'home';
      if (['home', 'vp', 'vp-catalog', 'services', 'rankup'].includes(p)) {
        setCurrentPage(p);
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Modals state
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutCustomItem, setCheckoutCustomItem] = useState<
    { title: string; priceINR: number } | undefined
  >(undefined);
  const [isDiscordModalOpen, setIsDiscordModalOpen] = useState(false);
  const [isEscrowModalOpen, setIsEscrowModalOpen] = useState(false);

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

  const handleOpenCustomCheckout = (title: string, price: number) => {
    setCheckoutCustomItem({ title, priceINR: price });
    setIsCheckoutOpen(true);
  };

  const handleProceedFromCart = () => {
    if (cartItems.length === 0) return;
    const totalINR = cartItems.reduce((sum, item) => sum + item.priceINR * item.quantity, 0);
    const itemNames = cartItems.map((i) => `${i.title} (x${i.quantity})`).join(', ');
    setIsCartOpen(false);
    handleOpenCustomCheckout(`Cart Checkout: ${itemNames}`, totalINR);
  };

  const handleNavigate = (page: ClientPage) => {
    soundFx.playClickSound();

    if (page === 'community' || page === 'support') {
      setIsDiscordModalOpen(true);
      return;
    }

    if (page === 'profiles') {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAuth = (mode: 'login' | 'signup') => {
    handleOpenCustomCheckout(mode === 'login' ? 'Account Portal Login' : 'New User Registration', 0);
  };

  return (
    <div className="min-h-screen bg-[#07070d] text-white flex flex-col justify-between relative overflow-x-hidden font-inter selection:bg-fuchsia-600 selection:text-white">
      {/* Top Header Navigation matching exact mockups */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        currency={currency}
        onCurrencyChange={setCurrency}
        cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAuth={handleAuth}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled((prev) => !prev)}
        onSearch={(q) => {
          setSearchQuery(q);
          setCurrentPage('home');
        }}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <ClientHomePage
            currency={currency}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onOpenCheckout={handleOpenCustomCheckout}
          />
        )}

        {currentPage === 'profiles' && (
          <ClientProfilesPage
            currency={currency}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onOpenCheckout={handleOpenCustomCheckout}
            searchQuery={searchQuery}
          />
        )}

        {currentPage === 'vp' && (
          <ClientVPOverviewPage
            currency={currency}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onOpenCheckout={handleOpenCustomCheckout}
          />
        )}

        {currentPage === 'vp-catalog' && (
          <ClientIndianVPPage
            currency={currency}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onOpenCheckout={handleOpenCustomCheckout}
          />
        )}

        {currentPage === 'services' && (
          <ClientServicesPage
            currency={currency}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onOpenCheckout={handleOpenCustomCheckout}
          />
        )}

        {currentPage === 'rankup' && (
          <ClientRankupPage
            currency={currency}
            onNavigate={handleNavigate}
            onOpenCheckout={handleOpenCustomCheckout}
          />
        )}
      </main>

      {/* Client Footer matching all mockups */}
      <Footer onNavigate={handleNavigate} />

      {/* Slide-over Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onProceedToCheckout={handleProceedFromCart}
        currency={currency}
      />

      {/* Checkout / Payment Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => {
          setIsCheckoutOpen(false);
          setCheckoutCustomItem(undefined);
        }}
        pkg={VP_PACKAGES[0]}
        customItem={checkoutCustomItem}
        currency={currency}
      />

      {/* Community Discord Modal */}
      <DiscordModal
        isOpen={isDiscordModalOpen}
        onClose={() => setIsDiscordModalOpen(false)}
      />

      {/* Escrow Middleman Modal */}
      <EscrowModal
        isOpen={isEscrowModalOpen}
        onClose={() => setIsEscrowModalOpen(false)}
      />
    </div>
  );
}