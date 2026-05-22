'use client';

import { ChevronRight } from 'lucide-react';
import { transactions, formatAmount } from '@/lib/data';

export default function TransactionList() {
  const grouped = transactions.reduce<Record<string, typeof transactions>>((acc, t) => {
    if (!acc[t.date]) acc[t.date] = [];
    acc[t.date].push(t);
    return acc;
  }, {});

  return (
    <div className="mx-4 mb-3 bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className="text-base font-bold text-[#191f28]">최근 거래</span>
        <button className="flex items-center gap-0.5 text-xs text-[#8b95a1]">
          전체보기 <ChevronRight size={14} />
        </button>
      </div>

      {Object.entries(grouped).map(([date, items]) => (
        <div key={date}>
          <div className="px-5 py-2 bg-[#f9fafb]">
            <span className="text-xs text-[#8b95a1] font-medium">{date}</span>
          </div>
          {items.map((transaction) => (
            <button
              key={transaction.id}
              className="w-full flex items-center justify-between px-5 py-4 active:bg-[#f2f4f6] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f2f4f6] flex items-center justify-center text-lg">
                  {transaction.icon}
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-[#191f28]">{transaction.title}</div>
                  <div className="text-xs text-[#8b95a1] mt-0.5">{transaction.description}</div>
                </div>
              </div>
              <div className="text-right">
                <div
                  className={`text-sm font-bold ${
                    transaction.amount > 0 ? 'text-[#3182f6]' : 'text-[#191f28]'
                  }`}
                >
                  {transaction.amount > 0 ? '+' : '-'}{formatAmount(transaction.amount)}
                </div>
              </div>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
