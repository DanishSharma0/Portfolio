import React, { useEffect, useRef } from 'react';

export default function HologramBackground() {
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
    // simple 3D wireframe cube
    const vertices = [
      [-1, -1, -1],
      [1, -1, -1],
      [1, 1, -1],
      [-1, 1, -1],
      [-1, -1, 1],
      [1, -1, 1],
      [1, 1, 1],
      [-1, 1, 1],
    ];
    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 0], // back face
      [4, 5], [5, 6], [6, 7], [7, 4], // front face
      [0, 4], [1, 5], [2, 6], [3, 7], // connections
    ];
    const rotate = (point, ax, ay) => {
      const sinX = Math.sin(ax), cosX = Math.cos(ax);
      const sinY = Math.sin(ay), cosY = Math.cos(ay);
      // rotate around X then Y
      let [x, y, z] = point;
      // X rotation
      let dy = y * cosX - z * sinX;
      let dz = y * sinX + z * cosX;
      y = dy; z = dz;
      // Y rotation
      let dx = x * cosY + z * sinY;
      dz = -x * sinY + z * cosY;
      x = dx; z = dz;
      return [x, y, z];
    };
    let angleX = 0, angleY = 0;
    const render = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const projected = vertices.map(v => {
        const [x, y, z] = rotate(v, angleX, angleY);
        const scale = 200 / (z + 4); // simple perspective
        return [
          canvas.width / 2 + x * scale,
          canvas.height / 2 + y * scale,
        ];
      });
      ctx.strokeStyle = 'rgba(0,255,255,0.6)';
      ctx.lineWidth = 2;
      edges.forEach(([i, j]) => {
        const [x1, y1] = projected[i];
        const [x2, y2] = projected[j];
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });
      angleX += 0.002;
      angleY += 0.0015;
      requestAnimationFrame(render);
    };
    render();
    const onResize = () => setSize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return <canvas ref={canvasRef} className="hologram-canvas" />;
}
