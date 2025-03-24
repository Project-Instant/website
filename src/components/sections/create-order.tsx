import type { Component } from "solid-js"

const CreateOrderForm: Component = () => {
  return (
    <div>
      
    </div>
  )
}

export const CreateOrder: Component = () => {
  return (
    <div
      class="w-full wrapper"
    >
      <div class="flex flex-col bg-cod-gray-900 rounded-xl p-6 w-full min-h-[200px] h-full">
        <CreateOrderForm/>
      </div>
    </div>
  )
}