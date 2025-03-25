import { GLOBAL_SITE_HREF } from "#shared";
import type { Component } from "solid-js";

// todo: refactor self widget
export const SelfStudioWidget: Component = () => {
  return (
    <a
      href={GLOBAL_SITE_HREF}
      target='_blank'
      rel="noreferrer"
    >
      <div
        class="flex flex-row items-center bg-neutral-900 px-2 py-1"
      >
        <div class="flex flex-row w-full gap-x-2 items-center">
          <img
            src="https://i.ibb.co/c8sVb5j/favicon-transparent.png"
            alt="Developed by"
            width="20"
            height="20"
            class="w-[20px] h-[20px]"
            loading="lazy"
          />
          <p class="text-md text-white font-medium">
            Made in Instant
          </p>
        </div>
      </div>
    </a>
  )
}