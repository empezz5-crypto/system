'use client';

const menus = [
  { icon: '💰', label: '용돈기입장' },
  { icon: '🏠', label: '부동산' },
  { icon: '🚗', label: '자동차' },
  { icon: '📊', label: '신용점수' },
  { icon: '🎁', label: '혜택' },
  { icon: '🔒', label: '보험' },
  { icon: '📱', label: '통신비' },
  { icon: '✈️', label: '여행' },
];

export default function QuickMenu() {
  return (
    <div className="mx-4 mb-3 bg-white rounded-2xl p-5 shadow-sm">
      <div className="text-base font-bold text-[#191f28] mb-4">빠른 메뉴</div>
      <div className="grid grid-cols-4 gap-4">
        {menus.map((menu) => (
          <button
            key={menu.label}
            className="flex flex-col items-center gap-2 active:opacity-70 transition-opacity"
          >
            <div className="w-12 h-12 bg-[#f2f4f6] rounded-2xl flex items-center justify-center text-xl">
              {menu.icon}
            </div>
            <span className="text-xs text-[#4e5968] font-medium">{menu.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
