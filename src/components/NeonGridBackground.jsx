import React, { useEffect, useRef } from 'react';

export default function NeonGridBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    // generate grid points
    const step = 0.4;
    const points = [];
    for (let x = -1; x <= 1; x += step) {
      for (let y = -1; y <= 1; y += step) {
        for (let z = -1; z <= 1; z += step) {
          points.push({ x, y, z });
        }
      }
    }
    // create edges between neighboring points (simple Manhattan adjacency)
    const edges = [];
    const tolerance = 0.01;
    points.forEach(p => {
      points.forEach(q => {
        const dx = Math.abs(p.x - q.x);
        const dy = Math.abs(p.y - q.y);
        const dz = Math.abs(p.z - q.z);
        const diffCount = (dx > tolerance ? 1 : 0) + (dy > tolerance ? 1 : 0) + (dz > tolerance ? 1 : 0);
        if (diffCount === 1 && (dx + dy + dz) === step) {
          edges.push([p, q]);
        }
      });
    });

    const rotate = (pt, ax, ay) => {
      const sinX = Math.sin(ax), cosX = Math.cos(ax);
      const sinY = Math.sin(ay), cosY = Math.cos(ay);
      let { x, y, z } = pt;
      // rotate X
      let dy = y * cosX - z * sinX;
      let dz = y * sinX + z * cosX;
      y = dy; z = dz;
      // rotate Y
      let dx = x * cosY + z * sinY;
      dz = -x * sinY + z * cosY;
      x = dx; z = dz;
      return { x, y, z };
    };

    let angleX = 0, angleY = 0;
    const render = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(0,255,255,0.6)';
      ctx.lineWidth = 1.2;
      // project and draw edges
      edges.forEach(([a, b]) => {
        const ra = rotate(a, angleX, angleY);
        const rb = rotate(b, angleX, angleY);
        const scaleA = 200 / (ra.z + 4);
        const scaleB = 200 / (rb.z + 4);
        const ax = canvas.width / 2 + ra.x * scaleA;
        const ay = canvas.height / 2 + ra.y * scaleA;
        const bx = canvas.width / 2 + rb.x * scaleB;
        const by = canvas.height / 2 + rb.y * scaleB;
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        ctx.stroke();
      });
      angleX += 0.0015;
      angleY += 0.001;
      requestAnimationFrame(render);
    };
    render();

    const onResize = () => setSize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return <canvas ref={canvasRef} className="hologram-canvas" />;
}
