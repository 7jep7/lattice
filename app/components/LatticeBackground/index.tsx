// components/LatticeBackground/index.tsx
import React, { useRef, useEffect } from 'react';
import { useScroll, useSpring, motion, useTransform } from 'framer-motion';
import { drawHexGrid } from './useHexGrid';
import { LatticeLine } from './useLatticeAnimation';
import { LatticeOptions } from './types';

interface LatticeBackgroundProps {
  height?: string;
  fadeOnScroll?: boolean;
  highlightColor?: string;
  secondaryHighlightColor?: string;
}

const LatticeBackground: React.FC<LatticeBackgroundProps> = ({
  height = '120vh',
  fadeOnScroll = true,
  highlightColor = '#FF6A00',
  secondaryHighlightColor = '#E65C00',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const rect = canvas.getBoundingClientRect();
    let w = (canvas.width = rect.width);
    let h = (canvas.height = rect.height);

    const ctx: CanvasRenderingContext2D = context;

    const opts: LatticeOptions = {
      len: 45,
      count: 60,
      baseTime: 10,
      addedTime: 10,
      dieChance: 0.05,
      spawnChance: 1,
      sparkChance: 0.05,
      sparkDist: 10,
      sparkSize: 2,
      baseLight: 50,
      addedLight: 15,
      shadowToTimePropMult: 6,
      baseLightInputMultiplier: 0.01,
      addedLightInputMultiplier: 0.02,
      cx: w / 2,
      cy: h / 3,
      repaintAlpha: 0.05,
      hueChange: 0.1,
    };

    let tick = 0;
    const lines: LatticeLine[] = [];

    const loop = () => {
      tick++;
      ctx.globalCompositeOperation = 'source-over';
      ctx.shadowBlur = 0;
      ctx.clearRect(0, 0, w, h);

      drawHexGrid(ctx, w, h, opts.len, opts.cx, opts.cy);
      ctx.globalCompositeOperation = 'lighter';

      if (lines.length < opts.count && Math.random() < opts.spawnChance) {
        lines.push(new LatticeLine(() => tick, opts));
      }

      lines.forEach((line) => line.step(ctx));
      requestAnimationFrame(loop);
    };

    loop();

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      w = canvas.width = rect.width;
      h = canvas.height = rect.height;
      opts.cx = w / 2;
      opts.cy = h / 3;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [highlightColor]);

  const { scrollY } = useScroll();
  const rawOpacity = useSpring(scrollY, {
    stiffness: 100,
    damping: 40,
  });

  const animatedOpacity = useTransform(rawOpacity, (v) => 1 - Math.min(v / 400, 1));

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{
        opacity: fadeOnScroll ? animatedOpacity : 1,
      }}
    />
  );
};

export default LatticeBackground;
