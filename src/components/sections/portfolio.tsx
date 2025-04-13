import { PORTFOLIO_CASES } from "#shared/portfolio";
import { Button } from "#ui/button";
import { For, Show } from "solid-js";
import type { Component } from "solid-js";

export const Portfolio: Component = () => {
	return (
		<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full h-full gap-4">
			<For each={PORTFOLIO_CASES}>
				{(item) => (<div
					class={`flex flex-col gap-4 cursor-pointer rounded-xl p-4 h-full relative overflow-hidden border border-cruise-400`}
				>
					<div class="flex w-full overflow-hidden h-[290px]">
						<img
							src={item.image.src}
							width={1920}
							height={1080}
							alt=""
							class="w-full h-full object-cover rounded-2xl"
						/>
					</div>
					<div class="flex flex-col gap-4 w-full h-fit">
						<h2 class="text-left font-bold uppercase text-base md:text-xl lg:text-3xl tracking-[-0.015em] text-cod-gray-50">
							{item.name}
						</h2>
						<div class="flex w-full *:w-full h-full items-center justify-between gap-2">
							<Button class="bg-cod-gray-700/40 focus:bg-cod-gray-700 active:bg-cod-gray-700">
								<span class="text-cod-gray-50 text-lg">
									Детали
								</span>
							</Button>
							<Show when={item.link}>
								<a href={item.link!} target="_blank">
									<Button class="w-full bg-cod-gray-700/40 focus:bg-cod-gray-700 active:bg-cod-gray-700">
										<span class="text-cod-gray-50 text-lg">
											Перейти
										</span>
									</Button>
								</a>
							</Show>
							<Show when={!item.link}>
								<Button disabled={true} class="w-full bg-cod-gray-700/40 focus:bg-cod-gray-700 active:bg-cod-gray-700">
									<span class="text-cod-gray-50 text-lg">
										Перейти
									</span>
								</Button>
							</Show>
						</div>
					</div>
				</div>
				)}
			</For>
		</div>
	)
}