export type Talk = {
  date: string;
  event: string;
  eventUrl?: string;
  title: string;
  speakerDeckEmbed?: string;
};

// 登壇情報を追加する際は、このファイルのtalks配列に追加するだけでOK
// speakerDeckEmbedには、Speaker Deckの埋め込みコードをそのままコピペしてください
export const talks: Talk[] = [
  {
    date: "2025.11.12",
    event: "僕・私が考える最強の開発生産性を紹介します！【D-Plus Tokyo#19】",
    eventUrl: "https://d-plus.connpass.com/event/373156/",
    title: "開発生産性が組織文化になるまでの軌跡",
    speakerDeckEmbed: `<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/78620a917bb74756bf1c73a0793937ae" title="開発生産性が組織文化になるまでの軌跡" allowfullscreen="true" style="border: 0px; background: padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>`,
  },
  {
    date: "2025.10.23",
    event: "BuiLT",
    title: "秩序を保つためのレイヤードアーキテクチャ",
    speakerDeckEmbed: `<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/b85e04a2d3d847b79fadd0aa83985e86" title="秩序を保つためのレイヤードアーキテクチャ" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>`,
  },
  {
    date: "2025.09.18",
    event: "めぐろLT #31 「うちのチーム開発こうしてます」",
    eventUrl: "https://meguro-lt.connpass.com/event/363098",
    title: "社内LTで醸成する開発組織のアウトプット文化",
    speakerDeckEmbed: `<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/f55137b336f548b0a90a099e7b2dd906" title="社内LTで醸成する開発組織のアウトプット文化" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>`,
  },
  {
    date: "2025.08.20",
    event: "Mita.ts #7",
    eventUrl: "https://mitats.connpass.com/event/360508",
    title: "TypeSpecで実現する辛くないOpenAPIスキーマ駆動開発",
    speakerDeckEmbed: `<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/2030d716d33b423da20882b5a576fb2e" title="TypeSpecで実現する辛くないOpenAPIスキーマ駆動開発" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>`,
  },
  {
    date: "2025.07.30",
    event: "失敗談Night 2025 Summer",
    eventUrl: "https://dev-hive.connpass.com/event/361846",
    title: "コミュニケーション不足が起こした悲劇",
  },
  {
    date: "2025.07.14",
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
