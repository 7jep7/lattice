export function drawHexGrid(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  len: number,
  cx: number,
  cy: number
) {
  const dx = len * 3; // Horizontal distance between hex centers
  const dy = len * Math.sqrt(3) / 2; // Correct vertical distance between hex centers
  const cols = Math.ceil(w / dx) + 2; // Number of columns
  const rows = Math.ceil(h / dy) + 2; // Number of rows

  for (let row = -Math.floor(rows / 2); row < Math.ceil(rows / 2); row++) {
    for (let col = -Math.floor(cols / 2); col < Math.ceil(cols / 2); col++) {
      const x = cx + dx * col + (row % 2 === 0 ? 0 : dx / 2); // Offset every other row
      const y = cy + dy * row;
      drawHex(ctx, x, y, len);
    }
  }
}

function drawHex(ctx: CanvasRenderingContext2D, x: number, y: number, len: number) {
  const angleStep = (Math.PI * 2) / 6; // 60 degrees per side
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = i * angleStep;
    const px = x + len * Math.cos(angle);
    const py = y + len * Math.sin(angle);
    ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"; // Light grid color
  ctx.lineWidth = 1;
  ctx.stroke();
}