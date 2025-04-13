import { SERVICES_LIST } from "#shared/index";
import { For, type Component } from "solid-js";

export const Services: Component = () => {
  return (
    <div class="flex flex-col lg:flex-row items-center justify-between wrapper gap-6">
      <For each={SERVICES_LIST}>
       {(item => (
          <div class="flex items-center justify-center bg-cod-gray-900 gap-4 w-full rounded-2xl p-4">
            <p class="text-cod-gray-50 text-lg font-semibold">
              {item.name}
            </p>
          </div>
       ))}
      </For>
    </div>
  )
}