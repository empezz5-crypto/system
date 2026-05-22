import CardSlider from '@/components/pay/CardSlider';
import { transactions } from '@/lib/data';
import { formatAmount } from '@/lib/data';

const payTransactions = transactions.filter(t => t.type === 'expense');

export default function PayPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-white px-5 pt-14 pb-4">
        <h1 className="text-xl font-bold text-[#191f28]">결제</h1>
      </div>

      <main>
        <CardSlider />

        {/* QR 결제 */}
        <div className="mx-4 mb-3 bg-[#3182f6] rounded-2xl p-5 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-white font-bold text-base mb-0.5">QR 결제</div>
            <div className="text-white/70 text-xs">스캔하여 간편하게 결제해요</div>
          </div>
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl">
            📲
          </div>
        </div>

        {/* 최근 결제 */}
        <div className="mx-4 mb-3 bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-5 pt-5 pb-3">
            <span className="text-base font-bold text-[#191f28]">최근 결제</span>
          </div>
          {payTransactions.map(t => (
            <div key={t.id} className="flex items-center justify-between px-5 py-4 border-b border-[#f9fafb] last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f2f4f6] flex items-center justify-center text-lg">
                  {t.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#191f28]">{t.title}</div>
                  <div className="text-xs text-[#8b95a1]">{t.date}</div>
                </div>
              </div>
              <div className="text-sm font-bold text-[#191f28]">-{formatAmount(t.amount)}</div>
            </div>
          ))}
        </div>

        <div className="h-4" />
      </main>
    </>
  );
}
