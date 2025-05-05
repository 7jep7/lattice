import React, { useRef, useEffect } from 'react';
import { drawHexGrid } from './useHexGrid';
import { useLatticeShapeRegistry } from './useLatticeShapeRegistry';
import { hexToPixel } from './hexUtils';
import { ShapeDefinition } from './types';

const LatticeBackgroundRenderer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shapes = useLatticeShapeRegistry();
  console.log('Registered shapes:', shapes);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawHexGrid(ctx, canvas.width, canvas.height, 40); // grid spacing = 40

      shapes.forEach((shape: ShapeDefinition) => {
        if (shape.opacity <= 0) return;
        const [px, py] = hexToPixel(shape.at.x, shape.at.y, 40, 0, 0);
        
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 106, 0, 0.8)';
        ctx.lineWidth = 1;
        ctx.stroke();
        console.log('🧠 Dot at', px, py, 'opacity:', shape.opacity);

        ctx.save();
        ctx.globalAlpha = shape.opacity;
        ctx.fillStyle = shape.color;
        if (shape.type === 'hexagon') {
          const size = shape.size * 40;
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = Math.PI / 3 * i;
            const x = px + size * Math.cos(angle);
            const y = py + size * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      });

      requestAnimationFrame(render);
    };

    render();
    return () => window.removeEventListener('resize', resize);
  }, [shapes]);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-[-1]" />;
};

export default LatticeBackgroundRenderer;
