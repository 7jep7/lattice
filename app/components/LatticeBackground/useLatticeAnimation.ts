import type { LatticeOptions } from './types';

export class LatticeLine {
    x = 0;
    y = 0;
    addedX = 0;
    addedY = 0;
    rad = 0;
    lightInputMultiplier: number;
    color: string;
    cumulativeTime = 0;
    time = 0;
    targetTime = 0;

    constructor(private tick: () => number, private opts: LatticeOptions) {
        this.lightInputMultiplier = opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();
        this.color = `hsl(${this.tick() * opts.hueChange}, 100%, ${opts.baseLight}%)`;
        this.beginPhase();
    }


    beginPhase() {
        this.x += this.addedX;
        this.y += this.addedY;
        this.time = 0;
        this.targetTime = (this.opts.baseTime + this.opts.addedTime * Math.random()) | 0;
        this.rad += (Math.PI * 2 / 6) * (Math.random() < 0.5 ? 1 : -1);
        this.addedX = Math.cos(this.rad);
        this.addedY = Math.sin(this.rad);

        const { dieChance, len } = this.opts;
        const dieX = window.innerWidth / 2 / len;
        const dieY = window.innerHeight / 2 / len;
        if (Math.random() < dieChance || this.x > dieX || this.x < -dieX || this.y > dieY || this.y < -dieY) {
        this.reset();
        }
    }

    reset() {
        this.x = 0;
        this.y = 0;
        this.addedX = 0;
        this.addedY = 0;
        this.rad = 0;
        this.cumulativeTime = 0;
        this.color = `hsl(${this.tick() * this.opts.hueChange}, 100%, ${this.opts.baseLight}%)`;
        this.beginPhase();
    }

    step(ctx: CanvasRenderingContext2D) {
        this.time++;
        this.cumulativeTime++;
        if (this.time >= this.targetTime) this.beginPhase();

        const prop = this.time / this.targetTime;
        const wave = Math.sin((prop * Math.PI) / 2);
        const x = this.addedX * wave;
        const y = this.addedY * wave;

        ctx.shadowBlur = prop * this.opts.shadowToTimePropMult;
        const lightness = this.opts.baseLight + this.opts.addedLight * Math.sin(this.cumulativeTime * this.lightInputMultiplier);
        ctx.fillStyle = ctx.shadowColor = `hsl(30, 100%, ${lightness}%)`;

        ctx.beginPath();
        ctx.moveTo(this.opts.cx + this.x * this.opts.len, this.opts.cy + this.y * this.opts.len);
        ctx.lineTo(
        this.opts.cx + (this.x + x) * this.opts.len,
        this.opts.cy + (this.y + y) * this.opts.len
        );
        const traceAlpha = 0.4 * (1 - prop);
        ctx.strokeStyle = `hsla(30, 100%, ${lightness}%, ${traceAlpha})`;
        ctx.lineWidth = 1.5 + 1.5 * (1 - prop);
        ctx.stroke();
        
        //now flickering dots for the time being, commented out
    //   const flickerSize = 1 + Math.random() * 1.5;
    //   ctx.globalAlpha = 0.15 + Math.random() * 0.2;
    //   ctx.fillRect(
    //     this.opts.cx + this.x * this.opts.len - flickerSize / 2,
    //     this.opts.cy + this.y * this.opts.len - flickerSize / 2,
    //     flickerSize,
    //     flickerSize
    //   );
    //   ctx.globalAlpha = 1;

    //   if (Math.random() < this.opts.sparkChance) {
    //     ctx.fillRect(
    //       this.opts.cx + (this.x + x) * this.opts.len + Math.random() * this.opts.sparkDist * (Math.random() < 0.5 ? 1 : -1),
    //       this.opts.cy + (this.y + y) * this.opts.len + Math.random() * this.opts.sparkDist * (Math.random() < 0.5 ? 1 : -1),
    //       this.opts.sparkSize,
    //       this.opts.sparkSize
    //     );
    //   }
    }
}
