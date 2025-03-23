import { Selected } from "#ui/selected";
import { For, Show, type Component } from "solid-js";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "#ui/dropdown-menu";
import type { HeaderComponentType } from "#shared";

type HeaderSegmentProps = HeaderComponentType

export const HeaderSegment: Component<HeaderSegmentProps> = ({
	href: href, title: title, nested
}) => {
	return (
		<>
			<Show when={nested}>
				<DropdownMenu>
					<DropdownMenuTrigger id={title}>
						<Selected animation="spring">
							<p class="inline mono-tag uppercase text-cod-gray-50 text-[15px] lg:text-base">
								{title}
							</p>
						</Selected>
					</DropdownMenuTrigger>
					{nested && (
						<DropdownMenuContent class="flex flex-col gap-y-2 w-fit lg:w-[260px]">
							<For each={nested}>
								{({ href: nestedHref, title, icon: Icon }) => (
									<a href={href + nestedHref}>
										<div class="flex group items-center gap-2 rounded-xl w-full px-4 py-2">
											<div class="flex group-hover:bg-cod-gray-50 duration-300 bg-cod-gray-700 rounded-md p-2 items-center justify-center">
												<Icon size={16} class="group-hover:text-cod-gray-800 duration-300 text-cod-gray-50"/>
											</div>
											<p class="text-cod-gray-50 text-base font-medium">
												{title}
											</p>
										</div>
									</a>
								)}
							</For>
						</DropdownMenuContent>
					)}
				</DropdownMenu>
			</Show>
			<Show when={!nested}>
				<a href={href}>
					<Selected animation="spring">
						<p class="inline mono-tag uppercase text-cod-gray-50 text-[15px] lg:text-base">
							{title}
						</p>
					</Selected>
				</a>
			</Show>
		</>
	)
}