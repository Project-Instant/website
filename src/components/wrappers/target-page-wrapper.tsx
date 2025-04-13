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
		<div class={`flex flex-col w-full items-center justify-between py-6 ${backgroundColor} h-[312px]`}>
			<div class="flex flex-col items-start wrapper gap-4">
				<h1 class="text-5xl xl:text-6xl 2xl:text-7xl text-cod-gray-50 font-bold">
					{title}
				</h1>
				<p class="text-cod-gray-50 text-base lg:text-xl font-medium">
					{description}
				</p>
				<a href={`#` + anchor} class="self-start">
					<Button class="bg-cod-gray-50 rounded-xl px-8">
						<p class="text-lg text-cod-gray-900 font-medium">
							Узнать больше
						</p>
					</Button>
				</a>
			</div>
		</div>
	)
}