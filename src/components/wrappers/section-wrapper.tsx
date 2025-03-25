import type { Component, JSX } from "solid-js"

type SectionWrapperProps = JSX.IntrinsicElements["div"] & {
	id: string,
	title: string
}

export const SectionWrapper: Component<SectionWrapperProps> = ({ 
	id, title, children, ...props 
}) => {
	return (
		<div
			id={id}
			class="flex flex-col wrapper gap-y-6 my-24"
			{...props}
		>
			<h1 class="text-cod-gray-50 mono-tag uppercase text-3xl font-bold">
				{`[`} {title} {`]`}
			</h1>
			{children}
		</div>
	)
}