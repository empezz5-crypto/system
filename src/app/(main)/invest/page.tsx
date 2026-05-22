import PortfolioChart from '@/components/invest/PortfolioChart';
import { assets } from '@/lib/data';

export default function InvestPage() {
  return (
    <>
      <div className="bg-white px-5 pt-14 pb-4">
        <h1 className="text-xl font-bold text-[#191f28]">투자</h1>
      </div>

      <main>
        <PortfolioChart />

        {/* 종목 목록 */}
        <div className="mx-4 mb-3 bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-5 pt-5 pb-3 flex justify-between items-center">
            <span className="text-base font-bold text-[#191f28]">보유 종목</span>
            <button className="text-xs text-[#3182f6] font-semibold">종목 추가</button>
          </div>

          {assets.map((asset) => {
            const isUp = asset.change >= 0;
            return (
              <div key={asset.id} className="px-5 py-4 border-b border-[#f9fafb] last:border-0">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#f2f4f6] flex items-center justify-center text-lg">
                      {asset.type === 'stock' ? '📈' : asset.type === 'fund' ? '💹' : '🪙'}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#191f28]">{asset.name}</div>
                      <div className="text-xs text-[#8b95a1]">
                        {asset.type === 'stock' ? '국내주식' : asset.type === 'fund' ? 'ETF' : '가상자산'}
                        {asset.quantity && ` · ${asset.quantity}주`}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-[#191f28]">
                      {asset.value.toLocaleString('ko-KR')}원
                    </div>
                    <div className={`text-xs font-semibold ${isUp ? 'text-[#f04452]' : 'text-[#4e81f6]'}`}>
                      {isUp ? '+' : ''}{asset.change.toLocaleString('ko-KR')}원 ({isUp ? '+' : ''}{asset.changePercent.toFixed(2)}%)
                    </div>
                  </div>
                </div>

                {/* Mini bar showing gain */}
                <div className="w-full h-1 bg-[#f2f4f6] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${isUp ? 'bg-[#f04452]' : 'bg-[#4e81f6]'}`}
                    style={{ width: `${Math.min(Math.abs(asset.changePercent) * 20, 100)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* 투자 추천 */}
        <div className="mx-4 mb-3 bg-white rounded-2xl p-5 shadow-sm">
          <div className="text-base font-bold text-[#191f28] mb-3">오늘의 추천</div>
          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
            {[
              { name: 'KODEX 200', change: '+1.2%', icon: '🇰🇷' },
              { name: 'TIGER 나스닥100', change: '+0.8%', icon: '🇺🇸' },
              { name: '이더리움', change: '+3.1%', icon: '💎' },
            ].map(item => (
              <div key={item.name} className="flex-shrink-0 w-32 bg-[#f2f4f6] rounded-2xl p-3">
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-xs font-bold text-[#191f28] mb-0.5">{item.name}</div>
                <div className="text-xs font-semibold text-[#f04452]">{item.change}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-4" />
      </main>
    </>
  );
}
