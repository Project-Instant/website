import { Button } from "#ui/button";
import type { Component } from "solid-js";

type TargetPageWrapperProps = {
	title: string,
	description: string,
	anchor: string,
	backgroundColor: string
}

export const TargetPageWrapper: Component<TargetPageWrapperProps> = ({
	anchor, description, title, backgroundColor,
}) => {
	return (
		<div class={`flex flex-col wrapper justify-between py-6 ${backgroundColor} w-full h-[312px]`}>
			<div class="flex flex-col gap-y-4 w-full lg:w-2/3">
				<h1 class="text-5xl xl:text-6xl 2xl:text-7xl text-cod-gray-50 font-bold">
					{title}
				</h1>
				<p class="text-neutral-50 text-base lg:text-xl font-medium">
					{description}
				</p>
			</div>
			<a href={`#` + anchor} class="w-fit">
				<Button class="bg-cod-gray-50 rounded-xl px-8">
					<p class="text-lg text-cod-gray-900 font-medium">
            More						
					</p>
				</Button>
			</a>
		</div>
	)
}