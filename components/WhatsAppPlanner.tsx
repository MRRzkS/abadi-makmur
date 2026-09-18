'use client';

import { useMemo, useState } from 'react';
import { whatsappHref } from '@/lib/site';

const options = ['Pintu aluminium', 'Jendela aluminium', 'Kusen aluminium', 'Partisi kaca', 'Shower box', 'Lainnya'];

export function WhatsAppPlanner() {
  const [service, setService] = useState(options[0]);
  const [location, setLocation] = useState('Tangerang');
  const [note, setNote] = useState('');

  const href = useMemo(() => {
    const message = [
      'Halo Abadi Makmur Aluminium, saya ingin konsultasi.',
      `Kebutuhan: ${service}`,
      `Lokasi: ${location || 'belum diisi'}`,
      note ? `Catatan: ${note}` : '',
    ].filter(Boolean).join('\n');
    return whatsappHref(message);
  }, [service, location, note]);

  return (
    <div className="planner glass-panel">
      <div className="planner-head">
        <span>01</span>
        <div>
          <p className="eyebrow">QUICK INQUIRY</p>
          <h3>Siapkan pesan konsultasi.</h3>
        </div>
      </div>
      <div className="planner-grid">
        <label>
          <span>Layanan</span>
          <select value={service} onChange={(event) => setService(event.target.value)}>
            {options.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>
          <span>Lokasi proyek</span>
          <input value={location} onChange={(event) => setLocation(event.target.value)} placeholder="Contoh: Cikupa, Tangerang" />
        </label>
        <label className="planner-wide">
          <span>Catatan singkat</span>
          <textarea value={note} onChange={(event) => setNote(event.target.value)} placeholder="Ukuran perkiraan, jumlah bukaan, atau kebutuhan lain..." rows={3} />
        </label>
      </div>
      <a className="button button-primary planner-button" href={href} target="_blank" rel="noreferrer">
        Kirim ke WhatsApp <span>↗</span>
      </a>
      <p className="planner-footnote">Pesan dibuat di perangkat Anda. Website ini tidak menyimpan isi konsultasi.</p>
    </div>
  );
}
