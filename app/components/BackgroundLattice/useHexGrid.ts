import { hexToPixel } from './hexUtils';

export function drawHexGrid(
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    hexSize: number,
    cx: number,
    cy: number
  ) {
    ctx.save();
    
    // Check if dark mode is active
    const isDarkMode = document.documentElement.classList.contains('dark');
    
    // Use appropriate color based on theme
    if (isDarkMode) {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)'; // White with low opacity for dark mode
    } else {
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.04)'; // Black with slightly higher opacity for light mode
    }
    
    ctx.lineWidth = 1.2;
  
    const hexHeight = Math.sqrt(3) * hexSize;
    const cols = Math.ceil(w / (hexSize * 1.5)) + 4; // added padding
    const rows = Math.ceil(h / hexHeight) + 4;
  
    const colStart = -Math.floor(cols / 2);
    const colEnd = Math.ceil(cols / 2);
    const rowStart = -Math.floor(rows / 2);
    const rowEnd = Math.ceil(rows / 2);

    for (let row = rowStart; row < rowEnd; row++) {
        for (let col = colStart; col < colEnd; col++) {
            const [x, y] = hexToPixel(col, row, hexSize, cx, cy);

            // OPTIONAL: Skip offscreen hexes for performance
            if (x < -hexSize || x > w + hexSize || y < -hexSize || y > h + hexSize)
                continue;
    
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
