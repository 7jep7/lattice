// components/LatticeBackground/index.tsx
import React, { useRef, useEffect } from 'react';
import { useScroll, useSpring, motion, useTransform } from 'framer-motion';
import { drawHexGrid } from './useHexGrid';
import { LatticeLine } from './useLatticeAnimation';
import { LatticeOptions } from './types-old';
import { Shape } from "./Shape";

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

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Define shapes
    const shapes = [
      new Shape(ctx, "line", 100, 200, 300, "orange", () => calculateProgress(100, 500)),
      new Shape(ctx, "circle", 400, 300, 100, "red", () => calculateProgress(500, 900)),
    ];

    const calculateProgress = (start: number, end: number): number => {
      const scrollY = window.scrollY;
      return Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawHexGrid(ctx, canvas.width, canvas.height, 45, canvas.width / 2, canvas.height / 2);
      shapes.forEach((shape) => shape.draw());
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const { scrollY } = useScroll();
  const rawOpacity = useSpring(scrollY, { stiffness: 100, damping: 40 });
  const animatedOpacity = useTransform(rawOpacity, (v) => 1 - Math.min(v / 400, 1));

  return (
    <motion.canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Ensure it stays in the background
        pointerEvents: "none", // Prevent interaction with the canvas
        opacity: animatedOpacity,
      }}
    />
  );
};

export default LatticeBackground;
