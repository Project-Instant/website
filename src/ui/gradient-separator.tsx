import type { Component, JSX } from "solid-js";

type GradientSeparatorProps = JSX.IntrinsicElements["hr"] & {
  direction?: "top" | "bottom"
}

export const GradientSeparator: Component<GradientSeparatorProps> = ({ 
  direction = "bottom", class: className, ...props
}) => {
  return (
    <hr 
      class={`absolute ${direction === 'top' ? "top-0" : "bottom-0"} right-0 left-0 m-0 h-px w-full border-none bg-gradient-to-r
			from-cod-gray-200/0 via-cod-gray-200/30 to-cod-gray-200/0`}
      {...props}
    />
  )
}