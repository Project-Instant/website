import { Button } from "#ui/button"
import { Plus } from "lucide-solid"
import type { Component } from "solid-js"

export const GetWebsiteButton: Component = () => {
  return (
    <Button class="gap-2 border px-4 border-cod-gray-800 rounded-xl hover:bg-cod-gray-900/60">
      <Plus size={20} class="text-white" />
      <span class="mono-tag uppercase text-cod-gray-50">
        Get website
      </span>
    </Button>
  )
}