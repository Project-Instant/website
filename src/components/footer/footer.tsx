import { GradientSeparator } from "#ui/gradient-separator"
import type { Component } from "solid-js"
import LogotypeWthtBg from "#assets/images/miniatures/logotype_wtht_bg.png"

export const Footer: Component = () => {
  return (
    <div class="flex flex-col wrapper relative gap-12 justify-between overflow-hidden mt-6 pt-16 pb-8">
      <GradientSeparator direction="top" />
    <div
      class="grid grid-cols-1 sm:grid-cols-3 w-full gap-6 lg:grid-cols-4 lg:grid-rows-1"
    >
      <a href="/" class="select-none">
        <div class="flex justify-start items-center gap-x-1 py-2">
          <img src={LogotypeWthtBg.src} class="w-[36px] h-[36px]" width={36} height={36} alt="" />
          <p class="text-2xl mono-tag uppercase text-white leading-3 font-semibold">
            Instant
          </p>
        </div>
      </a>
      {/* <div class="flex flex-col items-start lg:items-center gap-y-2 w-full">
        <div class="flex flex-col items-start gap-y-2">
          <p class="uppercase mono-tag text-cod-gray-400 text-lg">
            LEGAL
          </p>
          <a href="/privacy">
            <p class="text-md text-cod-gray-50">Privacy</p>
          </a>
        </div>
      </div> */}
      <div class="flex flex-col items-start lg:items-center gap-y-2 w-full">
        <div class="flex flex-col items-start gap-y-2">
          <p class="uppercase mono-tag text-cod-gray-400 text-lg">
            Ресурсы
          </p>
          <a href="/portfolio">
            <p class="text-md text-cod-gray-50">Портфолио</p>
          </a>
          <a href="/#available-services">
            <p class="text-md text-cod-gray-50">Услуги</p>
          </a>
        </div>
      </div>
      <div class="flex flex-col items-start lg:items-center gap-y-2 w-full">
        <div class="flex flex-col items-start gap-y-2">
          <p class="uppercase mono-tag text-cod-gray-400 text-lg">
            Связь
          </p>
          <a href="mailto:piterschimpson@gmail.com">
            <p class="text-md text-cod-gray-50">Email</p>
          </a>
          <a href="https://t.me/instant_project" target="_blank">
            <p class="text-md text-cod-gray-50">Telegram</p>
          </a>
        </div>
      </div>
    </div>
      <div class="flex items-center justify-center w-full">
        <span class="text-cod-gray-300 text-base mono-tag font-medium">
         © {new Date().getFullYear()} Instant. Все права защищены.
        </span>
      </div>
    </div>
  )
}