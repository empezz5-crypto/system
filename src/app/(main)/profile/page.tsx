import { ChevronRight, Bell, Shield, HelpCircle, Settings, FileText, LogOut } from 'lucide-react';

const menuGroups = [
  {
    title: '내 정보',
    items: [
      { icon: Bell, label: '알림 설정', desc: '거래, 마케팅 알림' },
      { icon: Shield, label: '보안 설정', desc: '비밀번호, 생체인증' },
    ],
  },
  {
    title: '서비스',
    items: [
      { icon: FileText, label: '이용 내역서', desc: null },
      { icon: HelpCircle, label: '고객센터', desc: '24시간 운영' },
      { icon: Settings, label: '앱 설정', desc: null },
    ],
  },
];

export default function ProfilePage() {
  return (
    <>
      <div className="bg-white px-5 pt-14 pb-4">
        <h1 className="text-xl font-bold text-[#191f28]">전체</h1>
      </div>

      <main>
        {/* 프로필 */}
        <div className="mx-4 mb-3 bg-white rounded-2xl p-5 shadow-sm flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3182f6] to-[#1b64da] flex items-center justify-center text-3xl">
            😊
          </div>
          <div className="flex-1">
            <div className="text-base font-bold text-[#191f28]">홍길동</div>
            <div className="text-sm text-[#8b95a1]">empezz5@gmail.com</div>
          </div>
          <button className="text-xs text-[#3182f6] font-semibold border border-[#3182f6] rounded-lg px-3 py-1.5">
            편집
          </button>
        </div>

        {/* 빠른 액션 */}
        <div className="mx-4 mb-3 bg-white rounded-2xl p-4 shadow-sm">
          <div className="grid grid-cols-4 gap-2">
            {[
              { icon: '📋', label: '내 계좌' },
              { icon: '💳', label: '내 카드' },
              { icon: '📊', label: '신용점수' },
              { icon: '🔔', label: '알림' },
            ].map(item => (
              <button key={item.label} className="flex flex-col items-center gap-1.5">
                <div className="w-12 h-12 bg-[#f2f4f6] rounded-2xl flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <span className="text-[10px] text-[#4e5968] font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 메뉴 그룹 */}
        {menuGroups.map(group => (
          <div key={group.title} className="mx-4 mb-3 bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="px-5 pt-4 pb-2 text-xs text-[#8b95a1] font-semibold">{group.title}</div>
            {group.items.map(({ icon: Icon, label, desc }) => (
              <button
                key={label}
                className="w-full flex items-center justify-between px-5 py-4 border-t border-[#f9fafb] active:bg-[#f2f4f6] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#f2f4f6] rounded-xl flex items-center justify-center">
                    <Icon size={18} className="text-[#4e5968]" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-[#191f28]">{label}</div>
                    {desc && <div className="text-xs text-[#8b95a1]">{desc}</div>}
                  </div>
                </div>
                <ChevronRight size={16} className="text-[#b0b8c1]" />
              </button>
            ))}
          </div>
        ))}

        {/* 앱 버전 / 로그아웃 */}
        <div className="mx-4 mb-3 bg-white rounded-2xl shadow-sm overflow-hidden">
          <button className="w-full flex items-center gap-3 px-5 py-4 active:bg-[#f2f4f6] transition-colors">
            <div className="w-9 h-9 bg-[#fff0f0] rounded-xl flex items-center justify-center">
              <LogOut size={18} className="text-[#f04452]" />
            </div>
            <span className="text-sm font-semibold text-[#f04452]">로그아웃</span>
          </button>
        </div>

        <div className="text-center text-xs text-[#b0b8c1] pb-4">버전 5.12.0</div>
      </main>
    </>
  );
}
