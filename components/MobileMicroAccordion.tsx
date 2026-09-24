'use client';

import { useState } from 'react';

export function MobileMicroAccordion({
  summary,
  children,
  className = '',
  index,
}: {
  summary: string;
  children: React.ReactNode;
  className?: string;
  index?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`micro-accordion ${className}`} data-open={open ? 'true' : 'false'}>
      <button
        type="button"
        className="micro-accordion-toggle"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {index ? <span className="micro-accordion-index">{index}</span> : null}
        <span className="micro-accordion-summary">{summary}</span>
        <span className="micro-accordion-icon" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      <div className="micro-accordion-content">{children}</div>
    </div>
  );
}
