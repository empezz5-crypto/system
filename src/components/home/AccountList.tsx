'use client';

import { ChevronRight, Plus } from 'lucide-react';
import { accounts, formatBalance } from '@/lib/data';

export default function AccountList() {
  return (
    <div className="mx-4 mb-3 bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className="text-base font-bold text-[#191f28]">내 계좌</span>
        <button className="flex items-center gap-0.5 text-xs text-[#8b95a1]">
          전체보기 <ChevronRight size={14} />
        </button>
      </div>

      {accounts.map((account, index) => (
        <button
          key={account.id}
          className="w-full flex items-center justify-between px-5 py-4 active:bg-[#f2f4f6] transition-colors"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: account.bankColor }}
            >
              {account.bankName[0]}
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-[#191f28]">{account.bankName}</div>
              <div className="text-xs text-[#8b95a1] mt-0.5">{account.accountNumber}</div>
            </div>
          </div>
          <div className="flex items-center gap-1 text-right">
            <span className="text-sm font-bold text-[#191f28]">{formatBalance(account.balance)}</span>
            <ChevronRight size={16} className="text-[#b0b8c1]" />
          </div>
        </button>
      ))}

      <button className="w-full flex items-center gap-2 px-5 py-4 border-t border-[#f2f4f6] active:bg-[#f2f4f6] transition-colors">
        <div className="w-9 h-9 rounded-full bg-[#f2f4f6] flex items-center justify-center">
          <Plus size={16} className="text-[#8b95a1]" />
        </div>
        <span className="text-sm text-[#6b7684]">계좌 추가</span>
      </button>
    </div>
  );
}
