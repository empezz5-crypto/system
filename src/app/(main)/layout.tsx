import BottomNav from '@/components/common/BottomNav';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f2f4f6]">
      <div className="max-w-sm mx-auto min-h-screen bg-[#f2f4f6] relative pb-24">
        {children}
        <BottomNav />
      </div>
    </div>
  );
}
