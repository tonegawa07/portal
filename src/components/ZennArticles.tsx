import { fetchZennArticles } from '@/lib/zenn';

export default async function ZennArticles() {
  const articles = await fetchZennArticles();

  return (
    <div className="mb-4 md:mb-12">
      <h2 className="text-2xl font-semibold mb-3 md:mb-6 text-center flex items-center justify-center gap-2">
        <img src="/zenn-logo.svg" alt="Zenn" className="h-6 w-6" />
        Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-5xl mx-auto">
        {articles.map((article) => (
          <a
            key={article.id}
            href={`https://zenn.dev${article.path}`}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-3 md:p-6 block hover:shadow-md transition-shadow group"
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl flex-shrink-0">{article.emoji}</span>
              <div className="flex-1 min-w-0">
                <h3 className="text-base md:text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center gap-1 text-sm text-foreground/60">
                  <time>{new Date(article.published_at).toLocaleDateString('ja-JP')}</time>
                  <span className="mx-1">·</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {article.liked_count}
                  </span>
                  <span className="mx-1">·</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    {article.bookmarked_count}
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}