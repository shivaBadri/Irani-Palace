/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, LocationInfo, StartupKitItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'irani-chai',
    name: 'Irani Chai',
    price: 20,
    category: 'tea',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX8TE1Tthrmj5B_QGiRlLdKj7z71UaK3vc8JaJPVogbldVPS3p6BSjBhHnJfnZO4zeel-75BbdAuPpxjPoHt0lvCiK_0I3SLO_28qz9Bw4WnozTR57IOaPxl52sho2YstgoH31L0kOjivM0xB5XTZ3idn_z_B902agi5WSGV34gxQq6PAv_MyV6c5pv5C0yv10bgeNV8UuW4SFbYJTrdUGcNCtS18WJ7Wyjm7duIa_FJmhkWuumuEwuaDX4tNnzrdm-49NahOR_js',
    isSignature: true,
    description: 'Our timeless signature Irani Chai, a unique fusion of robust black tea and rich Mawa (Khoya), offering a sweet, creamy indulgence.',
    heritageStory: 'Irani Chai is a beloved treasure from the heart of India. Prepared using the authentic double-vat slow brewing technique. The water and tea leaves are simmered for 6 hours under a closed lid to form an intensely concentrated, fragrant decoction, while rich buffalo and cows milk is simmered slowly until it caramelizes. It is then combined with fresh Mawa (Khoya) to give its signature royal creaminess.',
    pairingSuggestion: 'Osmania Heritage Biscuits or Plain Bun Maska.',
    ingredients: ['Select Assam & Nilgiri CTC Leaves', 'Full-Cream Milk', 'Rich Mawa (Khoya)', 'Cardamom Infusion'],
    dietaryTags: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'irani-chai-malai',
    name: 'Irani Chai with Malai',
    price: 25,
    category: 'tea',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80',
    isSignature: true,
    description: 'Our traditional Irani Chai served with a heavy dollop of thick, fresh clotted cream (Malai) layered on top.',
    heritageStory: 'A luxurious delicacy reserved for royalty and true connoisseurs. The slow-boiled sweetened milk forms a thick, rich cream layer known as Malai. Our tea masters gently ladle a generous portion of this clotted cream over your piping hot cup of Irani Chai, adding an unmatched velvety mouthfeel.',
    pairingSuggestion: 'Osmania Biscuits or Plain Bun.',
    ingredients: ['Authentic Irani Chai Blend', 'Freshly Scalded Thick Cream (Malai)'],
    dietaryTags: ['Vegetarian']
  },
  {
    id: 'irani-black-chai',
    name: 'Irani Black Chai',
    price: 20,
    category: 'tea',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    description: 'A crisp, deep amber black tea brewed under closed lids to retain its intense aroma. Clean and energizing.',
    heritageStory: 'Also known in old Irani cafes as Suleimani or black decoction. This clear tea is prepared by boiling dust and leaf tea under tight seals, trapping all the essential oils and aroma. Lightly sweetened, it is a perfect mid-day refresher and digestive aid.',
    pairingSuggestion: 'Samosa or Puffs.',
    ingredients: ['Aromatically Brewed CTC Black Tea', 'Organic Sugar syrup'],
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free']
  },
  {
    id: 'boost',
    name: 'Boost',
    price: 25,
    category: 'tea',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80',
    description: 'A nourishing cup of creamy, hot milk whipped with premium chocolate-malt Boost powder. A favorite energy booster.',
    heritageStory: 'A absolute staple in popular corner tea stalls across Southern India. Made using hot frothy caramelized milk and genuine Boost malt powder, whipped vigorously to generate a rich, thick chocolatey foam.',
    pairingSuggestion: 'Osmania Biscuits.',
    ingredients: ['Hot Simmered Milk', 'Premium Boost Malt Powder', 'Sugar'],
    dietaryTags: ['Vegetarian']
  },
  {
    id: 'horlicks',
    name: 'Horlicks',
    price: 25,
    category: 'tea',
    image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=600&q=80',
    description: 'Comforting, hot malted milk made with premium Horlicks. Smooth, wholesome, and sweet.',
    heritageStory: 'Dating back to traditional health drinks served in vintage Indian cafes. Our tea master blends sweet condensed milk with roasted malt Horlicks powder, resulting in a rich, velvety beverage that brings back nostalgic memories.',
    pairingSuggestion: 'Osmania Biscuits.',
    ingredients: ['Sweetened Hot Milk', 'Authentic Horlicks Malt Powder'],
    dietaryTags: ['Vegetarian']
  },
  {
    id: 'coffee',
    name: 'Coffee',
    price: 25,
    category: 'tea',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    description: 'Rich, hot filter-style coffee prepared with strong chicory-blended coffee decoction and frothed milk.',
    heritageStory: 'Combining the boldness of dark-roasted coffee beans and chicory. Brewed using a traditional brass double-filter to extract a thick, dark concentrate, then poured from height to create a smooth, frothy head of milk.',
    pairingSuggestion: 'Osmania Biscuits or Veg Puff.',
    ingredients: ['Dark Roast Coffee Decoction', 'Hot Frothy Milk', 'Sugar'],
    dietaryTags: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'milk',
    name: 'Milk',
    price: 25,
    category: 'tea',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80',
    description: 'Warm, whole milk simmered slowly and sweetened with sugar. Rich in flavor and comfort.',
    heritageStory: 'For those who love simplicity. Prepared by slow boiling high-cream buffalo and cows milk, sweetened slightly to highlight the milk\'s natural caramelized sweetness.',
    pairingSuggestion: 'Osmania Biscuits or Plain Bun.',
    ingredients: ['Slow-simmered whole milk', 'Sugar'],
    dietaryTags: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'osmania-biscuits',
    name: 'Osmania Biscuits',
    price: 15,
    category: 'snacks',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLqEpf5-qFrITdHj32huVTwzafGeCA0sTrElZ-ocuXWVGasVt325EJk5upJoelV1SH-S0mJs-wf1GVl2jiTVXkXSlqbUTF_vRIAUKiGsGkfJW88AKN635Mym4Wk1wlZGaZDnzRYm4Wr1xle01SA9xO2x7yr1iqhF3MCIYwmLbccLIsJuzQ5ZlFg-pufFWaWJtreoV4IAJwBFNcZqEOfxhlK-On9RmNNp5XgeLWrqlLpJOcFTVFh7_9w4-Kp9CjTdaktktqIyhJVDo',
    isSignature: true,
    description: 'The legendary salt-sweet buttery biscuits of Hyderabad, baked daily to melt in your mouth.',
    heritageStory: 'Originally formulated at the royal palace under the last Nizam of Hyderabad, Osman Ali Khan. They feature a unique butter profile with a pinch of salt, making them the ultimate pairing with Irani Chai.',
    pairingSuggestion: 'Irani Chai (dip gently for 2 seconds).',
    ingredients: ['Refined Flour', 'Clarified Ghee', 'Milk Solids', 'Salt', 'Sugar'],
    dietaryTags: ['Vegetarian']
  },
  {
    id: 'other-biscuits',
    name: 'Other Biscuits',
    price: 15,
    category: 'snacks',
    image: 'https://images.unsplash.com/photo-1558961309-dbdf717a13d4?auto=format&fit=crop&w=600&q=80',
    description: 'A selection of traditional Irani café shortbreads, including fine almond and sweet butter rusks.',
    heritageStory: 'Baked inside clay brick ovens using old-world yeast and flour formulations. These biscuits are dry and crunchy, made specifically for absorbing the sweet condensed milk tea.',
    pairingSuggestion: 'Irani Chai or Coffee.',
    ingredients: ['Wheat Flour', 'Butter', 'Semolina', 'Fennel infusion'],
    dietaryTags: ['Vegetarian']
  },
  {
    id: 'big-samosa',
    name: 'Big Samosa',
    price: 20,
    category: 'snacks',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=80',
    description: 'Crispy golden triangular pastry stuffed with a spiced, savory potato and green pea filling.',
    heritageStory: 'The quintessential Indian snack. Our hand-rolled samosas are fried in clean oil until exceptionally flaky and golden, packed with boiled potatoes mashed with coriander seeds, ginger, and green chillies.',
    pairingSuggestion: 'Irani Black Chai or Irani Chai.',
    ingredients: ['Potato mash', 'Fine flour shell', 'Spices', 'Green Peas'],
    dietaryTags: ['Vegetarian', 'Vegan']
  },
  {
    id: 'small-samosa-onion',
    name: 'Small Samosa Onion',
    price: 15,
    category: 'snacks',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=80',
    description: 'Bite-sized, extra crispy samosas stuffed with a seasoned, translucent onion filling. Highly addictive.',
    heritageStory: 'A timeless street snack of Hyderabad. These mini-samosas feature a super thin, crunchy pastry sheet (patti) wrapped around spiced raw onions that cook slightly during deep frying, sweetening from within.',
    pairingSuggestion: 'Irani Chai (A match made in heaven).',
    ingredients: ['Slivered Onions', 'Crispy Patti Sheet', 'Garam Masala', 'Green Chillies'],
    dietaryTags: ['Vegetarian', 'Vegan']
  },
  {
    id: 'small-samosa-corn',
    name: 'Small Samosa Corn',
    price: 15,
    category: 'snacks',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=80',
    description: 'Crispy mini-samosas stuffed with a sweet and spicy golden corn and herb filling.',
    heritageStory: 'A modern, popular variation. Tender sweet corn kernels are mixed with pepper, fresh coriander, and a touch of cheese inside a thin crispy hand-folded triangle shell.',
    pairingSuggestion: 'Irani Chai.',
    ingredients: ['Sweet Corn', 'Coriander', 'Crisp Patti Sheet', 'Pepper'],
    dietaryTags: ['Vegetarian']
  },
  {
    id: 'veg-puff',
    name: 'Veg Puff',
    price: 25,
    category: 'snacks',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=80',
    description: 'Multilayered flaky puff pastry stuffed with a rich, spiced mixed vegetable masala.',
    heritageStory: 'A high-contrast snack of crisp, buttery baked layers on the outside and warm, savory vegetable curry (potatoes, carrots, beans) on the inside.',
    pairingSuggestion: 'Irani Chai or Coffee.',
    ingredients: ['Flaky Pastry Dough', 'Mixed Vegetables', 'Ginger-garlic paste', 'Spices'],
    dietaryTags: ['Vegetarian']
  },
  {
    id: 'egg-puff',
    name: 'Egg Puff',
    price: 30,
    category: 'snacks',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=80',
    description: 'Classic bakery puff pastry featuring half a boiled egg embedded in a savory onion masala gravy.',
    heritageStory: 'The ultimate tea-time snack for egg lovers. Freshly baked layers of dough puff up to create a golden shell around a boiled egg seasoned with pepper and rich caramelized onion gravy.',
    pairingSuggestion: 'Irani Black Chai.',
    ingredients: ['Boiled Egg', 'Flaky Puff Sheets', 'Onion Masala', 'Spices'],
    dietaryTags: ['Contains Eggs']
  },
  {
    id: 'chicken-puff',
    name: 'Chicken Puff',
    price: 35,
    category: 'snacks',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=80',
    description: 'Flaky baked golden pastry filled with a delicious, moist, shredded chicken tikka masala filling.',
    heritageStory: 'Our best-selling savory bake. Juicy chicken breast is shredded and slow-cooked with fresh ginger, garlic, tomatoes, and home-style garam masala before being enveloped in pastry sheets and baked crisp.',
    pairingSuggestion: 'Irani Chai.',
    ingredients: ['Shredded Chicken (Halal)', 'Flaky Puff Sheets', 'Ginger-Garlic', 'Tikka Spices'],
    dietaryTags: ['Halal']
  },
  {
    id: 'plain-bun',
    name: 'Plain Bun',
    price: 15,
    category: 'snacks',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBujIpi1LMsOl-oUn6BN5Y2qwBIR4CU_pDn9PrXfpGpK5QEy_RhJezcn0M_QlDdNqbJhetjae8uv3-pLuyuBxcQzj-sXga5G7Fidz0mlYhz_28nXd6rGXO7miC93jE5IoMKS9laJdHrpG5mnCvaI-tV3Vcq0h5BCn98p9onbem5TuDDlDrRoTGosOgSBNik3J_BTQc-ppF1jkpH-uAbSWWyrS3wA4NbSe2WNrS8Hg87lX9gkefGYetuyu3QqTUWLSm3SJfVLOzQRFI',
    description: 'Soft, golden-baked sweet burger bun, fresh from our stone ovens. Simple and soft.',
    heritageStory: 'Baked daily using high-quality local wheat and real milk, giving it a fluffy texture and a hint of sweet yeast flavor. Simple, traditional, and perfect for dipping.',
    pairingSuggestion: 'Dip in hot Irani Chai.',
    ingredients: ['Wheat Flour', 'Yeast', 'Sugar', 'Milk Wash'],
    dietaryTags: ['Vegetarian']
  },
  {
    id: 'malai-bun',
    name: 'Malai Bun',
    price: 30,
    category: 'snacks',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBujIpi1LMsOl-oUn6BN5Y2qwBIR4CU_pDn9PrXfpGpK5QEy_RhJezcn0M_QlDdNqbJhetjae8uv3-pLuyuBxcQzj-sXga5G7Fidz0mlYhz_28nXd6rGXO7miC93jE5IoMKS9laJdHrpG5mnCvaI-tV3Vcq0h5BCn98p9onbem5TuDDlDrRoTGosOgSBNik3J_BTQc-ppF1jkpH-uAbSWWyrS3wA4NbSe2WNrS8Hg87lX9gkefGYetuyu3QqTUWLSm3SJfVLOzQRFI',
    isSignature: true,
    description: 'Our fresh baked bun sliced open and stuffed with a rich, thick layer of fresh sweet Malai (clotted milk cream).',
    heritageStory: 'A legendary Irani café treat. We slice our warm, sweet hearth-baked buns and spread a luscious, thick layer of sweet clotted cream (Malai) mixed with a dusting of fine sugar, creating a creamy dessert-sandwich.',
    pairingSuggestion: 'Irani Chai.',
    ingredients: ['Hearth-Baked Sweet Bun', 'Fresh Sweet Clotted Milk Cream (Malai)', 'Fine Sugar'],
    dietaryTags: ['Vegetarian']
  }
];

