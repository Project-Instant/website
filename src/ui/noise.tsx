import { createEffect, onMount, onCleanup, type Component } from 'solid-js';

type NoiseProps = {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  patternRefreshInterval?: number;
  patternAlpha?: number;
}

export const Noise: Component<NoiseProps> = (props) => {
  const patternSize = () => props.patternSize || 250;
  const patternScaleX = () => props.patternScaleX || 1;
  const patternScaleY = () => props.patternScaleY || 1;
  const patternRefreshInterval = () => props.patternRefreshInterval || 2;
  const patternAlpha = () => props.patternAlpha || 15;

  let grainRef: HTMLCanvasElement | undefined;

  onMount(() => {
    const canvas = grainRef;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;

    const patternCanvas = document.createElement('canvas');

    patternCanvas.width = patternSize();
    patternCanvas.height = patternSize();

    const patternCtx = patternCanvas.getContext('2d');
    if (!patternCtx) return;

    const patternData = patternCtx.createImageData(patternSize(), patternSize());
    const patternPixelDataLength = patternSize() * patternSize() * 4;

    const resize = () => {
      if (!canvas) return;

      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;

      ctx.scale(patternScaleX(), patternScaleY());
    };

    const updatePattern = () => {
      for (let i = 0; i < patternPixelDataLength; i += 4) {
        const value = Math.random() * 255;
        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha();
      }

      patternCtx.putImageData(patternData, 0, 0);
    };

    const drawGrain = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const pattern = ctx.createPattern(patternCanvas, 'repeat');

      if (pattern) {
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    };

    const loop = () => {
      if (frame % patternRefreshInterval() === 0) {
        updatePattern();
        drawGrain();
      }

      frame++;
      window.requestAnimationFrame(loop);
    };

    window.addEventListener('resize', resize);
    resize();
    loop();

    onCleanup(() => {
      window.removeEventListener('resize', resize);
    });
  });

  createEffect(() => {
    const canvas = grainRef;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.scale(patternScaleX(), patternScaleY());

    const newPatternSize = patternSize();
    const patternCanvas = document.createElement('canvas');
    patternCanvas.width = newPatternSize;
    patternCanvas.height = newPatternSize;
  });

  return <canvas class="absolute inset-0 w-full h-full" ref={grainRef} />;
};