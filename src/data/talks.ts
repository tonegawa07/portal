export type Talk = {
  date: string;
  event: string;
  eventUrl: string;
  title: string;
  speakerDeckEmbed?: string | null;
};

// 登壇情報を追加する際は、このファイルのtalks配列に追加するだけでOK
// speakerDeckEmbedには、Speaker Deckの埋め込みコードをそのままコピペしてください
export const talks: Talk[] = [
  {
    date: "2024.07.14",
    event: "めぐろLT #29 「Vibe Codingで作ったものをおしえてください」",
    eventUrl: "https://meguro-lt.connpass.com/event/359809",
    title: "構造化・自動化・ガードレール - Vibe Coding実践記 -",
    speakerDeckEmbed: `<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/fda4afa0cf7c4b85b6f0ad37302710f6" title="構造化・自動化・ガードレール - Vibe Coding実践記 -" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>`,
  },
  {
    date: "2025.04.25",
    event: "めぐろLT #26 「データエンジニアリングよもやま」",
    eventUrl: "https://meguro-lt.connpass.com/event/347477",
    title: "DuckDBを使ってみたら分析プロジェクトが動き出した",
    speakerDeckEmbed: `<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/2cf07456dbf04546941b9e70c0bde338" title="DuckDBを使ってみたら分析プロジェクトが動き出した" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>`,
  },
];
