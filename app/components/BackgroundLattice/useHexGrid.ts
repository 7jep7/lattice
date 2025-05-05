export function drawHexGrid(
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    hexSize: number
  ) {
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
    ctx.lineWidth = 1.2;
  
    const hexHeight = Math.sqrt(3) * hexSize;
    const cols = Math.ceil(w / (hexSize * 1.5)) + 2;
    const rows = Math.ceil(h / hexHeight) + 2;
  
    for (let row = -1; row < rows; row++) {
      for (let col = -1; col < cols; col++) {
        const x = col * hexSize * 1.5;
        const y = row * hexHeight + (col % 2 === 0 ? 0 : hexHeight / 2);
  
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = Math.PI / 3 * i;
          const px = x + hexSize * Math.cos(angle);
          const py = y + hexSize * Math.sin(angle);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
      }
    }
  
    ctx.restore();
  }
  