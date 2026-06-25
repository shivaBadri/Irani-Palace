/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'tea' | 'snacks' | 'mains' | 'desserts';
  image: string;
  isSignature?: boolean;
  availableTimeText?: string;
  heritageStory: string;
  pairingSuggestion: string;
  ingredients: string[];
  dietaryTags: string[];
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  guestCount: number;
  zone: string;
  specialRequests?: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}

export interface LocationInfo {
  id: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapEmbed?: string;
}

export interface StartupKitItem {
  id: string;
  name: string;
  qty: number;
  category: 'Kitchen Equipments' | 'Packaging & Materials' | 'Starter Consumables' | 'Uniform & Utilities';
}

