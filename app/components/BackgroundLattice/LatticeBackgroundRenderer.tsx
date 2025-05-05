import React, { useRef, useEffect } from 'react';
import { useLatticeShapeRegistry } from './useLatticeShapeRegistry';
import { drawHexGrid } from './useHexGrid';
import { HEX_SIZE } from '~/constants';
import { hexToPixel } from './hexUtils';

const LatticeBackgroundRenderer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shapes = useLatticeShapeRegistry();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    let animationFrameId: number;

    const render = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // draw faint static hex grid
      drawHexGrid(ctx, canvas.width, canvas.height, HEX_SIZE, centerX, centerY);

      shapes.forEach((shape) => {
        if (shape.opacity <= 0.01) return;

        const [px, py] = hexToPixel(shape.at.x, shape.at.y, HEX_SIZE, centerX, centerY);

        ;

        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = Math.PI / 3 * i;
          const x = px + HEX_SIZE * shape.size * Math.cos(angle);
          const y = py + HEX_SIZE * shape.size * Math.sin(angle);
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
          ctx.lineWidth = shape.size * 1.5; // or just a fixed value like 2 - only for non-filled shapes, make the border thicker.
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
