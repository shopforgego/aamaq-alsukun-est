import { StoreConfig } from '../types/store';

export const storeConfig: StoreConfig = {
  storeNameAr: import.meta.env.VITE_STORE_NAME_AR || "متجر أعماق السكون للقهوة والمنزل",
  storeNameEn: import.meta.env.VITE_STORE_NAME_EN || "Aamaq Al Sukun Coffee & Home",
  companyNameAr: import.meta.env.VITE_COMPANY_NAME_AR || "مؤسسة أعماق السكون",
  companyNameEn: import.meta.env.VITE_COMPANY_NAME_EN || "Aamaq Alsukun Establishment",
  taglineAr: import.meta.env.VITE_TAGLINE_AR || "أدوات ومكائن القهوة المختصة ومستلزمات الضيافة والمنزل العصري",
  taglineEn: import.meta.env.VITE_TAGLINE_EN || "Specialty Coffee Brewing Tools & Modern Home Living",
  cr: import.meta.env.VITE_COMMERCIAL_REGISTRATION || "7055092204",
  taxNumber: import.meta.env.VITE_TAX_NUMBER || "310550922040003",
  shortAddress: import.meta.env.VITE_NATIONAL_ADDRESS_SHORT || "JHEA2569",
  city: import.meta.env.VITE_CITY || "جدة",
  district: import.meta.env.VITE_DISTRICT || "حي الشرقية",
  fullAddress: import.meta.env.VITE_FULL_ADDRESS || "المملكة العربية السعودية - جدة - حي الشرقية - الرمز البريدي JHEA2569",
  phone: import.meta.env.VITE_CONTACT_PHONE || "0559946358",
  whatsapp: import.meta.env.VITE_CONTACT_WHATSAPP || "966559946358",
  email: import.meta.env.VITE_CONTACT_EMAIL || "aamaqalsukun@gmail.com",
  supportHours: import.meta.env.VITE_SUPPORT_HOURS || "السبت - الخميس: 9:00 ص - 10:00 م",
  currency: import.meta.env.VITE_CURRENCY || "SAR",
  currencySymbol: import.meta.env.VITE_CURRENCY_SYMBOL || "ر.س",
  freeShippingThreshold: Number(import.meta.env.VITE_FREE_SHIPPING_THRESHOLD) || 200,
  shippingCost: Number(import.meta.env.VITE_SHIPPING_COST) || 25,
};
