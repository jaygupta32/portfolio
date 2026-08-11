import React, { useEffect, useRef } from 'react';

export const Globe3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let size = canvas.width = canvas.height = 340;

    // Globe parameters
    const radius = size * 0.38;
    const centerX = size / 2;
    const centerY = size / 2;
    let rotationY = 0;
    let rotationX = 0.25;

    // Generate 3D latitude / longitude grid dots
    const dots: { x: number; y: number; z: number; lat: number; lon: number }[] = [];
    const latLines = 14;
    const lonLines = 24;

    for (let i = 0; i <= latLines; i++) {
      const lat = (Math.PI * i) / latLines - Math.PI / 2;
      for (let j = 0; j < lonLines; j++) {
        const lon = (2 * Math.PI * j) / lonLines;
        const x = radius * Math.cos(lat) * Math.cos(lon);
        const y = radius * Math.sin(lat);
        const z = radius * Math.cos(lat) * Math.sin(lon);
        dots.push({ x, y, z, lat, lon });
      }
    }

    // Key tech hubs/connection nodes
    const hubCoords = [
      { lat: 0.35, lon: 1.35, name: 'India (Ahmedabad)' },
      { lat: 0.42, lon: 0.95, name: 'Dubai' },
      { lat: 0.82, lon: -2.1, name: 'San Francisco' },
      { lat: 0.90, lon: -0.1, name: 'London' },
      { lat: 0.62, lon: 2.40, name: 'Tokyo' },
      { lat: 0.02, lon: 1.81, name: 'Singapore' }
    ];

    const hubs = hubCoords.map(hc => {
      const x = radius * Math.cos(hc.lat) * Math.cos(hc.lon);
      const y = radius * Math.sin(hc.lat);
      const z = radius * Math.cos(hc.lat) * Math.sin(hc.lon);
      return { x, y, z, name: hc.name };
    });

    let isDragging = false;
    let lastX = 0;
    let lastY = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      rotationY += dx * 0.008;
      rotationX += dy * 0.008;
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, size, size);

      if (!isDragging) {
        rotationY += 0.006;
      }

      // Outer atmosphere glow
      const atmGrad = ctx.createRadialGradient(centerX, centerY, radius * 0.8, centerX, centerY, radius * 1.25);
      atmGrad.addColorStop(0, 'rgba(59, 130, 246, 0.15)');
      atmGrad.addColorStop(0.5, 'rgba(6, 182, 212, 0.08)');
      atmGrad.addColorStop(1, 'rgba(2, 6, 23, 0)');
      ctx.fillStyle = atmGrad;
      ctx.fillRect(0, 0, size, size);

      // Outer glowing ring
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.1, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.25)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Transform & render dots
      const projectedDots: { x: number; y: number; z: number; alpha: number }[] = [];

      dots.forEach(p => {
        // Rotate Y
        let x1 = p.x * Math.cos(rotationY) + p.z * Math.sin(rotationY);
        let z1 = -p.x * Math.sin(rotationY) + p.z * Math.cos(rotationY);
        let y1 = p.y;

        // Rotate X
        let y2 = y1 * Math.cos(rotationX) - z1 * Math.sin(rotationX);
        let z2 = y1 * Math.sin(rotationX) + z1 * Math.cos(rotationX);
        let x2 = x1;

        // Perspective scale
        const alpha = (z2 + radius) / (2 * radius);
        projectedDots.push({
          x: centerX + x2,
          y: centerY + y2,
          z: z2,
          alpha: Math.max(0.1, alpha)
        });
      });

      // Render wireframe dots
      projectedDots.forEach(p => {
        if (p.z > -radius * 0.2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(0.6, p.alpha * 1.8), 0, Math.PI * 2);
          ctx.fillStyle = p.z > 0 ? `rgba(56, 189, 248, ${p.alpha * 0.8})` : `rgba(139, 92, 246, ${p.alpha * 0.4})`;
          ctx.fill();
        }
      });

      // Transform & render Hubs
      const projectedHubs: { x: number; y: number; z: number; name: string }[] = [];

      hubs.forEach(h => {
        let x1 = h.x * Math.cos(rotationY) + h.z * Math.sin(rotationY);
        let z1 = -h.x * Math.sin(rotationY) + h.z * Math.cos(rotationY);
        let y1 = h.y;

        let y2 = y1 * Math.cos(rotationX) - z1 * Math.sin(rotationX);
        let z2 = y1 * Math.sin(rotationX) + z1 * Math.cos(rotationX);
        let x2 = x1;

        if (z2 > 0) {
          projectedHubs.push({
            x: centerX + x2,
            y: centerY + y2,
            z: z2,
            name: h.name
          });
        }
      });

      // Draw connection lines between front hubs
      for (let i = 0; i < projectedHubs.length; i++) {
        for (let j = i + 1; j < projectedHubs.length; j++) {
          const h1 = projectedHubs[i];
          const h2 = projectedHubs[j];

          ctx.beginPath();
          ctx.moveTo(h1.x, h1.y);
          // Curved arc line
          const midX = (h1.x + h2.x) / 2;
          const midY = (h1.y + h2.y) / 2 - 25;
          ctx.quadraticCurveTo(midX, midY, h2.x, h2.y);
          ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)';
          ctx.lineWidth = 1;
          ctx.setLineDash([3, 3]);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      }

      // Draw Glowing Hub Nodes & Labels
      projectedHubs.forEach(h => {
        ctx.beginPath();
        ctx.arc(h.x, h.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#38BDF8';
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#06B6D4';
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.font = '9px "JetBrains Mono", monospace';
        ctx.fillStyle = '#E2E8F0';
        ctx.fillText(h.name, h.x + 8, h.y + 3);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center group cursor-grab active:cursor-grabbing select-none">
      <canvas ref={canvasRef} className="w-[300px] h-[300px] sm:w-[340px] sm:h-[340px]" />
      <div className="absolute bottom-2 text-[10px] font-mono text-cyan-400/80 bg-slate-950/70 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/30 flex items-center gap-1.5 shadow-lg">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>3D GLOBAL MESH • DRAG TO ROTATE</span>
      </div>
    </div>
  );
};
