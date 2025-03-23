import { cn } from "#libs/cn";
import {
  createSignal,
  createEffect,
  onCleanup,
  type Component,
  type JSX,
} from "solid-js";

interface FlickeringGridProps extends JSX.HTMLAttributes<HTMLDivElement> {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
}

export const FlickeringGrid: Component<FlickeringGridProps> = (props) => {
  const {
    squareSize = 4,
    gridGap = 6,
    flickerChance = 0.3,
    color = "rgb(0, 0, 0)",
    width,
    height,
    className,
    maxOpacity = 0.3,
    ...restProps
  } = props;

  const [canvasRef, setCanvasRef] = createSignal<HTMLCanvasElement>();
  const [containerRef, setContainerRef] = createSignal<HTMLDivElement>();
  const [isInView, setIsInView] = createSignal(false);
  const [canvasSize, setCanvasSize] = createSignal({ width: 0, height: 0 });

  const memoizedColor = () => {
    const toRGBA = (color: string) => {
      if (typeof window === "undefined") {
        return `rgba(0, 0, 0,`;
      }
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = 1;
      const ctx = canvas.getContext("2d");
      if (!ctx) return "rgba(255, 0, 0,";
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 1, 1);
      const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
      return `rgba(${r}, ${g}, ${b},`;
    };
    return toRGBA(color);
  };

  const setupCanvas = (
    canvas: HTMLCanvasElement,
    width: number,
    height: number,
  ) => {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const cols = Math.floor(width / (squareSize + gridGap));
    const rows = Math.floor(height / (squareSize + gridGap));

    const squares = new Float32Array(cols * rows);
    for (let i = 0; i < squares.length; i++) {
      squares[i] = Math.random() * maxOpacity;
    }

    return { cols, rows, squares, dpr };
  };

  const updateSquares = (squares: Float32Array, deltaTime: number) => {
    for (let i = 0; i < squares.length; i++) {
      if (Math.random() < flickerChance * deltaTime) {
        squares[i] = Math.random() * maxOpacity;
      }
    }
  };

  const drawGrid = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    cols: number,
    rows: number,
    squares: Float32Array,
    dpr: number,
  ) => {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "transparent";
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const opacity = squares[i * rows + j];
        ctx.fillStyle = `${memoizedColor()}${opacity})`;
        ctx.fillRect(
          i * (squareSize + gridGap) * dpr,
          j * (squareSize + gridGap) * dpr,
          squareSize * dpr,
          squareSize * dpr,
        );
      }
    }
  };

  createEffect(() => {
    const canvas = canvasRef();
    const container = containerRef();
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let gridParams: ReturnType<typeof setupCanvas>;

    const updateCanvasSize = () => {
      const newWidth = width || container.clientWidth;
      const newHeight = height || container.clientHeight;
      setCanvasSize({ width: newWidth, height: newHeight });
      gridParams = setupCanvas(canvas, newWidth, newHeight);
    };

    updateCanvasSize();

    let lastTime = 0;
    const animate = (time: number) => {
      if (!isInView()) return;

      const deltaTime = (time - lastTime) / 1000;
      lastTime = time;

      updateSquares(gridParams.squares, deltaTime);
      drawGrid(
        ctx,
        canvas.width,
        canvas.height,
        gridParams.cols,
        gridParams.rows,
        gridParams.squares,
        gridParams.dpr,
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });

    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    intersectionObserver.observe(canvas);

    if (isInView()) {
      animationFrameId = requestAnimationFrame(animate);
    }

    onCleanup(() => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    });
  });

  return (
    <div
      ref={setContainerRef}
      class={cn(`h-full w-full ${className}`)}
      {...restProps}
    >
      <canvas
        ref={setCanvasRef}
        class="pointer-events-none"
        style={{
          width: `${canvasSize().width}px`,
          height: `${canvasSize().height}px`,
        }}
      />
    </div>
  );
};