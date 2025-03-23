import { Layers2, Bot } from 'lucide-solid';

export type HeaderComponentType = {
  title: string,
  href: string,
  nested?: Array<HeaderComponentType & { icon: any }>
}

export const HEADER_SEGMENTS: HeaderComponentType[] = [
  {
    title: "Start",
    href: "/#start",
  },
  {
    title: "Services",
    href: "/services",
    nested: [
      {
        title: "Landing/Card",
        href: "/landing",
        icon: Layers2 
      },
      {
        title: "Telegram bot",
        href: "/tg-bot",
        icon: Bot
      }
    ]
  },
  {
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "Contacts",
    href: "/#contact",
  },
]

export const GLOBAL_SITE_HREF = "https://pureawake-studio.su"

export const RUSSIAN_SH: "ru" = "ru";
export const ENGLISH_SH: "en" = "en";

export type LanguageType = typeof RUSSIAN_SH | typeof ENGLISH_SH;

type LanguageListType = {
  name: string,
  fullName: string,
  value: LanguageType
}

export const LANGUAGE_LIST: LanguageListType[] = [
  {
    name: "Russian",
    fullName: "Russian language",
    value: "ru"
  },
  {
    name: "English",
    fullName: "English language",
    value: "en"
  }
]

export const PRICING_LIST = [
  {
    name: "Landing",
    price: {
      rub: "6000₽",
      usd: "$100"
    }
  },
  {
    name: "Business card website",
    price: {
      rub: "12000₽",
      usd: "$200"
    }
  },
  {
    name: "Telegram bot",
    price: {
      rub: "зависит от сложности",
      usd: "depends on complexity"
    }
  }
]

export const SERVICES_LIST = [
  {
    name: "Landing",
    description: "This is a page that will help you sell your services more effectively."
  },
  {
    name: "Business card website",
    description: "A website with all the information about your project"
  },
  {
    name: "Telegram bot",
    description: "Bots for your own needs or to attract clients"
  },
]