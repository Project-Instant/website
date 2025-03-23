import { cn } from "#libs/cn";
import type { ButtonRootProps } from "@kobalte/core/button";
import { Button as ButtonPrimitive } from "@kobalte/core/button";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

export const buttonVariants = cva(
	`inline-flex items-center active:scale-[1.03] px-3 py-2 justify-center cursor-pointer
	rounded-md text-sm font-medium transition-[color,background-color,box-shadow] 
	focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring 
	disabled:pointer-events-none disabled:opacity-50`,
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

type buttonProps<T extends ValidComponent = "button"> = ButtonRootProps<T> &
	VariantProps<typeof buttonVariants> & {
		class?: string;
	};

export const Button = <T extends ValidComponent = "button">(
	props: PolymorphicProps<T, buttonProps<T>>,
) => {
	const [local, rest] = splitProps(props as buttonProps, [
		"class", "variant",
	]);

	return (
		<ButtonPrimitive class={cn(buttonVariants({	variant: local.variant }), local.class	)} {...rest} />
	);
};