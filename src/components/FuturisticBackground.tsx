import React, { useEffect, useRef } from 'react';

export const FuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates for particle attraction/glow
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Particles Setup
    const particleCount = prefersReducedMotion ? 35 : Math.min(85, Math.floor((width * height) / 18000));
    const particles: Particle[] = [];

    const colors = ['#3B82F6', '#8B5CF6', '#06B6D4', '#60A5FA', '#C084FC'];

    interface Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      pulse: number;
      pulseSpeed: number;
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        pulse: Math.random() * Math.PI,
        pulseSpeed: 0.02 + Math.random() * 0.03
      });
    }

    // Floating Code Fragments
    const codeFragments = [
      'const dev = "Jay Gupta";',
      'npm run dev',
      'git push origin main',
      'await system.deploy()',
      'API_STATUS: 200 OK',
      'JWT_TOKEN: VERIFIED',
      'SOCKET: CONNECTED',
      'QA: 100% PASSED',
      'BOT_STATUS: RUNNING',
      'PAYMENT_INTENT: SUCCESS',
      'function buildFuture() {}',
      'Docker container healthy'
    ];

    interface FloatingCode {
      text: string;
      x: number;
      y: number;
      vy: number;
      opacity: number;
      color: string;
      size: number;
    }

    const floatingCodes: FloatingCode[] = [];
    const codeCount = prefersReducedMotion ? 4 : 8;

    for (let i = 0; i < codeCount; i++) {
      floatingCodes.push({
        text: codeFragments[Math.floor(Math.random() * codeFragments.length)],
        x: Math.random() * (width - 200) + 50,
        y: Math.random() * height,
        vy: -0.2 - Math.random() * 0.3,
        opacity: Math.random() * 0.3 + 0.1,
        color: Math.random() > 0.5 ? '#38BDF8' : '#A78BFA',
        size: Math.floor(Math.random() * 2) + 11
      });
    }

    // Grid Beam lines
    let beamY = 0;

    // Animation Loop
    const render = () => {
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Dark background gradient
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, width, height);

      // Deep radial glow overlays (Aurora effect)
      const grad1 = ctx.createRadialGradient(
        width * 0.2, height * 0.2, 0,
        width * 0.2, height * 0.2, width * 0.5
      );
      grad1.addColorStop(0, 'rgba(59, 130, 246, 0.12)');
      grad1.addColorStop(1, 'rgba(2, 6, 23, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(
        width * 0.8, height * 0.7, 0,
        width * 0.8, height * 0.7, width * 0.6
      );
      grad2.addColorStop(0, 'rgba(139, 92, 246, 0.10)');
      grad2.addColorStop(1, 'rgba(2, 6, 23, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Cyber Grid Pattern
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.04)';
      const gridSize = 60;

      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Moving Scanline Light Beam
      if (!prefersReducedMotion) {
        beamY = (beamY + 0.8) % height;
        const beamGrad = ctx.createLinearGradient(0, beamY - 10, 0, beamY + 10);
        beamGrad.addColorStop(0, 'rgba(6, 182, 212, 0)');
        beamGrad.addColorStop(0.5, 'rgba(6, 182, 212, 0.08)');
        beamGrad.addColorStop(1, 'rgba(6, 182, 212, 0)');
        ctx.fillStyle = beamGrad;
        ctx.fillRect(0, beamY - 10, width, 20);
      }

      // Render Floating Code Snippets
      ctx.font = '12px "JetBrains Mono", monospace';
      floatingCodes.forEach((fc) => {
        if (!prefersReducedMotion) {
          fc.y += fc.vy;
          if (fc.y < -20) {
            fc.y = height + 20;
            fc.x = Math.random() * (width - 200) + 50;
            fc.text = codeFragments[Math.floor(Math.random() * codeFragments.length)];
          }
        }
        ctx.fillStyle = fc.color;
        ctx.globalAlpha = fc.opacity;
        ctx.fillText(fc.text, fc.x, fc.y);
        ctx.globalAlpha = 1.0;
      });

      // Render Particles and Connecting Lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        if (!prefersReducedMotion) {
          p1.x += p1.vx;
          p1.y += p1.vy;

          if (p1.x < 0 || p1.x > width) p1.vx *= -1;
          if (p1.y < 0 || p1.y > height) p1.vy *= -1;

          p1.pulse += p1.pulseSpeed;
        }

        const currentRadius = p1.radius + Math.sin(p1.pulse) * 0.8;

        // Draw Particle
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p1.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Interconnect with mouse if active
        if (mouse.active) {
          const dxMouse = mouse.x - p1.x;
          const dyMouse = mouse.y - p1.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
          if (distMouse < 180) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            const alpha = (1 - distMouse / 180) * 0.35;
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw connections between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist / 130) * 0.18;
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
