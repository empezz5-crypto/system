'use client';

import { ChevronRight, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { totalAssets } from '@/lib/data';

export default function TotalAssetCard() {
  const [hidden, setHidden] = useState(false);

  return (
    <div className="mx-4 mb-3 bg-white rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm text-[#6b7684] font-medium">총 자산</span>
        <button
          onClick={() => setHidden(!hidden)}
          className="text-[#8b95a1] p-1"
        >
          {hidden ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>

      <div className="flex items-end justify-between mb-5">
        <div>
          {hidden ? (
            <div className="text-3xl font-bold text-[#191f28] tracking-tight">••••••원</div>
          ) : (
            <div className="text-3xl font-bold text-[#191f28] tracking-tight">
              {totalAssets.toLocaleString('ko-KR')}
              <span className="text-xl">원</span>
            </div>
          )}
          <div className="flex items-center gap-1 mt-1">
            <span className="text-xs text-[#f04452] font-medium">▲ 21,100원 (0.43%)</span>
            <span className="text-xs text-[#8b95a1]">어제보다</span>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 bg-[#3182f6] text-white rounded-xl py-3 text-sm font-semibold active:bg-[#1b64da] transition-colors">
          송금
        </button>
        <button className="flex-1 bg-[#f2f4f6] text-[#191f28] rounded-xl py-3 text-sm font-semibold active:bg-[#e5e8eb] transition-colors">
          결제
        </button>
        <button className="flex-1 bg-[#f2f4f6] text-[#191f28] rounded-xl py-3 text-sm font-semibold active:bg-[#e5e8eb] transition-colors">
          충전
        </button>
      </div>
    </div>
  );
}
