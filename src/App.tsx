import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/home/HomePage';
import { VPSelector } from './components/VPSelector';
import { VP_PACKAGES } from './data/packages';
import { Currency, AppPage } from './types';
import { CheckoutModal } from './components/CheckoutModal';
import { DiscordModal } from './components/home/DiscordModal';
import { EscrowModal } from './components/home/EscrowModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('home');
  const [currency, setCurrency] = useState<Currency>('INR');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [vpInitialIndex, setVpInitialIndex] = useState(0);

  // Modals state
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutCustomItem, setCheckoutCustomItem] = useState<
    { title: string; priceINR: number } | undefined
  >(undefined);
  const [isDiscordModalOpen, setIsDiscordModalOpen] = useState(false);
  const [isEscrowModalOpen, setIsEscrowModalOpen] = useState(false);

  // Active theme color for VP page
  const [currentThemeColor, setCurrentThemeColor] = useState(VP_PACKAGES[0].theme.primaryColor);

  const handleNavigate = (page: AppPage, pkgIndex?: number) => {
    if (page === 'vp') {
      if (pkgIndex !== undefined) {
        setVpInitialIndex(pkgIndex);
        setCurrentThemeColor(VP_PACKAGES[pkgIndex].theme.primaryColor);
      }
      setCurrentPage('vp');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (page === 'home') {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (page === 'support') {
      setIsDiscordModalOpen(true);
      return;
    }

    // Anchor sections on homepage: marketplace, services, experience, trading-club
    if (currentPage !== 'home') {
      setCurrentPage('home');
    }

    setTimeout(() => {
      const targetId = page === 'trading-club' ? 'trading-club' : page;
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleOpenCustomCheckout = (title?: string, price?: number) => {
    if (title && price) {
      setCheckoutCustomItem({ title, priceINR: price });
    } else {
      setCheckoutCustomItem(undefined);
    }
    setIsCheckoutOpen(true);
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
        onOpenCheckout={() => handleOpenCustomCheckout()}
        activePage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area: Switches between full long-scroll Homepage and dedicated VP Selector */}
      <main className="flex-1 w-full">
        {currentPage === 'home' ? (
          <HomePage
            currency={currency}
            onNavigate={handleNavigate}
            onOpenCheckout={handleOpenCustomCheckout}
            onOpenDiscordModal={() => setIsDiscordModalOpen(true)}
            onOpenEscrowModal={() => setIsEscrowModalOpen(true)}
          />
        ) : (
          <div className="w-full flex flex-col justify-center">
            <VPSelector
              currency={currency}
              initialIndex={vpInitialIndex}
              onActiveChange={(pkg) => setCurrentThemeColor(pkg.theme.primaryColor)}
            />
          </div>
        )}
      </main>

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