export const CAFE_LOCATIONS: LocationInfo[] = [
  {
    id: 'telangana-mancherial',
    city: 'MANCHERIAL',
    name: 'Irani Palace Mancherial',
    address: 'Station Road, Near Railway Flyover, Mancherial, Telangana 504208, India',
    phone: '+91 8008181919',
    hours: 'Monday – Sunday: 6:00 AM – 11:30 PM',
    mapEmbed: 'https://maps.google.com/maps?q=Mancherial,%20Telangana&t=&z=14&ie=UTF8&iwloc=&output=embed'
  },
  {
    id: 'telangana-kalwakurthi',
    city: 'KALWAKURTHI',
    name: 'Irani Palace Kalwakurthi',
    address: 'Main Road, Near Bus Stand Complex, Kalwakurthi, Telangana 509324, India',
    phone: '+91 8008181919',
    hours: 'Monday – Sunday: 6:00 AM – 11:30 PM',
    mapEmbed: 'https://maps.google.com/maps?q=Kalwakurthi,%20Telangana&t=&z=14&ie=UTF8&iwloc=&output=embed'
  }
];

export const RESERVATION_ZONES = [
  {
    id: 'courtyard',
    name: 'Irani Palace Royal Lounge',
    description: 'Dine under brass lanterns, framed by beautiful off-white marble-topped tables and Persian carpets.',
    extraCharge: 0
  },
  {
    id: 'brass-lounge',
    name: 'The Samovar Lounge',
    description: 'Experience tea-making up close next to our historical copper handis and simmering milk vats.',
    extraCharge: 0
  }
];

