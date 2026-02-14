import { fetchSpeakerDeckPresentations } from '@/lib/speakerdeck';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const decks = await fetchSpeakerDeckPresentations();
    return NextResponse.json(decks);
  } catch (error) {
    console.error('Failed to fetch SpeakerDeck presentations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch presentations' },
      { status: 500 }
    );
  }
}

// API Routeは常に動的
export const dynamic = 'force-dynamic';
