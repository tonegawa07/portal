'use client';

import { useEffect, useState } from 'react';
import type { SpeakerDeckPresentation } from '@/lib/speakerdeck';

export default function DecksSection() {
  const [decks, setDecks] = useState<SpeakerDeckPresentation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/decks')
      .then((res) => res.json())
      .then((data) => {
        setDecks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch decks:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="mb-4 md:mb-12">
      <h2 className="text-2xl font-semibold mb-3 md:mb-6 text-center">Decks</h2>
      {loading ? (
        <div className="text-center text-foreground/60">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-5xl mx-auto">
          {decks.map((deck) => (
            <a
              key={deck.slug}
              href={deck.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-3 md:p-6 block hover:shadow-md transition-shadow group"
            >
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1">
                  <img src="/speakerdeck-logo.svg" alt="Speaker Deck" className="h-8 w-8" />
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {deck.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
