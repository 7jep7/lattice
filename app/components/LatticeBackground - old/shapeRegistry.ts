import { Shape } from "./shape";

export const shapeRegistry: Record<
  string,
  (ctx: CanvasRenderingContext2D, progress: number, x: number, y: number, size: number) => void
> = {
  line: (ctx, progress, x, y, size) => {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + size * progress, y); // Animate line length
    ctx.strokeStyle = "orange";
    ctx.lineWidth = 2;
    ctx.stroke();
  },
  circle: (ctx, progress, x, y, size) => {
    ctx.beginPath();
    ctx.arc(x, y, size * progress, 0, Math.PI * 2); // Animate circle radius
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.stroke();
  },
  polygon: (ctx, progress, x, y, size) => {
    const sides = 6; // Example: hexagon
    const angleStep = (Math.PI * 2) / sides;
    ctx.beginPath();
    for (let i = 0; i <= sides; i++) {
      const angle = i * angleStep;
      const px = x + Math.cos(angle) * size * progress;
      const py = y + Math.sin(angle) * size * progress;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.stroke();
  },
};