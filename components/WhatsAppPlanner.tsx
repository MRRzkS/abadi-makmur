'use client';

import { useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { whatsappHref } from '@/lib/site';

const options = ['Pintu Aluminium', 'Jendela Aluminium', 'Kusen Aluminium', 'Partisi Kaca', 'Shower Box', 'Lainnya'];

export function WhatsAppPlanner({ defaultService }: { defaultService?: string }) {
  const pathname = usePathname();
  const [service, setService] = useState(defaultService || options[0]);
  const [location, setLocation] = useState('');
  const [note, setNote] = useState('');

  const href = useMemo(() => {
    const details = [
      `Lokasi proyek: ${location || 'belum diisi'}`,
      note ? `Catatan: ${note}` : '',
    ].filter(Boolean);

    return whatsappHref({
      sourcePath: pathname,
      service,
      details,
    });
  }, [pathname, service, location, note]);

  return (
    <div className="planner glass-panel">
      <div className="planner-head">
        <span>01</span>
        <div>
          <p className="eyebrow">KONSULTASI CEPAT</p>
          <h3>Ceritakan kebutuhan Anda.</h3>
        </div>
      </div>
      <div className="planner-grid">
        <label>
          <span>Layanan & Produk</span>
          <select value={service} onChange={(event) => setService(event.target.value)}>
            {options.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>
          <span>Lokasi proyek</span>
          <input value={location} onChange={(event) => setLocation(event.target.value)} placeholder="Contoh: Jakarta Selatan, Depok, Bekasi..." />
        </label>
        <label className="planner-wide">
          <span>Catatan singkat</span>
          <textarea value={note} onChange={(event) => setNote(event.target.value)} placeholder="Ukuran perkiraan, jumlah bukaan, atau kebutuhan lain..." rows={3} />
        </label>
      </div>
      <a className="button button-primary planner-button" href={href} target="_blank" rel="noreferrer">
        Kirim ke WhatsApp <span>↗</span>
      </a>
      <p className="planner-footnote">Isi konsultasi tidak disimpan.</p>
    </div>
  );
}
