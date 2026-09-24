'use client';

import { useState } from 'react';

export function ArticleBodyMobile({ html }: { html: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="article-body-parity" data-open={open ? 'true' : 'false'}>
      <div className="article-body-desktop" dangerouslySetInnerHTML={{ __html: html }} />
      <div className="article-body-mobile">
        <button type="button" className="article-body-toggle" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span>{open ? 'Tutup artikel' : 'Baca artikel lengkap'}</span>
          <b aria-hidden="true">{open ? '−' : '+'}</b>
        </button>
        <div className="article-body-mobile-content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
