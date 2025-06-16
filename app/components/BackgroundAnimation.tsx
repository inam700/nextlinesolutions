"use client";
import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 100;
    const maxDistance = 120;

    const particles: {
      x: number;
      y: number;
      dx: number;
      dy: number;
      radius: number;
    }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 1.2,
        dy: (Math.random() - 0.5) * 1.2,
        radius: 2 + Math.random() * 1.5,
      });
    }

    // Mouse "virtual particle"
    const mouse = {
      x: undefined as number | undefined,
      y: undefined as number | undefined,
      radius: 0, // invisible but interactive
    };

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const drawLine = (p1: any, p2: any) => {
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < maxDistance) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(138, 2, 212, ${1 - distance / maxDistance})`;
        ctx.lineWidth = 0.8;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
        ctx.closePath();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let p of particles) {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#a500ff";
        ctx.fill();
        ctx.closePath();
      }

      // Particle-to-particle lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          drawLine(particles[i], particles[j]);
        }
      }

      // Particle-to-mouse lines
      if (mouse.x !== undefined && mouse.y !== undefined) {
        for (let p of particles) {
          drawLine(p, mouse);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Responsive resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default AnimatedBackground;
