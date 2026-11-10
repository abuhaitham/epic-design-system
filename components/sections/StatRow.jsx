import React, { useEffect, useRef, useState } from 'react';

const DEFAULT_STATS = [
  { value: '27', label: 'Years in Saudi education' },
  { value: '89', label: 'Organisations advised' },
  { value: '158', label: 'Leaders developed' },
  { value: '4,800', label: 'Trainees across 24 centres' },
];

function CountUp({ value, run, duration = 1600 }) {
  const target = parseFloat(String(value).replace(/[^0-9.]/g, '')) || 0;
  const hasComma = String(value).includes(',');
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf; const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      const e = 1 - Math.pow(1 - p, 4);
      setN(Math.round(target * e));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return <>{hasComma ? n.toLocaleString('en-US') : String(n)}</>;
}

export function StatRow({ stats = DEFAULT_STATS, countUp = true, className = '' }) {
  const ref = useRef(null);
  const [run, setRun] = useState(!countUp);
  useEffect(() => {
    if (!countUp || !ref.current || typeof IntersectionObserver === 'undefined') { setRun(true); return; }
    const io = new IntersectionObserver((es) => { if (es[0].isIntersecting) { setRun(true); io.disconnect(); } }, { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [countUp]);
  return (
    <div ref={ref} className={'epic-stats' + (className ? ' ' + className : '')}>
      {stats.map((s, i) => (
        <div className="epic-stat" key={i}>
          <span className="epic-stat__value">{countUp ? <CountUp value={s.value} run={run} /> : s.value}{s.suffix ? <span className="epic-stat__suffix">{s.suffix}</span> : null}</span>
          <span className="epic-stat__label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
