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
							<p class="mono-tag uppercase text-cod-gray-50 text-base">
								{title}
							</p>
						</Selected>
					</DropdownMenuTrigger>
					{nested && (
						<DropdownMenuContent class="flex flex-col gap-y-2 lg:w-[300px]">
							<For each={nested}>
								{({ href: nestedHref, title, icon: Icon, description }) => (
									<a href={href + nestedHref} onClick={(e) => e.stopPropagation()}>
										<div class="flex group items-center gap-2 rounded-xl w-full px-4 py-2">
											<div class="flex duration-300 rounded-md p-2 items-center justify-center bg-cod-gray-700 group-hover:bg-cod-gray-50">
												<Icon 
													size={20} 
													class="group-hover:text-cod-gray-800 duration-300 text-cod-gray-50"
												/>
											</div>
											<div class="flex flex-col">
												<p class="text-cod-gray-50 text-base">
													{title}
												</p>
												<span class="text-cod-gray-300 group-hover:text-cod-gray-50 text-sm">
													{description}
												</span>
											</div>
										</div>
									</a>
								)}
							</For>
						</DropdownMenuContent>
					)}
				</DropdownMenu>
			</Show>
			<Show when={!nested}>
				<a href={href} onClick={(e) => e.stopPropagation()}>
					<Selected animation="spring">
						<p class="mono-tag uppercase text-cod-gray-50 text-base">
							{title}
						</p>
					</Selected>
				</a>
			</Show>
		</>
	)
}