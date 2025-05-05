import React, { useRef, useEffect } from 'react';
import { useLatticeShapeRegistry } from './useLatticeShapeRegistry';
import { drawHexGrid } from './useHexGrid';

const LatticeBackgroundRenderer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shapes = useLatticeShapeRegistry();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // draw faint static hex grid
      drawHexGrid(ctx, canvas.width, canvas.height, 40);

      shapes.forEach((shape) => {
        if (shape.opacity <= 0.01) return;

        const hexSize = 40;
        const px = canvas.width / 2 + shape.at.x * hexSize * 1.5;
        const py = canvas.height / 2 + shape.at.y * hexSize * Math.sqrt(3) + (shape.at.x % 2 === 0 ? 0 : hexSize * Math.sqrt(3) / 2)
        ;

        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = Math.PI / 3 * i;
          const x = px + hexSize * shape.size * Math.cos(angle);
          const y = py + hexSize * shape.size * Math.sin(angle);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();

        ctx.globalAlpha = shape.opacity;
        if (shape.filled !== false) {
          ctx.fillStyle = shape.color;
          ctx.fill();
        } else {
          ctx.strokeStyle = shape.color;
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    window.addEventListener('resize', render);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', render);
    };
  }, [shapes]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none"
    />
  );
};

export default LatticeBackgroundRenderer;
