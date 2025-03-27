import { CREATE_ORDER_ID } from "#components/sections/create-order"
import { Plus } from "lucide-solid"
import type { Component } from "solid-js"

export const GetWebsiteButton: Component = () => {
  return (
    <a 
      href={`/#${CREATE_ORDER_ID}`}
      class="inline-flex items-center justify-center py-2 gap-2 border px-4 border-cod-gray-800 rounded-xl hover:bg-cod-gray-900/60"
    >
      <Plus size={20} class="text-cod-gray-50" />
      <span class="mono-tag uppercase text-cod-gray-50">
        Get in Touch
      </span>
    </a>
  )
}