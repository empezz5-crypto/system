export default function BenefitPage() {
  const benefits = [
    { title: '토스 포인트', value: '3,450P', desc: '사용 가능한 포인트', icon: '🎯', color: '#3182f6' },
    { title: '캐시백', value: '1,200원', desc: '이번 달 적립', icon: '💵', color: '#12b886' },
    { title: '쿠폰', value: '5장', desc: '사용 가능', icon: '🎟️', color: '#f06595' },
  ];

  const events = [
    { title: '친구 초대하고 1만원 받기', desc: '초대한 친구가 첫 거래 시 지급', badge: '진행중', icon: '👥' },
    { title: '매일 출석체크 룰렛', desc: '매일 룰렛 돌리고 포인트 받기', badge: 'NEW', icon: '🎰' },
    { title: '토스 결제 캐시백', desc: '토스페이 결제 시 1% 적립', badge: '상시', icon: '💳' },
  ];

  return (
    <>
      <div className="bg-white px-5 pt-14 pb-4">
        <h1 className="text-xl font-bold text-[#191f28]">혜택</h1>
      </div>

      <main>
        {/* 내 혜택 요약 */}
        <div className="mx-4 mb-3 grid grid-cols-3 gap-2">
          {benefits.map(b => (
            <div key={b.title} className="bg-white rounded-2xl p-3 shadow-sm text-center">
              <div className="text-2xl mb-1">{b.icon}</div>
              <div className="text-sm font-bold text-[#191f28]">{b.value}</div>
              <div className="text-[10px] text-[#8b95a1] mt-0.5">{b.desc}</div>
            </div>
          ))}
        </div>

        {/* 이벤트 */}
        <div className="mx-4 mb-3 bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-5 pt-5 pb-3 text-base font-bold text-[#191f28]">진행 중인 이벤트</div>
          {events.map((e, i) => (
            <button key={i} className="w-full flex items-center gap-3 px-5 py-4 border-t border-[#f2f4f6] active:bg-[#f9fafb] transition-colors">
              <div className="w-11 h-11 bg-[#f2f4f6] rounded-2xl flex items-center justify-center text-xl flex-shrink-0">
                {e.icon}
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-sm font-bold text-[#191f28]">{e.title}</span>
                  <span className="text-[10px] px-1.5 py-0.5 bg-[#3182f6] text-white rounded font-semibold">
                    {e.badge}
                  </span>
                </div>
                <div className="text-xs text-[#8b95a1]">{e.desc}</div>
              </div>
            </button>
          ))}
        </div>

        {/* 추천 서비스 */}
        <div className="mx-4 mb-3 bg-gradient-to-br from-[#3182f6] to-[#1b64da] rounded-2xl p-5 text-white">
          <div className="text-base font-bold mb-1">토스프라임 가입하기</div>
          <div className="text-xs text-white/70 mb-4">월 2,900원으로 다양한 혜택을 누려보세요</div>
          <button className="bg-white text-[#3182f6] rounded-xl px-4 py-2 text-sm font-bold">
            자세히 보기
          </button>
        </div>

        <div className="h-4" />
      </main>
    </>
  );
}
