'use client';

import { Bell, Search } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-14 pb-4 bg-white">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#3182f6] flex items-center justify-center">
          <span className="text-white text-sm font-bold">토</span>
        </div>
        <span className="text-lg font-bold text-[#191f28]">토스</span>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-[#4e5968]">
          <Search size={22} />
        </button>
        <button className="relative text-[#4e5968]">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#f04452] rounded-full" />
        </button>
      </div>
    </div>
  );
}
