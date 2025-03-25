import { HeaderSegment } from "#components/header/header-segment";
import { createVisibilityObserver } from "@solid-primitives/intersection-observer";
import { HEADER_SEGMENTS } from "#shared/index"
import { createMemo, createSignal, For, onCleanup, onMount, Show } from "solid-js";
import { createEventListener } from "@solid-primitives/event-listener";
import { GradientSeparator } from "#ui/gradient-separator";
import { GetWebsiteButton } from "#components/buttons/get-website-button";
import LogotypeWthtBg from "#assets/images/miniatures/logotype_wtht_bg.png"
import { cva } from "class-variance-authority";
import type { Component } from "solid-js";

const headerVariants = cva(`fixed top-0 right-0 left-0 flex flex-col lg:flex-row 
    justify-center lg:justify-between backdrop-blur-md z-[20] bg-cod-gray-900/10 items-center 
    w-full duration-300`, {
  variants: {
    variant: {
      default: "py-1",
      scrollable: "py-4"
    }
  },
  defaultVariants: {
    variant: "default"
  },
});

const headerSheetVariants = cva(`absolute left-0 right-0 flex flex-col p-6 rounded-b-xl 
    lg:hidden bg-cod-gray-950 w-full duration-300`, {
  variants: {
    variant: {
      default: "-top-[999px] opacity-0",
      active: "top-[60px] opacity-100"
    },
    margin: {
      default: "mt-0",
      opened: "mt-4"
    }
  },
  defaultVariants: {
    variant: "default",
    margin: "default"
  },
})

const Logotype: Component = () => {
  return (
    <a href="/" class="flex justify-center items-center gap-x-1 py-2 select-none">
      <img src={LogotypeWthtBg.src} class="w-[36px] h-[36px]" width={36} height={36} alt="" />
      <p class="hidden sm:inline text-lg mono-tag uppercase text-white leading-3 font-semibold">
        Instant
      </p>
    </a>
  )
}

const Segments: Component = () => {
  return (
    <>
      <div class="hidden lg:flex items-center gap-x-2 lg:gap-x-4 w-full">
        <For each={HEADER_SEGMENTS}>
          {(item) => <HeaderSegment {...item} />}
        </For>
      </div>
      <div
        class="hidden lg:flex flex-col sm:flex-row items-center w-full 
          justify-center sm:justify-center gap-2 lg:gap-4 lg:justify-end"
      >
        <div class="lg:hidden flex items-center gap-x-2 lg:gap-x-4">
          <For each={HEADER_SEGMENTS}>
            {(item) => <HeaderSegment {...item} />}
          </For>
        </div>
        <div class="flex items-center gap-x-2">
          <GetWebsiteButton />
        </div>
      </div>
    </>
  )
}

export const Header: Component = () => {
  const [isMounted, setIsMounted] = createSignal<boolean>(false);
  const [active, setActive] = createSignal<boolean>(false);

  let el: HTMLDivElement | undefined;
  let headerSheetRef: HTMLDivElement | undefined;
  let headerSheetTriggerRef: HTMLDivElement | undefined;

  const useVisibilityObserver = createVisibilityObserver({ threshold: 0.8 });
  const visible = useVisibilityObserver(() => el);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      active() &&
      headerSheetRef &&
      !headerSheetRef.contains(e.target as Node) &&
      headerSheetTriggerRef &&
      !headerSheetTriggerRef.contains(e.target as Node)
    ) {
      setActive(false);
    }
  };

  onMount(() => {
    setIsMounted(true)

    createEventListener(document, "pointerdown", (e) => {
      if (
        active() && 
        headerSheetRef && !headerSheetRef.contains(e.target as Node) && 
        headerSheetTriggerRef && !headerSheetTriggerRef.contains(e.target as Node)
      ) {
        queueMicrotask(() => setActive(false));
      }
    });
  });

  onCleanup(() => {
    if (typeof document !== "undefined") {
      document.removeEventListener("pointerdown", handleClickOutside); 
    }
  });

  const padding = createMemo(() => {
    return isMounted() ? visible() ? 'scrollable' : 'default' : 'default'
  });

  const margin = createMemo(() => {
    return isMounted() ? visible() ? 'opened' : 'default' : 'default'
  });

  const headerClasses = () => headerVariants({ variant: padding() });
  const headerSheetClasses = () => headerSheetVariants({
    variant: active() ? "active" : "default", margin: margin()
  })

  return (
    <>
      <div ref={el} class="absolute top-0 right-0 left-0 py-6 w-full"/>
      <div class={headerClasses()}>
        <Show when={!active()}>
          <GradientSeparator />
        </Show>
        <div ref={headerSheetRef} class={headerSheetClasses()}>
          <For each={HEADER_SEGMENTS}>
            {item => <HeaderSegment {...item} />}
          </For>
          <Show when={active()}>
            <GradientSeparator />
          </Show>
        </div>
        <div class="flex items-center justify-center w-full">
          <div class="flex items-center justify-center wrapper">
            <div class="flex lg:justify-start justify-between items-center w-full overflow-hidden">
              <Logotype />
              <div class="lg:hidden flex items-center gap-4">
                <GetWebsiteButton />
                <div
                  ref={headerSheetTriggerRef}
                  data-s={active() ? "active" : "inactive"}
                  class="flex items-center rounded-xl justify-center cursor-pointer border border-cod-gray-800 p-3 group h-10 w-12"
                  onClick={() => setActive(prev => !prev)}
                >
                  <div
                    class="flex *:h-[2px] w-full h-full justify-between flex-col 
                  *:bg-white *:duration-150 *:ease-in-out *:group-data-[s=active]:rotate-90 *:group-data-[s=inactive]:w-full"
                  >
                    <div class="group-data-[s=active]:translate-y-2 group-data-[s=active]:-translate-x-[6px]" />
                    <div class="group-data-[s=active]:translate-y-[2px] group-data-[s=active]:translate-x-0" />
                    <div class="group-data-[s=active]:-translate-y-[4px] group-data-[s=active]:translate-x-[6px]" />
                  </div>
                </div>
              </div>
            </div>
            <Segments />
          </div>
        </div>
      </div>
    </>
  )
}