import { HeaderSegment } from "#components/header/header-segment";
import { createVisibilityObserver } from "@solid-primitives/intersection-observer";
import { HEADER_SEGMENTS } from "#shared/index"
import { createSignal, For, onCleanup, onMount, Show, type Component } from "solid-js";
import { createEventListener } from "@solid-primitives/event-listener";
import { GradientSeparator } from "#ui/gradient-separator";
import { GetWebsiteButton } from "#components/buttons/get-website-button";
import LogotypeWthtBg from "#assets/images/miniatures/logotype_wtht_bg.png"

export const Header: Component = () => {
  const [active, setActive] = createSignal<boolean>(false);

  let el: HTMLDivElement | undefined;
  let dropdownRef: HTMLDivElement | undefined;

  const useVisibilityObserver = createVisibilityObserver({ threshold: 0.8 });
  const visible = useVisibilityObserver(() => el);

  const handleClickOutside = (e: MouseEvent) => {
    if (active() && dropdownRef && !dropdownRef.contains(e.target as Node)) {
      setActive(false);
    }
  };

  onMount(() => {
    if (typeof document !== "undefined") {
      createEventListener(document, "click", handleClickOutside);
    }
  });

  onCleanup(() => {
    if (typeof document !== "undefined") {
      document.removeEventListener("click", handleClickOutside);
    }
  });

  return (
    <>
      <div ref={el} class="absolute top-0 right-0 left-0 py-6 w-full"/>
      <div 
        class={`flex flex-col lg:flex-row justify-center lg:justify-between backdrop-blur-md z-[20] bg-cod-gray-900/10 ${visible() ? 'py-4' : 'py-1'}
			   items-center fixed duration-300 top-0 right-0 left-0 w-full wrapper`}
      >
        <Show when={!active()}>
          <GradientSeparator />
        </Show>
        <div 
          ref={dropdownRef} 
          class={`absolute lg:hidden ${active() ? "top-[60px] opacity-100" : "-top-[1000px] opacity-0"} ${visible() ? 'mt-4' : 'mt-0'} 
            flex flex-col p-6 rounded-b-xl duration-300 ease left-0 right-0 w-full bg-cod-gray-900/30`}
        >
          <For each={HEADER_SEGMENTS}>
            {(item) => <HeaderSegment {...item} />}
          </For>
          <Show when={active()}>
            <GradientSeparator />
          </Show>
        </div>
        <div class="flex lg:justify-start justify-between items-center w-full overflow-hidden">
          <a href="/" class="select-none">
            <div class="flex justify-center items-center gap-x-1 py-2">
              <img src={LogotypeWthtBg.src} class="w-[36px] h-[36px]" width={36} height={36} alt="" />
              <p class="hidden sm:inline text-2xl mono-tag uppercase text-white leading-3 font-semibold">
                Instant
              </p>
            </div>
          </a>
          <div class="lg:hidden flex items-center gap-4">
            <GetWebsiteButton />
            <div
              data-state={active() ? "active" : "inactive"}
              class="flex items-center rounded-xl justify-center cursor-pointer border border-cod-gray-800 p-3 group h-10 w-12"
              onClick={() => setActive(prev => !prev)}
            >
              <div
                class="flex *:h-[2px] w-full h-full justify-between flex-col 
                  *:bg-white *:duration-150 *:ease-in-out *:group-data-[state=active]:rotate-90 *:group-data-[state=inactive]:w-full"
              >
                <div class="group-data-[state=active]:translate-y-2 group-data-[state=active]:-translate-x-2" />
                <div class="group-data-[state=active]:translate-y-[2px] group-data-[state=active]:translate-x-0" />
                <div class="group-data-[state=active]:-translate-y-[4px] group-data-[state=active]:translate-x-2" />
              </div>
            </div>
          </div>
        </div>
        <div class="hidden lg:flex items-center gap-x-2 lg:gap-x-4 w-full">
          <For each={HEADER_SEGMENTS}>
            {(item) => <HeaderSegment {...item} />}
          </For>
        </div>
        <div class="hidden lg:flex flex-col sm:flex-row items-center w-full justify-center sm:justify-center gap-2 lg:gap-4 lg:justify-end">
          <div class="lg:hidden flex items-center gap-x-2 lg:gap-x-4">
            <For each={HEADER_SEGMENTS}>
              {(item) => <HeaderSegment {...item} />}
            </For>
          </div>
          <div class="flex items-center gap-x-2">
            <GetWebsiteButton/>
          </div>
        </div>
      </div>
    </>
  )
}