'use client';

import { useEffect, useState } from 'react';
import type { Article } from '@/app/api/articles/route';

export default function ArticlesSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/articles')
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch articles:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="mb-4 md:mb-12">
      <h2 className="text-2xl font-semibold mb-3 md:mb-6 text-center">Articles</h2>
      {loading ? (
        <div className="text-center text-foreground/60">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-5xl mx-auto">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-3 md:p-6 block hover:shadow-md transition-shadow group"
            >
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0">
                  <img
                    src={article.source === 'zenn' ? '/zenn-logo.svg' : '/qiita-logo.svg'}
                    alt={article.source === 'zenn' ? 'Zenn' : 'Qiita'}
                    className="h-8 w-8"
                  />
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-foreground/60">
                    <time>{new Date(article.publishedAt).toLocaleDateString('ja-JP')}</time>
                    <span className="mx-1">·</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      {article.likeCount}
                    </span>
                    <span className="mx-1">·</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                      {article.bookmarkCount}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
