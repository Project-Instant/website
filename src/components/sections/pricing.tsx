import { PRICING_LIST } from "#shared/index";
import { For, type Component } from "solid-js";

export const Pricing: Component = () => {
	return (
		<div class="flex flex-col lg:flex-row justify-between items-stretch wrapper gap-6 ">
			<For each={PRICING_LIST}>
        {(item) => (
					<div class="flex flex-col p-[23px] bg-cod-gray-900 gap-y-6 justify-between rounded-2xl h-full w-full">
						<div class="flex flex-col gap-y-2">
							<p class="text-cruise-300 text-2xl font-semibold">
								{item.name}
							</p>
							<p class="text-white text-xl">
								Прайс {item.price}
							</p>
							<span class="text-cod-gray-300">цена может отличаться от финальной</span>
						</div>
					</div>
				)}
			</For>
		</div>
	)
}