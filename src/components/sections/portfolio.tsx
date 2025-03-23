import { PORTFOLIO_CASES } from "#shared/portfolio";
import { Dialog, DialogTrigger, DialogContent } from "#ui/dialog";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "#ui/accordion";
import { For } from "solid-js";
import type { Component } from "solid-js";

export const Portfolio: Component = () => {
	return (
		<For each={PORTFOLIO_CASES}>
     {(item) => (
				<Dialog>
					<DialogTrigger>
						<div
							class={`flex flex-col gap-4 rounded-xl h-full p-6 relative overflow-hidden min-h-[500px] lg:min-h-[300px] ${item.backgroundColor}`}
						>
							<div class="max-w-xl relative">
								<h2 class="text-left font-bold mono-tag uppercase text-base md:text-xl lg:text-5xl tracking-[-0.015em] text-cod-gray-50">
									{item.name}
								</h2>
								<p class="mt-4 text-left text-xl text-neutral-200">
									{item.description}
								</p>
							</div>
							<img src={item.image.src} width={500} height={500}	alt="" class="absolute -right-4 filter -bottom-2 object-contain rounded-2xl"/>
						</div>
					</DialogTrigger>
					<DialogContent class="flex flex-col gap-y-6 max-w-5xl max-h-[620px] lg:max-h-[720px] py-4 px-4 overflow-hidden !overflow-y-auto w-full">
						<div class="flex flex-col gap-y-1">
							<h2 class="text-white text-3xl font-semibold">
								{item.name}
							</h2>
							<p class="text-cod-gray-300 text-md">click on one of the buttons to expand the list of screenshots</p>
						</div>
						<Accordion id="portfolio" collapsible class="flex flex-col gap-y-2">
							<AccordionItem value="desktop">
								<AccordionTrigger class="bg-neutral-800 rounded-md p-2 w-full">
									<p class="text-white text-lg font-semibold">Desktop</p>
								</AccordionTrigger>
								<AccordionContent>
									<div class="flex flex-col gap-y-4 grow">
										<For each={item.desktopCase}>
											{(screen) => (
												<div class="flex w-full overflow-hidden">
													<img src={screen.src} alt=""	width={1200}	height={900}	class="w-full h-full"/>
												</div>
											)}
										</For>
									</div>
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="mobile">
								<AccordionTrigger class="bg-neutral-800 rounded-md p-2 w-full">
									<p class="text-white text-lg font-semibold">Mobile</p>
								</AccordionTrigger>
								<AccordionContent>
									<div class="flex flex-col gap-y-4 items-center">
										<For each={item.mobileCase}>
											{(screen) => (
												<div class="w-[390px] h-full overflow-hidden flex">
													<img src={screen.src}	alt=""	width={390} height={500} class="w-full h-full" />
												</div>
											)}
										</For>
									</div>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</DialogContent>
				</Dialog>
		 )}
		</For>
	)
}