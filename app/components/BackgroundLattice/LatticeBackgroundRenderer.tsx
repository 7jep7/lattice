import React, { useRef, useEffect } from 'react';
// import { useLatticeShapeRegistry } from './useLatticeShapeRegistry';
import { drawHexGrid } from './useHexGrid';
import { HEX_SIZE } from '~/constants';
import { hexToPixel } from './hexUtils';
import { useTraceEdgeRegistry } from './useTraceEdgeRegistry';
import { getHexCorner } from './hexUtils';
import { getTraceProgress, getFadeOpacity } from './useTraceEdgeRegistry';

const LatticeBackgroundRenderer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
//   const shapes = useLatticeShapeRegistry();

  const traceEdges = useTraceEdgeRegistry();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // draw faint static hex grid
      drawHexGrid(ctx, canvas.width, canvas.height, HEX_SIZE, centerX, centerY);

      //draw Lattice shapes (filled hexagons)
    //   shapes.forEach((shape) => {
    //     if (shape.opacity <= 0.01) return;

    //     const [px, py] = hexToPixel(shape.at.x, shape.at.y, HEX_SIZE, centerX, centerY);

    //     ;

    //     ctx.beginPath();
    //     for (let i = 0; i < 6; i++) {
    //       const angle = Math.PI / 3 * i;
    //       const x = px + HEX_SIZE * shape.size * Math.cos(angle);
    //       const y = py + HEX_SIZE * shape.size * Math.sin(angle);
    //       if (i === 0) ctx.moveTo(x, y);
    //       else ctx.lineTo(x, y);
    //     }
    //     ctx.closePath();

    //     ctx.globalAlpha = shape.opacity;
    //     if (shape.filled !== false) {
    //       ctx.fillStyle = shape.color;
    //       ctx.fill();
    //     } else {
    //       ctx.strokeStyle = shape.color;
    //       ctx.lineWidth = shape.size * 1.5; // or just a fixed value like 2 - only for non-filled shapes, make the border thicker.
    //       ctx.stroke();
    //     }
    //     ctx.globalAlpha = 1;
    //   });

      //draw Lattice trace edges
      traceEdges.forEach((edge) => {
        if (edge.targetOpacity <= 0) return;
      
        //get edge vertices in pixel cartesian coordinates
        const [cx, cy] = hexToPixel(edge.edge.hex.x, edge.edge.hex.y, HEX_SIZE, centerX, centerY);
        const [x1, y1] = getHexCorner(cx, cy, HEX_SIZE, edge.edge.startVertex);
        const [x2, y2] = getHexCorner(cx, cy, HEX_SIZE, edge.edge.endVertex);

        //draw them gradually as the viewers scrolls (based on edge.progress)
        const scrollY = window.scrollY;
        const progress = getTraceProgress(edge, scrollY);
        const opacity = getFadeOpacity(edge, scrollY); // this returns 0 unless in 'appear' mode        
        
        const dx = x2 - x1;
        const dy = y2 - y1;
        
        ctx.beginPath();
        const isReversing = edge.mode === 'flash' && scrollY >= edge.startAnimationOut;

        if (isReversing) { //draw the direction reversed
            ctx.moveTo(x2, y2);
            ctx.lineTo(x2 + (x1 - x2) * progress, y2 + (y1 - y2) * progress);
        }else{
            ctx.moveTo(x1, y1);
            ctx.lineTo(x1 + dx * progress, y1 + dy * progress);
        }
        ctx.strokeStyle = edge.color;
        ctx.globalAlpha = opacity;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.globalAlpha = 1;

        // console.log('🎯 traceEdges visible now:', traceEdges);

      });


//       // 🔴 Red dot at (i, 3)
//     {
//         for (let i = -3; i <= 6; i++) {
//     const [x, y] = hexToPixel(i, 3, HEX_SIZE, centerX, centerY);
//     ctx.beginPath();
//     ctx.arc(x, y, 6, 0, 2 * Math.PI);
//     ctx.fillStyle = 'red';
//     ctx.fill();
//         }
//   }
  
//   // 🔵 Blue dot at (i, 2)
//   {
//     for (let i = -10; i <= 6; i++) {
//         const [x, y] = hexToPixel(i, 2, HEX_SIZE, centerX, centerY);
//         ctx.beginPath();
//         ctx.arc(x, y, 6, 0, 2 * Math.PI);
//         ctx.fillStyle = 'blue';
//         ctx.fill();
//             }
//   }
  
//   // 🟢 Green dot at (0, -2)
//   {
//     for (let i = -3; i <= 6; i++) {
//         const [x, y] = hexToPixel(i, 1, HEX_SIZE, centerX, centerY);
//         ctx.beginPath();
//         ctx.arc(x, y, 6, 0, 2 * Math.PI);
//         ctx.fillStyle = 'green';
//         ctx.fill();
//             }
       
//   }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    window.addEventListener('resize', render);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', render);
    };
  }, [traceEdges]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none"
    />
  );
};

export default LatticeBackgroundRenderer;
