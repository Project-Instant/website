import { PRICING_LIST } from "#shared/index";
import { For, type Component } from "solid-js";

export const Pricing: Component = () => {
	return (
		<div class="flex flex-col lg:flex-row justify-between items-stretch w-full gap-6 ">
			<For each={PRICING_LIST}>
        {(item) => (
					<div class="flex flex-col p-[23px] bg-cod-gray-900 gap-y-6 justify-between rounded-2xl h-full w-full">
						<div class="flex flex-col gap-y-2">
							<p class="text-white text-2xl">
								{item.name}
							</p>
							<p class="text-white text-xl">
								Price: from {item.price}
							</p>
						</div>
					</div>
				)}
			</For>
		</div>
	)
}