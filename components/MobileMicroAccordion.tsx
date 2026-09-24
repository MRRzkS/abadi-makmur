"use client";

import { useId, useState } from "react";

export function MobileMicroAccordion({
  summary,
  children,
  className = "",
  index,
}: {
  summary: string;
  children: React.ReactNode;
  className?: string;
  index?: string;
}) {
  const contentId = useId();
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`micro-accordion ${className}`}
      data-open={open ? "true" : "false"}
    >
      <div className="micro-accordion-desktop-summary">
        {index ? <span className="micro-accordion-index">{index}</span> : null}
        <h3>{summary}</h3>
      </div>
      <button
        type="button"
        className="micro-accordion-toggle"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((value) => !value)}
      >
        {index ? <span className="micro-accordion-index">{index}</span> : null}
        <span className="micro-accordion-summary">{summary}</span>
        <span className="micro-accordion-icon" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
      <div id={contentId} className="micro-accordion-content">
        {children}
      </div>
    </div>
  );
}
