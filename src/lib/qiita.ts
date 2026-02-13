const QIITA_USERNAME = 'tonegawa07';

export interface QiitaArticle {
  id: string;
  title: string;
  url: string;
  likes_count: number;
  stocks_count: number;
  comments_count: number;
  created_at: string;
  updated_at: string;
  tags: {
    name: string;
    versions: string[];
  }[];
  user: {
    id: string;
    name: string;
    profile_image_url: string;
  };
}

export async function fetchQiitaArticles(): Promise<QiitaArticle[]> {
  const response = await fetch(
    `https://qiita.com/api/v2/users/${QIITA_USERNAME}/items?per_page=20`,
    {
      cache: 'no-store', // 常に最新データを取得
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch Qiita articles');
  }

  const data: QiitaArticle[] = await response.json();
  return data;
}
