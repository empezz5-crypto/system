'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, CreditCard, BarChart3, Gift, User } from 'lucide-react';

const tabs = [
  { id: 'home', label: '홈', icon: Home, href: '/' },
  { id: 'pay', label: '결제', icon: CreditCard, href: '/pay' },
  { id: 'invest', label: '투자', icon: BarChart3, href: '/invest' },
  { id: 'benefit', label: '혜택', icon: Gift, href: '/benefit' },
  { id: 'profile', label: '전체', icon: User, href: '/profile' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-sm mx-auto bg-white border-t border-[#f2f4f6] z-50">
      <div className="flex">
        {tabs.map(({ id, label, icon: Icon, href }) => {
          const active = pathname === href;
          return (
            <Link
              key={id}
              href={href}
              className="flex-1 flex flex-col items-center py-3 gap-1 transition-colors"
            >
              <Icon
                size={22}
                className={active ? 'text-[#3182f6]' : 'text-[#b0b8c1]'}
                strokeWidth={active ? 2.5 : 1.8}
              />
              <span className={`text-[10px] font-medium ${active ? 'text-[#3182f6]' : 'text-[#b0b8c1]'}`}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
