import { useEffect, useRef, useState, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  animation?: 'fade-up' | 'fade-in' | 'fade-right' | 'fade-left' | 'zoom-in';
  delayMs?: number;
}

export function Reveal({
  children,
  className,
  as = 'div',
  threshold = 0.2,
  rootMargin = '0px 0px -10% 0px',
  once = true,
  animation = 'fade-up',
  delayMs = 0,
}: PropsWithChildren<RevealProps>) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current as Element | null;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  const AnimTag = as as any;

  const baseHidden = 'opacity-0 translate-y-6';
  const baseShown = 'opacity-100 translate-y-0';

  const animationMap: Record<string, { hidden: string; shown: string }> = {
    'fade-up': { hidden: 'opacity-0 translate-y-6', shown: 'opacity-100 translate-y-0' },
    'fade-in': { hidden: 'opacity-0', shown: 'opacity-100' },
    'fade-right': { hidden: 'opacity-0 -translate-x-6', shown: 'opacity-100 translate-x-0' },
    'fade-left': { hidden: 'opacity-0 translate-x-6', shown: 'opacity-100 translate-x-0' },
    'zoom-in': { hidden: 'opacity-0 scale-95', shown: 'opacity-100 scale-100' },
  };

  const stateClasses = visible
    ? animationMap[animation].shown
    : animationMap[animation].hidden;

  const style = delayMs ? { transitionDelay: `${delayMs}ms` } : undefined;

  return (
    <AnimTag
      ref={ref}
      className={cn(
        'transition-transform transition-opacity duration-700 ease-out will-change-transform will-change-opacity',
        stateClasses,
        className
      )}
      style={style}
    >
      {children}
    </AnimTag>
  );
} 