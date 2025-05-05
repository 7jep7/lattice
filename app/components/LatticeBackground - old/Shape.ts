export class Shape {
  constructor(
    private ctx: CanvasRenderingContext2D,
    private type: "line" | "circle" | "polygon",
    private x: number,
    private y: number,
    private size: number,
    private color: string,
    private animationProgress: () => number // Function to get scroll-based progress (0 to 1)
  ) {}

  draw() {
    const progress = this.animationProgress(); // Get scroll progress (0 to 1)
    this.ctx.save();
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 2;

    if (this.type === "line") {
      this.ctx.beginPath();
      this.ctx.moveTo(this.x, this.y);
      this.ctx.lineTo(this.x + this.size * progress, this.y); // Animate line length
      this.ctx.stroke();
    } else if (this.type === "circle") {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.size * progress, 0, Math.PI * 2); // Animate circle radius
      this.ctx.stroke();
    } else if (this.type === "polygon") {
      const sides = 6; // Example: hexagon
      const angleStep = (Math.PI * 2) / sides;
      this.ctx.beginPath();
      for (let i = 0; i <= sides; i++) {
        const angle = i * angleStep;
        const px = this.x + Math.cos(angle) * this.size * progress;
        const py = this.y + Math.sin(angle) * this.size * progress;
        if (i === 0) this.ctx.moveTo(px, py);
        else this.ctx.lineTo(px, py);
      }
      this.ctx.closePath();
      this.ctx.stroke();
    }

    this.ctx.restore();
  }
}