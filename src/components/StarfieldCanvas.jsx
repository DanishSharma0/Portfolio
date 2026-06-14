import React, { useEffect, useRef } from 'react';

export default function StarfieldCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    const w = canvas.width;
    const h = canvas.height;
    // create star objects
    const starCount = 200;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.2 + 0.3,
      speed: Math.random() * 0.4 + 0.2,
    }));

    let animationFrameId;
    const render = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#fff';
      for (const s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        s.x -= s.speed;
        if (s.x < 0) s.x = w;
      }
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    const onResize = () => {
      resize();
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield-canvas" />;
}
