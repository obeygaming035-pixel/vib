import { Currency } from '../types';

export const formatCurrencyPrice = (inr: number, currency: Currency = 'INR'): string => {
  if (currency === 'USD') return `$${Math.round(inr * 0.012).toLocaleString('en-US')}`;
  if (currency === 'EUR') return `€${Math.round(inr * 0.011).toLocaleString('en-US')}`;
  return `₹${inr.toLocaleString('en-IN')}`;
};