export default function ProfileCard() {
  return (
    <div className="mb-4">
      <div className="card p-3 md:p-4">
        <div className="mb-2">
          <h1 className="text-lg md:text-xl font-semibold text-primary">Yusuke Fukuda</h1>
          <p className="text-xs md:text-sm text-foreground/60">@tonegawa07</p>
        </div>
        <p className="text-xs text-foreground/60 leading-relaxed">
          ソフトウェアエンジニアをやっています。
          Web開発、クラウド、データ基盤まで幅広く携わっています。
          大学時代は農学部・農学専攻でした。
          茨城県鹿嶋市出身です。
        </p>
      </div>
    </div>
  );
}