export const TIME_SLOTS = [
  '6:00 AM',
  '7:30 AM',
  '9:00 AM',
  '10:30 AM',
  '12:00 PM',
  '1:30 PM',
  '3:00 PM',
  '4:30 PM',
  '6:00 PM',
  '7:30 PM',
  '9:00 PM',
  '10:30 PM'
];

export const STARTUP_KIT_ITEMS: StartupKitItem[] = [
  { id: 'sk-1', name: 'Cup Heater', qty: 1, category: 'Kitchen Equipments' },
  { id: 'sk-2', name: 'Weighing Machine', qty: 1, category: 'Kitchen Equipments' },
  { id: 'sk-3', name: 'Microwave Oven', qty: 1, category: 'Kitchen Equipments' },
  { id: 'sk-4', name: 'Display Case', qty: 1, category: 'Kitchen Equipments' },
  { id: 'sk-5', name: 'High Pressure Gas Stoves', qty: 2, category: 'Kitchen Equipments' },
  { id: 'sk-6', name: 'Irani Milk Heating Handis', qty: 2, category: 'Kitchen Equipments' },
  { id: 'sk-7', name: 'Irani Decoction Bowls (Copper)', qty: 2, category: 'Kitchen Equipments' },
  { id: 'sk-8', name: 'Filter Cloths', qty: 2, category: 'Kitchen Equipments' },
  { id: 'sk-9', name: 'Scissor', qty: 1, category: 'Kitchen Equipments' },
  { id: 'sk-10', name: 'Gas Lighter', qty: 1, category: 'Kitchen Equipments' },
  { id: 'sk-11', name: 'Tea Filters', qty: 2, category: 'Kitchen Equipments' },
  { id: 'sk-12', name: 'Table Spoons', qty: 8, category: 'Kitchen Equipments' },
  { id: 'sk-13', name: 'Plastic Containers (10 Kg)', qty: 3, category: 'Kitchen Equipments' },
  { id: 'sk-14', name: 'Dust Bins', qty: 2, category: 'Kitchen Equipments' },
  { id: 'sk-15', name: 'Water Mugs', qty: 3, category: 'Kitchen Equipments' },
  { id: 'sk-16', name: 'Tea Serving Trays', qty: 3, category: 'Kitchen Equipments' },
  { id: 'sk-17', name: 'Steel Ladles', qty: 2, category: 'Kitchen Equipments' },
  { id: 'sk-18', name: 'Milk Tray', qty: 3, category: 'Kitchen Equipments' },
  { id: 'sk-19', name: 'Garbage Covers', qty: 20, category: 'Packaging & Materials' },
  { id: 'sk-20', name: 'Carry Bags (Small)', qty: 5, category: 'Packaging & Materials' },
  { id: 'sk-21', name: 'Carry Bags (Big)', qty: 5, category: 'Packaging & Materials' },
  { id: 'sk-22', name: 'Tea Parcel Small Silver Covers', qty: 5, category: 'Packaging & Materials' },
  { id: 'sk-23', name: 'Tea Parcel Big Silver Covers', qty: 5, category: 'Packaging & Materials' },
  { id: 'sk-24', name: 'Rubber Packets', qty: 2, category: 'Packaging & Materials' },
  { id: 'sk-25', name: 'Snacks Parcel Covers', qty: 5, category: 'Packaging & Materials' },
  { id: 'sk-26', name: 'Tissue Packet', qty: 1, category: 'Packaging & Materials' },
  { id: 'sk-27', name: 'Parcel Cups 3', qty: 3, category: 'Packaging & Materials' },
  { id: 'sk-28', name: 'Complimentary Tea Powder (20kg)', qty: 1, category: 'Starter Consumables' },
  { id: 'sk-29', name: 'Complimentary Sugar (20kg)', qty: 1, category: 'Starter Consumables' },
  { id: 'sk-30', name: 'Boost', qty: 1, category: 'Starter Consumables' },
  { id: 'sk-31', name: 'Horlicks', qty: 1, category: 'Starter Consumables' },
  { id: 'sk-32', name: 'Instant Coffee Mix', qty: 1, category: 'Starter Consumables' },
  { id: 'sk-33', name: 'Ceramic Tea Cups', qty: 200, category: 'Starter Consumables' },
  { id: 'sk-34', name: 'Ceramic Tea Saucers', qty: 200, category: 'Starter Consumables' },
  { id: 'sk-35', name: 'Tea Master Aprons', qty: 1, category: 'Uniform & Utilities' },
  { id: 'sk-36', name: 'Master Head Caps Packet', qty: 1, category: 'Uniform & Utilities' },
  { id: 'sk-37', name: 'Dust Cloths', qty: 10, category: 'Uniform & Utilities' },
  { id: 'sk-38', name: 'T-Shirts And Aprons 3', qty: 3, category: 'Uniform & Utilities' }
];
