'use client';

import { ChevronRight, TrendingDown, TrendingUp } from 'lucide-react';
import { assets } from '@/lib/data';

export default function AssetCard() {
  return (
    <div className="mx-4 mb-3 bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className="text-base font-bold text-[#191f28]">투자</span>
        <button className="flex items-center gap-0.5 text-xs text-[#8b95a1]">
          전체보기 <ChevronRight size={14} />
        </button>
      </div>

      <div className="px-5 pb-2">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-[#191f28]">
            {assets.reduce((s, a) => s + a.value, 0).toLocaleString('ko-KR')}원
          </span>
        </div>
        <div className="flex items-center gap-1 mt-0.5 mb-4">
          <TrendingUp size={12} className="text-[#f04452]" />
          <span className="text-xs text-[#f04452] font-medium">+17,100원 (0.67%)</span>
          <span className="text-xs text-[#8b95a1]">오늘</span>
        </div>
      </div>

      {assets.map((asset) => (
        <button
          key={asset.id}
          className="w-full flex items-center justify-between px-5 py-3.5 active:bg-[#f2f4f6] transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#f2f4f6] flex items-center justify-center text-base">
              {asset.type === 'stock' ? '📈' : asset.type === 'fund' ? '💹' : '🪙'}
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-[#191f28]">{asset.name}</div>
              <div className="text-xs text-[#8b95a1] mt-0.5">
                {asset.type === 'stock' ? '국내주식' : asset.type === 'fund' ? 'ETF' : '가상자산'}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-[#191f28]">
              {asset.value.toLocaleString('ko-KR')}원
            </div>
            <div
              className={`text-xs font-medium mt-0.5 ${
                asset.change >= 0 ? 'text-[#f04452]' : 'text-[#4e81f6]'
              }`}
            >
              {asset.change >= 0 ? '▲' : '▼'} {Math.abs(asset.changePercent).toFixed(2)}%
            </div>
          </div>
        </button>
      ))}

      <div className="mx-5 my-3">
        <button className="w-full bg-[#f2f4f6] rounded-xl py-3 text-sm font-semibold text-[#191f28] active:bg-[#e5e8eb] transition-colors">
          투자 시작하기
        </button>
      </div>
    </div>
  );
}
