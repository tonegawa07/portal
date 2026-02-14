import { fetchZennArticles } from '@/lib/zenn';
import { fetchQiitaArticles } from '@/lib/qiita';
import { NextResponse } from 'next/server';

export interface Article {
  id: string;
  title: string;
  url: string;
  publishedAt: string;
  source: 'zenn' | 'qiita';
  likeCount: number;
  bookmarkCount: number;
  emoji?: string;
}

export async function GET() {
  try {
    const [zennArticles, qiitaArticles] = await Promise.all([
      fetchZennArticles(),
      fetchQiitaArticles(),
    ]);

    // Zenn記事を統一フォーマットに変換
    const zennFormatted: Article[] = zennArticles.map((article) => ({
      id: `zenn-${article.id}`,
      title: article.title,
      url: `https://zenn.dev${article.path}`,
      publishedAt: article.published_at,
      source: 'zenn' as const,
      likeCount: article.liked_count,
      bookmarkCount: article.bookmarked_count,
      emoji: article.emoji,
    }));

    // Qiita記事を統一フォーマットに変換
    const qiitaFormatted: Article[] = qiitaArticles.map((article) => ({
      id: `qiita-${article.id}`,
      title: article.title,
      url: article.url,
      publishedAt: article.created_at,
      source: 'qiita' as const,
      likeCount: article.likes_count,
      bookmarkCount: article.stocks_count,
    }));

    // 統合して日付でソート
    const allArticles = [...zennFormatted, ...qiitaFormatted].sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });

    return NextResponse.json(allArticles);
  } catch (error) {
    console.error('Failed to fetch articles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}

// API Routeは常に動的
export const dynamic = 'force-dynamic';
