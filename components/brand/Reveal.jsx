import React, { useEffect, useRef, useState } from 'react';

export function Reveal({ as = 'div', delay = 0, variant = 'up', once = true, threshold = 0.15, className = '', style, children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setVisible(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { setVisible(true); if (once) io.disconnect(); }
        else if (!once) setVisible(false);
      });
    }, { threshold, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);
  const Tag = as;
  const v = variant === 'up' ? '' : ' epic-reveal--' + variant;
  return (
    <Tag ref={ref} className={'epic-reveal' + v + (visible ? ' is-visible' : '') + (className ? ' ' + className : '')}
      style={{ '--reveal-delay': delay + 'ms', ...style }} {...rest}>{children}</Tag>
  );
}
