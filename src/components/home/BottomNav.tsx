'use client';

import { useState } from 'react';
import { Home, CreditCard, BarChart3, Gift, User } from 'lucide-react';

const tabs = [
  { id: 'home', label: '홈', icon: Home },
  { id: 'pay', label: '결제', icon: CreditCard },
  { id: 'invest', label: '투자', icon: BarChart3 },
  { id: 'benefit', label: '혜택', icon: Gift },
  { id: 'profile', label: '전체', icon: User },
];

export default function BottomNav() {
  const [active, setActive] = useState('home');

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-sm mx-auto bg-white border-t border-[#f2f4f6] px-2 pb-safe">
      <div className="flex">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className="flex-1 flex flex-col items-center py-3 gap-1 transition-colors"
          >
            <Icon
              size={22}
              className={active === id ? 'text-[#3182f6]' : 'text-[#b0b8c1]'}
              strokeWidth={active === id ? 2.5 : 1.8}
            />
            <span
              className={`text-[10px] font-medium ${
                active === id ? 'text-[#3182f6]' : 'text-[#b0b8c1]'
              }`}
            >
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
