import React from 'react';
import { SEO, Hero } from '../components/Shared';

const pad = (value: number) => value.toString().padStart(2, '0');

const formatLocalDateTime = (date: Date) =>
  `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}T${pad(date.getHours())}${pad(date.getMinutes())}00`;

const formatUtcTimestamp = (date: Date) =>
  date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

const Reminders: React.FC = () => {
  const handleDownload = () => {
    const now = new Date();
    const eventStart = new Date(now);
    eventStart.setHours(9, 0, 0, 0);
    if (now > eventStart) {
      eventStart.setDate(eventStart.getDate() + 1);
    }
    const eventEnd = new Date(eventStart);
    eventEnd.setMinutes(eventEnd.getMinutes() + 30);

    const uid = `tietoturva-${eventStart.getTime()}@laplandailab.fi`;
    const dtStamp = formatUtcTimestamp(now);
    const dtStart = formatLocalDateTime(eventStart);
    const dtEnd = formatLocalDateTime(eventEnd);

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Lapland AI Lab//Tietoturva//FI',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      `UID:${uid}`,
      `DTSTAMP:${dtStamp}`,
      `DTSTART:${dtStart}`,
      `DTEND:${dtEnd}`,
      'SUMMARY:Tietoturvan vuosisiivous',
      'DESCRIPTION:Vuosittainen muistutus tietoturvan suurpuhdistuksesta ja käytäntöjen läpikäynnistä.',
      'RRULE:FREQ=YEARLY',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'tietoturvan-vuosimuistutus.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const mailtoLink = `mailto:info@laplandailab.fi?subject=${encodeURIComponent(
    'Tietoturvamuistutus',
  )}&body=${encodeURIComponent(
    'Hei! Haluan tilata vuosittaisen tietoturvamuistutuksen organisaatiollemme. Kiitos!',
  )}`;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO
        title="Tietoturvamuistutukset | Lapland AI Lab"
        description="Tilaa vuosittainen tietoturvamuistutus kalenteriisi tai sähköpostiisi."
      />
      <Hero
        title="Tietoturvamuistutukset"
        subtitle="Pidä vuosittainen tietoturvan suursiivous kalenterissa ja varmista, että rutiinit pysyvät mielessä."
        label="Rutiinit käyttöön"
      />

      <div className="glass p-10 rounded-3xl border border-slate-800 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Lataa vuosimuistutus</h2>
          <p className="text-slate-400">
            Lisää “Tietoturvan vuosisiivous” kalenteriisi. Muistutus ajoittuu seuraavaan mahdolliseen
            päivään klo 09:00 ja toistuu vuosittain.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={handleDownload}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
          >
            Lataa vuosimuistutus (ICS)
          </button>
          <a
            href={mailtoLink}
            className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-xl transition-all text-center"
          >
            Tilaa muistutus sähköpostilla
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reminders;
