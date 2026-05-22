'use client';

import { useState } from 'react';
import { cards } from '@/lib/data';

export default function CardSlider() {
  const [active, setActive] = useState(0);
  const card = cards[active];

  return (
    <div className="mb-4">
      {/* Card visual */}
      <div className="px-4 mb-4">
        <div
          className="w-full h-48 rounded-3xl p-6 flex flex-col justify-between shadow-lg transition-all duration-300"
          style={{ backgroundColor: card.color }}
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="text-white/60 text-xs mb-1">{card.issuer}</div>
              <div className="text-white font-bold text-lg">{card.name}</div>
            </div>
            <div className="text-white/80 text-2xl">💳</div>
          </div>
          <div>
            <div className="text-white/60 text-xs mb-1">카드번호</div>
            <div className="text-white font-mono text-base tracking-widest">
              •••• •••• •••• {card.last4}
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mb-4">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-200 ${
              i === active ? 'w-5 bg-[#3182f6]' : 'w-1.5 bg-[#d1d6db]'
            }`}
          />
        ))}
      </div>

      {/* Card stats */}
      <div className="mx-4 bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-[#8b95a1]">이번 달 사용</span>
          {card.type === 'credit' && (
            <span className="text-xs text-[#8b95a1]">
              한도 {card.limit.toLocaleString('ko-KR')}원
            </span>
          )}
        </div>
        <div className="text-2xl font-bold text-[#191f28] mb-3">
          {card.monthlySpend.toLocaleString('ko-KR')}원
        </div>
        {card.type === 'credit' && (
          <div className="w-full h-2 bg-[#f2f4f6] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#3182f6] rounded-full transition-all duration-500"
              style={{ width: `${(card.monthlySpend / card.limit) * 100}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
