import { talks } from '@/data/talks';

export default function TalksSection() {
  return (
    <div id="talks" className="mb-4 md:mb-12">
      <h3 className="text-xl font-semibold mb-3 md:mb-6 text-center">Talks</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-5xl mx-auto">
        {talks.map((talk, index) => (
          <div key={index} className="card p-3 md:p-6">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-1">
                <svg className="h-8 w-8 text-foreground/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
              </span>
              <div className="flex-1 min-w-0">
                <h4 className="text-base md:text-lg font-semibold mb-2 line-clamp-2">
                  {talk.title}
                </h4>
                <div className="flex items-center gap-1 text-sm text-foreground/60 mb-2">
                  <time>{talk.date}</time>
                  <span className="mx-1">·</span>
                  <span className="line-clamp-1">{talk.event}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <a
                    href={talk.eventUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    Event
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  {talk.deckUrl && (
                    <a
                      href={talk.deckUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-primary transition-colors inline-flex items-center gap-1"
                    >
                      Slides
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
