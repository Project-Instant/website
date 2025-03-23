import { cn } from "#libs/cn";
import type { PolymorphicProps } from "@kobalte/core";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { splitProps, type ValidComponent } from "solid-js";

const selectedVariants = cva(`flex items-center gap-x-1
		hover:duration-500 hover:ease-in-out duration-150 rounded-xl outline-none`, {
  variants: {
    padding: {
      default: "px-5 py-2",
      none: "p-0"
    },
    cursor: {
      default: "cursor-pointer",
      none: "cursor-default"
    },
    background: {
      transparent: "bg-transparent"
    },
    animation: {
      spring: "hover:scale-[0.98] hover:bg-cod-gray-600/20"
    }
  },
  defaultVariants: {
    background: "transparent",
    padding: "default",
    cursor: "default"
  }
})

type Selected<T extends ValidComponent = "div"> = VariantProps<typeof selectedVariants> & {
  class?: string;
};

export const Selected = <T extends ValidComponent = "div">(props: PolymorphicProps<T, Selected<T>>) => {
  const [local, rest] = splitProps(props as Selected, [
    "class", "padding", "animation", "background", "cursor"
  ]);

  return (
    <div 
      class={cn(selectedVariants({	
        padding: local.padding, 
        animation: local.animation, 
        cursor: local.cursor, 
        background: local.background
      }), local.class	)} 
      {...rest} 
    />
  )
}