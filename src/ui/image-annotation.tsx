import type { Component } from "solid-js";

interface IImageWithAnnotation {
  propSrc: string,
  propAlt: string,
  width?: number,
  height?: number,
  annotation: string
}

export const ImageWithAnnotation: Component<IImageWithAnnotation> = ({
  propSrc, propAlt, height, width, annotation
}) => {
  return (
    <div class={`w-full h-[280px]
		 flex flex-col items-center gap-y-2 *:text-white *:text-md overflow-hidden rounded-xl border-none outline-none`}>
      <img
        src={propSrc}
        alt={propAlt}
        width={400}
        height={400}
        class="w-full h-full object-cover rounded-xl"
      />
      <p>{annotation}</p>
    </div>
  )
}