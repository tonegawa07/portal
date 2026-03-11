export type Talk = {
  date: string;
  event: string;
  eventUrl: string;
  title: string;
  deckUrl?: string;
};

// 登壇情報を手動で管理（資料あり/なし関係なく）
export const talks: Talk[] = [
  {
    date: "2026.02.28",
    event: "React Tokyo フェス 2026",
    eventUrl: "https://react-tokyo.vercel.app/fes2026",
    title: "OpenAPI TypeScriptで実現する型安全なスキーマ駆動開発",
  },
  {
    date: "2025.11.12",
    event: "僕・私が考える最強の開発生産性を紹介します！【D-Plus Tokyo#19】",
    eventUrl: "https://d-plus.connpass.com/event/373156/",
    title: "開発生産性が組織文化になるまでの軌跡",
    deckUrl: "https://speakerdeck.com/tonegawa07/kai-fa-sheng-chan-xing-gazu-zhi-wen-hua-ninarumadenogui-ji",
  },
  {
    date: "2025.09.18",
    event: "めぐろLT #31 「うちのチーム開発こうしてます」",
    eventUrl: "https://meguro-lt.connpass.com/event/363098",
    title: "社内LTで醸成する開発組織のアウトプット文化",
    deckUrl: "https://speakerdeck.com/tonegawa07/she-nei-ltdeniang-cheng-surukai-fa-zu-zhi-noautopututowen-hua",
  },
  {
    date: "2025.08.20",
    event: "Mita.ts #7",
    eventUrl: "https://mitats.connpass.com/event/360508",
    title: "TypeSpecで実現する辛くないOpenAPIスキーマ駆動開発",
    deckUrl: "https://speakerdeck.com/tonegawa07/typespecdeshi-xian-suruxin-kunaiopenapisukimaqu-dong-kai-fa",
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
    deckUrl: "https://speakerdeck.com/tonegawa07/gou-zao-hua-zi-dong-hua-gadoreru-vibe-codingshi-jian-ji",
  },
  {
    date: "2025.04.25",
    event: "めぐろLT #26 「データエンジニアリングよもやま」",
    eventUrl: "https://meguro-lt.connpass.com/event/347477",
    title: "DuckDBを使ってみたら分析プロジェクトが動き出した",
    deckUrl: "https://speakerdeck.com/tonegawa07/duckdbwoshi-tutemitarafen-xi-puroziekutogadong-kichu-sita",
  },
];
