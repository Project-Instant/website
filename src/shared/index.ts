import { Layers2, Bot } from 'lucide-solid';

export type HeaderComponentType = {
  title: string,
  href: string,
  nested?: Array<HeaderComponentType & { icon: any, description?: string }>
}

export const HEADER_SEGMENTS: HeaderComponentType[] = [
  {
    title: "Start",
    href: "/#start",
  },
  {
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "Wiki",
    href: "/wiki",
    nested: [
      {
        title: "Landing/Card",
        href: "/landing",
        icon: Layers2,
        description: "About landing and card websites"
      },
      {
        title: "Telegram bot",
        href: "/tg-bot",
        icon: Bot,
        description: "About telegram bots"
      }
    ]
  },
  {
    title: "Contacts",
    href: "/contacts",
  },
]

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
    price: "100$"
  },
  {
    name: "Business card website",
    price: "200$"
  },
  {
    name: "Telegram bot",
    price: "depends on complexity"
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