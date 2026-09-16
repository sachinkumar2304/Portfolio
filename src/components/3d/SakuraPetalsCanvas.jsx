import React, { useEffect, useRef } from 'react';

export default function SakuraPetalsCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Sakura Petal Particle System - Subtle & Classy Atmospheric Mood
    const petalCount = 28;
    const petals = [];

    // Authentic Soft Sakura Colors (subtle, non-distracting)
    const petalPalettes = [
      { fill: 'rgba(232, 57, 95, 0.12)', stroke: 'rgba(232, 57, 95, 0.16)' },   // Sakura Crimson-Pink #E8395F
      { fill: 'rgba(248, 117, 147, 0.10)', stroke: 'rgba(248, 117, 147, 0.14)' }, // Soft Cherry Blossom Pink
      { fill: 'rgba(255, 235, 240, 0.08)', stroke: 'rgba(255, 235, 240, 0.12)' }, // Pale Sakura Blossom
      { fill: 'rgba(217, 36, 75, 0.11)', stroke: 'rgba(217, 36, 75, 0.15)' },   // Deep Petal Blush
    ];

    class Petal {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : -25;
        this.size = Math.random() * 9 + 7; // 7 to 16px
        this.speedY = Math.random() * 0.75 + 0.35; // Gentle downward drift
        this.speedX = Math.random() * 0.5 - 0.25; // Gentle wind drift
        this.swaySpeed = Math.random() * 0.02 + 0.008;
        this.swayAngle = Math.random() * Math.PI * 2;
        this.swayRadius = Math.random() * 2.0 + 0.8;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.022;
        this.flip = Math.random() * Math.PI;
        this.flipSpeed = Math.random() * 0.025 + 0.01;
        this.palette = petalPalettes[Math.floor(Math.random() * petalPalettes.length)];
      }

      update() {
        this.y += this.speedY;
        this.x += Math.sin(this.swayAngle) * this.swayRadius + this.speedX;
        this.swayAngle += this.swaySpeed;
        this.rotation += this.rotationSpeed;
        this.flip += this.flipSpeed;

        // Loop continuous
        if (this.y > height + 25 || this.x < -40 || this.x > width + 40) {
          this.reset(false);
        }
      }

      draw(context) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        context.scale(1, Math.sin(this.flip));

        // Draw realistic cherry blossom petal with subtle top indentation
        context.beginPath();
        context.moveTo(0, -this.size);
        
        // Right side curve
        context.bezierCurveTo(
          this.size * 0.85, -this.size * 0.55,
          this.size * 0.75, this.size * 0.45,
          0, this.size
        );
        
        // Left side curve
        context.bezierCurveTo(
          -this.size * 0.75, this.size * 0.45,
          -this.size * 0.85, -this.size * 0.55,
          0, -this.size
        );

        context.fillStyle = this.palette.fill;
        context.fill();

        // Delicate edge stroke
        context.lineWidth = 0.5;
        context.strokeStyle = this.palette.stroke;
        context.stroke();

        context.restore();
      }
    }

    // Initialize petals
    for (let i = 0; i < petalCount; i++) {
      petals.push(new Petal());
    }

    // Animation loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        petals[i].update();
        petals[i].draw(ctx);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
