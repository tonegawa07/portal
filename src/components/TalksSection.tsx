'use client';

import { talks } from '@/data/talks';

export default function TalksSection() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-center">Talks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {talks.map((talk, index) => (
          <div key={index} className="card p-6">
            <p className="text-sm text-foreground/60 mb-2">{talk.date}</p>
            <h3 className="text-lg font-semibold mb-3">{talk.title}</h3>
            <a 
              href={talk.eventUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-1 mb-4"
            >
              {talk.event}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            
            <div className="relative w-full" style={{ minHeight: talk.speakerDeckEmbed ? '315px' : '0' }}>
              {talk.speakerDeckEmbed && (
                <div 
                  className="relative w-full"
                  dangerouslySetInnerHTML={{ __html: talk.speakerDeckEmbed }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}