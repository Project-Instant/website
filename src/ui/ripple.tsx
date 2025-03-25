import { cn } from "#libs/cn";
import { type Component, For, type JSX } from "solid-js";

interface RippleProps extends JSX.HTMLAttributes<HTMLDivElement> {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
}

export const Ripple: Component<RippleProps> = (props) => {
  const {
    mainCircleSize = 512,
    mainCircleOpacity = 0.32,
    numCircles = 12,
    class: className,
    ...restProps
  } = props;

  return (
    <div
      class={cn(
        "pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",
        className,
      )}
      {...restProps}
    >
      <For each={Array.from({ length: numCircles }, (_, i) => i)}>
        {(i) => {
          const size = mainCircleSize + i * 70;
          const opacity = mainCircleOpacity - i * 0.03;
          const animationDelay = `${i * 0.12}s`;
          const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
          const borderOpacity = 5 + i * 5;

          return (
            <div
              class={`[--i:${i}] absolute animate-ripple rounded-full border bg-cod-gray-500/65 shadow-xl`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity,
                "animation-delay": animationDelay,
                "border-style": borderStyle,
                "border-width": "1px",
                "border-color": `hsl(var(--foreground), ${borderOpacity / 100})`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              }}
            />
          );
        }}
      </For>
    </div>
  );
};