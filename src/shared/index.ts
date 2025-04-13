import { Layers2, Bot } from 'lucide-solid';

export type HeaderComponentType = {
  title: string,
  href: string,
  nested?: Array<HeaderComponentType & { icon: any, description?: string }>
}

export const HEADER_SEGMENTS: HeaderComponentType[] = [
  {
    title: "О нас",
    href: "/#about",
  },
  {
    title: "Портфолио",
    href: "/portfolio",
  },
  {
    title: "Справочник",
    href: "/wiki",
    nested: [
      {
        title: "Лендинг",
        href: "/landing",
        icon: Layers2,
        description: "Немного теории о лендингах"
      },
      {
        title: "Телеграм-бот",
        href: "/tg-bot",
        icon: Bot,
        description: "Зачем нужны тг-боты"
      }
    ]
  },
  {
    title: "Связаться",
    href: "/#contacts",
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
    name: "Лендинг",
    price: "от 14000 RUB"
  },
  {
    name: "Одностраничный сайт",
    price: "от 6000 RUB"
  },
  {
    name: "Телеграм-бот",
    price: "от 6000 RUB"
  }
]

export const SERVICES_LIST = [
  {
    name: "Лендинг",
    description: "This is a page that will help you sell your services more effectively."
  },
  {
    name: "Одностраничник",
    description: "A website with all the information about your project"
  },
  {
    name: "Телеграм-бот",
    description: "Bots for your own needs or to attract clients"
  },
]