import TopBar from '@/components/home/TopBar';
import TotalAssetCard from '@/components/home/TotalAssetCard';
import AccountList from '@/components/home/AccountList';
import TransactionList from '@/components/home/TransactionList';
import AssetCard from '@/components/home/AssetCard';
import QuickMenu from '@/components/home/QuickMenu';
import CreditScore from '@/components/home/CreditScore';
import BottomNav from '@/components/home/BottomNav';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f2f4f6]">
      <div className="max-w-sm mx-auto min-h-screen bg-[#f2f4f6] relative pb-24">
        <TopBar />

        <main className="overflow-y-auto">
          <TotalAssetCard />
          <AccountList />
          <QuickMenu />
          <TransactionList />
          <AssetCard />
          <CreditScore />
          <div className="h-4" />
        </main>

        <BottomNav />
      </div>
    </div>
  );
}
