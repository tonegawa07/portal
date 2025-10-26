const ZENN_USERNAME = 'tonegawa07';

export interface ZennArticle {
  id: number;
  post_type: string;
  title: string;
  slug: string;
  comments_count: number;
  liked_count: number;
  bookmarked_count: number;
  body_letters_count: number;
  article_type: string;
  emoji: string;
  is_suspending_private: boolean;
  published_at: string;
  body_updated_at: string;
  source_repo_updated_at: string;
  pinned: boolean;
  path: string;
  principal_type: string;
  user: {
    id: number;
    username: string;
    name: string;
    avatar_small_url: string;
  };
  publication: null;
  publication_article_override: null;
}

export interface ZennResponse {
  articles: ZennArticle[];
  next_page: null;
  total_count: null;
}

export async function fetchZennArticles(): Promise<ZennArticle[]> {
  const response = await fetch(
    `https://zenn.dev/api/articles?username=${ZENN_USERNAME}&order=latest`,
    {
      next: { revalidate: 86400 } // 24時間ごとに再検証
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch Zenn articles');
  }

  const data: ZennResponse = await response.json();
  return data.articles;
}
