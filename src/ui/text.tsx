import { createSignal, createEffect, splitProps, For, type JSX, type Component } from 'solid-js';

type DecryptedTextProps = {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: 'view' | 'hover';
  children?: JSX.Element;
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+'

export const DecryptedText: Component<DecryptedTextProps> = (props) => {
  const [local, others] = splitProps(props, [
    'text', 'speed', 'maxIterations', 'sequential', 'revealDirection',
    'useOriginalCharsOnly', 'characters', 'className', 'parentClassName',
    'encryptedClassName', 'animateOn'
  ]);

  const [displayText, setDisplayText] = createSignal<string>(local.text);
  const [isHovering, setIsHovering] = createSignal<boolean>(false);
  const [isScrambling, setIsScrambling] = createSignal<boolean>(false);
  const [revealedIndices, setRevealedIndices] = createSignal<Set<number>>(new Set());
  const [hasAnimated, setHasAnimated] = createSignal<boolean>(false);

  let containerRef: HTMLSpanElement | undefined;

  createEffect(() => {
    let interval: NodeJS.Timer;
    let currentIteration = 0;

    const getNextIndex = (revealedSet: Set<number>): number => {
      const textLength = local.text.length;

      switch (local.revealDirection || 'start') {
        case 'start':
          return revealedSet.size;
        case 'end':
          return textLength - 1 - revealedSet.size;
        case 'center': {
          const middle = Math.floor(textLength / 2);
          const offset = Math.floor(revealedSet.size / 2);
          const nextIndex = revealedSet.size % 2 === 0
            ? middle + offset
            : middle - offset - 1;

          if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
            return nextIndex;
          }

          for (let i = 0; i < textLength; i++) {
            if (!revealedSet.has(i)) {
              return i;
            }
          }

          return 0;
        }
        default:
          return revealedSet.size;
      }
    };

    const availableChars = (local.useOriginalCharsOnly || false)
      ? Array.from(
        new Set(local.text.split(''))
      ).filter(char => char !== ' ')
      : (local.characters || CHARACTERS).split('');

    const shuffleText = (
      originalText: string, currentRevealed: Set<number>
    ): string => {
      if (local.useOriginalCharsOnly) {
        const positions = originalText.split('').map((char, i) => ({
          char,
          isSpace: char === ' ',
          index: i,
          isRevealed: currentRevealed.has(i),
        }));

        const nonSpaceChars = positions
          .filter(p => !p.isSpace && !p.isRevealed)
          .map(p => p.char);

        for (let i = nonSpaceChars.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));

          [nonSpaceChars[i], nonSpaceChars[j]] = [nonSpaceChars[j], nonSpaceChars[i]];
        }

        let charIndex = 0;

        return positions
          .map(p => {
            if (p.isSpace) {
              return ' ';
            }

            if (p.isRevealed) {
              return originalText[p.index];
            }

            return nonSpaceChars[charIndex++];
          })
          .join('');

      } else {
        return originalText
          .split('')
          .map((char, i) => {
            if (char === ' ') {
              return ' ';
            }

            if (currentRevealed.has(i)) {
              return originalText[i];
            }

            return availableChars[Math.floor(Math.random() * availableChars.length)];
          })
          .join('');
      }
    };

    if (isHovering()) {
      setIsScrambling(true);

      interval = setInterval(() => {
        setRevealedIndices(prev => {
          const newRevealed = new Set(prev);

          if (local.sequential || false) {
            if (newRevealed.size < local.text.length) {
              const nextIndex = getNextIndex(newRevealed);

              newRevealed.add(nextIndex);

              setDisplayText(shuffleText(local.text, newRevealed));

              return newRevealed;
            } else {
              clearInterval(interval);
              setIsScrambling(false);

              return prev;
            }
          } else {
            setDisplayText(shuffleText(local.text, newRevealed));

            currentIteration++;

            if (currentIteration >= (local.maxIterations || 10)) {
              clearInterval(interval);
              setIsScrambling(false);
              setDisplayText(local.text);
            }

            return prev;
          }
        });
      }, local.speed || 50);
    } else {
      setDisplayText(local.text);
  
      setRevealedIndices(
        new Set<number>()
      );

      setIsScrambling(false);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  createEffect(() => {
    if (!containerRef) return;

    if ((local.animateOn || 'hover') !== 'view') return;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated()) {
          setIsHovering(true);
          setHasAnimated(true);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(containerRef);

    return () => observer.unobserve(containerRef);
  });

  const hoverProps = (local.animateOn || 'hover') === 'hover' ? {
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => setIsHovering(false),
  } : {};

  return (
    <span
      class={local.parentClassName}
      ref={containerRef}
      style={{
        display: 'inline-block',
        'white-space': 'pre-wrap'
      }}
      {...hoverProps}
      {...others}
    >
      <span 
        style={{
          position: 'absolute' as const,
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0,0,0,0)',
          border: 0,
        }}
      >
        {displayText()}
      </span>
      <span aria-hidden="true">
        <For each={displayText().split('')}>
          {(char, index) => {
            const isRevealedOrDone = revealedIndices().has(index()) ||
              !isScrambling() ||
              !isHovering();

            return (
              <span class={isRevealedOrDone ? local.className : local.encryptedClassName}>
                {char}
              </span>
            );
          }}
        </For>
      </span>
    </span>
  );
}