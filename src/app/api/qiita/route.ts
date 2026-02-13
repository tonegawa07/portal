import { fetchQiitaArticles } from '@/lib/qiita';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const articles = await fetchQiitaArticles();
    return NextResponse.json(articles);
  } catch (error) {
    console.error('Failed to fetch Qiita articles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}

// API Routeは常に動的
export const dynamic = 'force-dynamic';
