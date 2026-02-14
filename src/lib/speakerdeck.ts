const SPEAKERDECK_USERNAME = 'tonegawa07';

export interface SpeakerDeckPresentation {
  slug: string;
  title: string;
  url: string;
  publishedAt: string;
  thumbnailUrl?: string;
}

export async function fetchSpeakerDeckPresentations(): Promise<SpeakerDeckPresentation[]> {
  const response = await fetch(
    `https://speakerdeck.com/${SPEAKERDECK_USERNAME}.atom`,
    {
      cache: 'no-store', // 常に最新データを取得
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch SpeakerDeck feed');
  }

  const xml = await response.text();

  // Atomフィードからエントリーを抽出
  const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) || [];

  return entries.map((entry) => {
    const titleMatch = entry.match(/<title>(.*?)<\/title>/);
    const linkMatch = entry.match(/<link.*?href="(.*?)"/);
    const publishedMatch = entry.match(/<published>(.*?)<\/published>/);
    const thumbnailMatch = entry.match(/<media:thumbnail url="(.*?)"/);

    const url = linkMatch?.[1] || '';
    const slug = url.split('/').pop() || '';

    // published日付をYYYY.MM.DD形式に変換
    const publishedDate = publishedMatch?.[1]
      ? new Date(publishedMatch[1]).toLocaleDateString('ja-JP', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }).replace(/\//g, '.')
      : '';

    return {
      slug,
      title: titleMatch?.[1] || '',
      url,
      publishedAt: publishedDate,
      thumbnailUrl: thumbnailMatch?.[1],
    };
  });
}
