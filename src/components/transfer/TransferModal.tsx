'use client';

import { useState } from 'react';
import { X, ChevronLeft, Check } from 'lucide-react';
import { contacts, accounts, formatBalance, Contact } from '@/lib/data';

type Step = 'contact' | 'amount' | 'confirm' | 'done';

interface Props {
  onClose: () => void;
}

export default function TransferModal({ onClose }: Props) {
  const [step, setStep] = useState<Step>('contact');
  const [selected, setSelected] = useState<Contact | null>(null);
  const [amount, setAmount] = useState('');
  const [memo, setMemo] = useState('');

  const fromAccount = accounts[0];
  const parsedAmount = parseInt(amount.replace(/,/g, ''), 10) || 0;

  const handleAmountInput = (val: string) => {
    const nums = val.replace(/[^0-9]/g, '');
    setAmount(nums ? parseInt(nums, 10).toLocaleString('ko-KR') : '');
  };

  const addAmount = (n: number) => {
    const cur = parseInt(amount.replace(/,/g, ''), 10) || 0;
    handleAmountInput(String(cur + n));
  };

  const back = () => {
    if (step === 'amount') setStep('contact');
    else if (step === 'confirm') setStep('amount');
    else onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center max-w-sm mx-auto left-0 right-0">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full bg-white rounded-t-3xl min-h-[70vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-4">
          {step !== 'contact' && step !== 'done' ? (
            <button onClick={back} className="text-[#4e5968]"><ChevronLeft size={24} /></button>
          ) : (
            <div className="w-6" />
          )}
          <span className="text-base font-bold text-[#191f28]">
            {step === 'contact' ? '송금' : step === 'amount' ? '얼마나 보낼까요?' : step === 'confirm' ? '송금 확인' : '송금 완료'}
          </span>
          <button onClick={onClose} className="text-[#8b95a1]"><X size={20} /></button>
        </div>

        {/* Step: 연락처 선택 */}
        {step === 'contact' && (
          <div className="flex-1 px-5">
            <p className="text-sm text-[#8b95a1] mb-4">최근 송금</p>
            <div className="flex gap-4 mb-6 overflow-x-auto pb-2 scrollbar-hide">
              {contacts.filter(c => c.recent).map(contact => (
                <button
                  key={contact.id}
                  onClick={() => { setSelected(contact); setStep('amount'); }}
                  className="flex flex-col items-center gap-1.5 flex-shrink-0"
                >
                  <div className="w-14 h-14 rounded-full bg-[#f2f4f6] flex items-center justify-center text-2xl">
                    {contact.emoji}
                  </div>
                  <span className="text-xs text-[#191f28] font-medium">{contact.name}</span>
                  <span className="text-[10px] text-[#8b95a1]">{contact.bank}</span>
                </button>
              ))}
            </div>
            <p className="text-sm text-[#8b95a1] mb-3">전체 연락처</p>
            {contacts.map(contact => (
              <button
                key={contact.id}
                onClick={() => { setSelected(contact); setStep('amount'); }}
                className="w-full flex items-center gap-3 py-3 active:bg-[#f2f4f6] rounded-xl transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-[#f2f4f6] flex items-center justify-center text-xl">
                  {contact.emoji}
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-[#191f28]">{contact.name}</div>
                  <div className="text-xs text-[#8b95a1]">{contact.bank} · {contact.accountNumber}</div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Step: 금액 입력 */}
        {step === 'amount' && selected && (
          <div className="flex-1 flex flex-col px-5">
            <div className="flex items-center gap-3 mb-6 p-4 bg-[#f2f4f6] rounded-2xl">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl">
                {selected.emoji}
              </div>
              <div>
                <div className="text-sm font-bold text-[#191f28]">{selected.name}</div>
                <div className="text-xs text-[#8b95a1]">{selected.bank} · {selected.accountNumber}</div>
              </div>
            </div>

            <div className="text-center mb-2">
              <div className={`text-4xl font-bold tracking-tight ${amount ? 'text-[#191f28]' : 'text-[#d1d6db]'}`}>
                {amount || '0'}원
              </div>
              <div className="text-xs text-[#8b95a1] mt-2">
                잔액 {formatBalance(fromAccount.balance)}
              </div>
            </div>

            <div className="flex gap-2 justify-center mb-4 flex-wrap">
              {[10000, 50000, 100000].map(n => (
                <button
                  key={n}
                  onClick={() => addAmount(n)}
                  className="px-3 py-1.5 bg-[#f2f4f6] rounded-full text-xs font-semibold text-[#4e5968]"
                >
                  +{(n / 10000).toFixed(0)}만원
                </button>
              ))}
            </div>

            <input
              type="text"
              inputMode="numeric"
              value={amount}
              onChange={e => handleAmountInput(e.target.value)}
              placeholder="금액 입력"
              className="w-full border border-[#e5e8eb] rounded-xl px-4 py-3 text-center text-lg font-bold text-[#191f28] mb-3 focus:outline-none focus:border-[#3182f6]"
            />

            <input
              type="text"
              value={memo}
              onChange={e => setMemo(e.target.value)}
              placeholder="메모 (선택)"
              className="w-full border border-[#e5e8eb] rounded-xl px-4 py-3 text-sm text-[#191f28] mb-4 focus:outline-none focus:border-[#3182f6]"
            />

            <button
              onClick={() => parsedAmount > 0 && setStep('confirm')}
              disabled={!parsedAmount}
              className="w-full bg-[#3182f6] disabled:bg-[#d1d6db] text-white rounded-xl py-4 text-base font-bold transition-colors"
            >
              다음
            </button>
          </div>
        )}

        {/* Step: 확인 */}
        {step === 'confirm' && selected && (
          <div className="flex-1 flex flex-col px-5">
            <div className="flex-1">
              <div className="text-center py-8">
                <div className="text-4xl mb-3">{selected.emoji}</div>
                <div className="text-2xl font-bold text-[#191f28] mb-1">
                  {selected.name}님에게
                </div>
                <div className="text-3xl font-bold text-[#3182f6]">
                  {parsedAmount.toLocaleString('ko-KR')}원
                </div>
                <div className="text-sm text-[#8b95a1] mt-1">을 송금해요</div>
              </div>

              <div className="bg-[#f2f4f6] rounded-2xl p-4 flex flex-col gap-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#8b95a1]">받는 분</span>
                  <span className="font-semibold text-[#191f28]">{selected.name} ({selected.bank})</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#8b95a1]">보내는 계좌</span>
                  <span className="font-semibold text-[#191f28]">{fromAccount.bankName}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#8b95a1]">송금액</span>
                  <span className="font-semibold text-[#191f28]">{parsedAmount.toLocaleString('ko-KR')}원</span>
                </div>
                {memo && (
                  <div className="flex justify-between text-sm">
                    <span className="text-[#8b95a1]">메모</span>
                    <span className="font-semibold text-[#191f28]">{memo}</span>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => setStep('done')}
              className="w-full bg-[#3182f6] text-white rounded-xl py-4 text-base font-bold mt-4 mb-2"
            >
              {parsedAmount.toLocaleString('ko-KR')}원 송금하기
            </button>
          </div>
        )}

        {/* Step: 완료 */}
        {step === 'done' && selected && (
          <div className="flex-1 flex flex-col items-center justify-center px-5 text-center">
            <div className="w-20 h-20 bg-[#3182f6] rounded-full flex items-center justify-center mb-4">
              <Check size={36} className="text-white" strokeWidth={3} />
            </div>
            <div className="text-xl font-bold text-[#191f28] mb-1">송금 완료!</div>
            <div className="text-sm text-[#8b95a1] mb-8">
              {selected.name}님께 {parsedAmount.toLocaleString('ko-KR')}원을<br />보냈어요
            </div>
            <button
              onClick={onClose}
              className="w-full bg-[#f2f4f6] text-[#191f28] rounded-xl py-4 text-base font-bold"
            >
              확인
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
