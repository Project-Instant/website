import { GradientSeparator } from "#ui/gradient-separator"
import type { Component } from "solid-js"

export const Footer: Component = () => {
  return (
    <div
      class="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:grid-cols-4 lg:grid-rows-1 py-16 wrapper relative overflow-hidden w-full"
    >
      <GradientSeparator direction="top" />
      <a href="/" class="select-none">
        <div class="flex justify-start items-center gap-x-1 py-2">
          <img src="/white_var_wthbg.png" class="w-[36px] h-[36px]" width={36} height={36} alt="" />
          <p class="text-2xl mono-tag uppercase text-white leading-3 font-semibold">
            Instant
          </p>
        </div>
      </a>
      <div class="flex flex-col items-start lg:items-center gap-y-2 w-full">
        <div class="flex flex-col items-start gap-y-2">
          <p class="uppercase mono-tag text-cod-gray-400 text-lg">
            LEGAL
          </p>
          <a href="/privacy">
            <p class="text-md text-cod-gray-50">Privacy</p>
          </a>
        </div>
      </div>
      <div class="flex flex-col items-start lg:items-center gap-y-2 w-full">
        <div class="flex flex-col items-start gap-y-2">
          <p class="uppercase mono-tag text-cod-gray-400 text-lg">
            RESOURCES
          </p>
          <a href="/portfolio">
            <p class="text-md text-cod-gray-50">Portfolio</p>
          </a>
          <a href="#services">
            <p class="text-md text-cod-gray-50">Services</p>
          </a>
        </div>
      </div>
      <div class="flex flex-col items-start lg:items-center gap-y-2 w-full">
        <div class="flex flex-col items-start gap-y-2">
          <p class="uppercase mono-tag text-cod-gray-400 text-lg">
            Contacts
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
  )
}