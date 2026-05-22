'use client';

import { assets } from '@/lib/data';

export default function PortfolioChart() {
  const total = assets.reduce((s, a) => s + a.value, 0);
  const colors = ['#3182f6', '#ffa94d', '#f06595'];
  const circumference = 2 * Math.PI * 40;
  let offset = 0;

  const segments = assets.map((asset, i) => {
    const pct = asset.value / total;
    const dash = pct * circumference;
    const seg = { ...asset, dash, offset, color: colors[i] };
    offset += dash;
    return seg;
  });

  const totalChange = assets.reduce((s, a) => s + a.change, 0);
  const gainPct = (totalChange / (total - totalChange)) * 100;

  return (
    <div className="mx-4 mb-3 bg-white rounded-2xl p-5 shadow-sm">
      <div className="text-sm text-[#8b95a1] mb-1">총 투자금액</div>
      <div className="text-3xl font-bold text-[#191f28] mb-0.5">
        {total.toLocaleString('ko-KR')}원
      </div>
      <div className={`text-sm font-semibold mb-5 ${totalChange >= 0 ? 'text-[#f04452]' : 'text-[#4e81f6]'}`}>
        {totalChange >= 0 ? '+' : ''}{totalChange.toLocaleString('ko-KR')}원 ({gainPct >= 0 ? '+' : ''}{gainPct.toFixed(2)}%)
      </div>

      <div className="flex items-center gap-6">
        <div className="w-32 h-32 flex-shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {segments.map((seg) => (
              <circle
                key={seg.id}
                cx="50" cy="50" r="40"
                fill="none"
                stroke={seg.color}
                strokeWidth="18"
                strokeDasharray={`${seg.dash} ${circumference - seg.dash}`}
                strokeDashoffset={-seg.offset}
                transform="rotate(-90 50 50)"
              />
            ))}
            <circle cx="50" cy="50" r="30" fill="white" />
            <text x="50" y="47" textAnchor="middle" fontSize="8" fill="#8b95a1">수익률</text>
            <text x="50" y="57" textAnchor="middle" fontSize="9" fontWeight="bold" fill={gainPct >= 0 ? '#f04452' : '#4e81f6'}>
              {gainPct >= 0 ? '+' : ''}{gainPct.toFixed(1)}%
            </text>
          </svg>
        </div>

        <div className="flex-1 flex flex-col gap-2.5">
          {segments.map((seg) => (
            <div key={seg.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: seg.color }} />
                <span className="text-xs text-[#4e5968]">{seg.name}</span>
              </div>
              <span className="text-xs font-bold text-[#191f28]">
                {((seg.value / total) * 100).toFixed(0)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
