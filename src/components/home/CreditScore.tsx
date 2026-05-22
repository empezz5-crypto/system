'use client';

import { ChevronRight } from 'lucide-react';

export default function CreditScore() {
  const score = 842;
  const maxScore = 1000;
  const percent = (score / maxScore) * 100;

  return (
    <div className="mx-4 mb-3 bg-white rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-base font-bold text-[#191f28]">내 신용점수</span>
        <button className="flex items-center gap-0.5 text-xs text-[#8b95a1]">
          자세히 <ChevronRight size={14} />
        </button>
      </div>

      <div className="flex items-center gap-5">
        <div className="relative w-20 h-20">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f2f4f6" strokeWidth="3" />
            <circle
              cx="18" cy="18" r="15.9"
              fill="none"
              stroke="#3182f6"
              strokeWidth="3"
              strokeDasharray={`${percent} ${100 - percent}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-bold text-[#191f28]">{score}</span>
          </div>
        </div>

        <div>
          <div className="text-sm font-bold text-[#3182f6] mb-1">매우 좋음</div>
          <div className="text-xs text-[#6b7684]">상위 12% 수준이에요</div>
          <div className="text-xs text-[#8b95a1] mt-1">2026.05 기준</div>
        </div>
      </div>
    </div>
  );
}
