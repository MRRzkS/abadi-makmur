'use client';

import { usePathname } from 'next/navigation';
import { whatsappHref } from '@/lib/site';

export function StickyWhatsApp() {
  const pathname = usePathname();

  return (
    <a
      className="sticky-whatsapp"
      href={whatsappHref({ sourcePath: pathname })}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat Abadi Makmur Aluminium melalui WhatsApp"
      title="Chat via WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path
          d="M12 3.25a8.5 8.5 0 0 0-7.3 12.86L3.6 20.4l4.36-1.03A8.5 8.5 0 1 0 12 3.25Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.15 7.55c.55 3.5 2.8 5.75 6.3 6.3l1.05-1.45 2.25 1.3c.32.18.45.57.3.9-.45 1.02-1.43 1.94-2.57 2.13-2.08.35-5.08-1.35-7.18-3.45-2.1-2.1-3.8-5.1-3.45-7.18.19-1.14 1.11-2.12 2.13-2.57.33-.15.72-.02.9.3l1.3 2.25-1.45 1.05c-.31.22-.45.58-.38.95Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
