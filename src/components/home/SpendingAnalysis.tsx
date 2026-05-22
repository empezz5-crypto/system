'use client';

import { ChevronRight } from 'lucide-react';
import { spendingCategories } from '@/lib/data';

function DonutChart() {
  const total = spendingCategories.reduce((s, c) => s + c.amount, 0);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  const segments = spendingCategories.map((cat) => {
    const pct = cat.amount / total;
    const dash = pct * circumference;
    const segment = { ...cat, dash, offset, pct };
    offset += dash;
    return segment;
  });

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {segments.map((seg) => (
        <circle
          key={seg.category}
          cx="50" cy="50" r={radius}
          fill="none"
          stroke={seg.color}
          strokeWidth="18"
          strokeDasharray={`${seg.dash} ${circumference - seg.dash}`}
          strokeDashoffset={-seg.offset}
          transform="rotate(-90 50 50)"
        />
      ))}
      <circle cx="50" cy="50" r="30" fill="white" />
    </svg>
  );
}

export default function SpendingAnalysis() {
  const total = spendingCategories.reduce((s, c) => s + c.amount, 0);
  const top = [...spendingCategories].sort((a, b) => b.amount - a.amount).slice(0, 3);

  return (
    <div className="mx-4 mb-3 bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className="text-base font-bold text-[#191f28]">이번 달 소비</span>
        <button className="flex items-center gap-0.5 text-xs text-[#8b95a1]">
          분석 보기 <ChevronRight size={14} />
        </button>
      </div>

      <div className="px-5 mb-4">
        <div className="text-2xl font-bold text-[#191f28]">
          {total.toLocaleString('ko-KR')}원
        </div>
        <div className="text-xs text-[#8b95a1] mt-0.5">지난달보다 23,400원 적게 썼어요 👍</div>
      </div>

      <div className="flex items-center gap-4 px-5 pb-5">
        <div className="w-28 h-28 flex-shrink-0">
          <DonutChart />
        </div>

        <div className="flex-1 flex flex-col gap-2">
          {top.map((cat) => (
            <div key={cat.category} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                <span className="text-xs text-[#4e5968]">{cat.category}</span>
              </div>
              <span className="text-xs font-semibold text-[#191f28]">
                {cat.amount.toLocaleString('ko-KR')}원
              </span>
            </div>
          ))}
          <div className="flex items-center justify-between mt-1">
            <span className="text-xs text-[#8b95a1]">그 외</span>
            <span className="text-xs text-[#8b95a1]">
              {(total - top.reduce((s, c) => s + c.amount, 0)).toLocaleString('ko-KR')}원
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-[#f2f4f6] px-5 py-3 grid grid-cols-3 gap-0 divide-x divide-[#f2f4f6]">
        {spendingCategories.slice(0, 3).map((cat) => (
          <div key={cat.category} className="flex flex-col items-center gap-0.5">
            <span className="text-base">{cat.icon}</span>
            <span className="text-[10px] text-[#8b95a1]">{cat.category}</span>
            <span className="text-xs font-bold text-[#191f28]">
              {(cat.amount / 1000).toFixed(0)}천원
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
