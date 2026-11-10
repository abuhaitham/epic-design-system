import React, { useState } from 'react';
import { Icon } from '../brand/Icon.jsx';

export function FAQAccordion({ items = [], defaultOpen = 0, multiple = false, className = '' }) {
  const [open, setOpen] = useState(defaultOpen == null ? [] : [defaultOpen]);
  const toggle = (i) => setOpen((o) => o.includes(i) ? o.filter((x) => x !== i) : multiple ? [...o, i] : [i]);
  return (
    <div className={'epic-faq' + (className ? ' ' + className : '')}>
      {items.map((it, i) => {
        const isOpen = open.includes(i);
        return (
          <div key={i} className={'epic-faq__item' + (isOpen ? ' is-open' : '')}>
            <button type="button" className="epic-faq__q" aria-expanded={isOpen} onClick={() => toggle(i)}>
              <span>{it.q}</span>
              <span className="epic-faq__icon"><Icon name="plus" size={18} /></span>
            </button>
            <div className="epic-faq__a" role="region"><div><p>{it.a}</p></div></div>
          </div>
        );
      })}
    </div>
  );
}
