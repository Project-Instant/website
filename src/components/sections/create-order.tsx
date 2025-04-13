import { Noise } from "#ui/noise"
import type { Component } from "solid-js"

export const CREATE_ORDER_ID = "create-order"

export const CreateOrder: Component = () => {
  return (
    <a
      id={CREATE_ORDER_ID}
      href="mailto:piterschimpson@gmail.com"
      class="flex relative wrapper rounded-xl bg-cod-gray-900/10 overflow-hidden group h-[200px]"
    >
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
      <div class="flex flex-col justify-center items-center w-full h-full">
        <span class="mono-tag font-bold text-5xl duration-300 ease-in-out text-cod-gray-300 group-hover:text-cod-gray-50">
          Заказать сайт
        </span>
      </div>
    </a>
  )
}