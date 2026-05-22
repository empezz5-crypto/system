import TopBar from '@/components/home/TopBar';
import TotalAssetCard from '@/components/home/TotalAssetCard';
import AccountList from '@/components/home/AccountList';
import TransactionList from '@/components/home/TransactionList';
import AssetCard from '@/components/home/AssetCard';
import QuickMenu from '@/components/home/QuickMenu';
import CreditScore from '@/components/home/CreditScore';
import SpendingAnalysis from '@/components/home/SpendingAnalysis';

export default function Home() {
  return (
    <>
      <TopBar />
      <main>
        <TotalAssetCard />
        <AccountList />
        <QuickMenu />
        <SpendingAnalysis />
        <TransactionList />
        <AssetCard />
        <CreditScore />
        <div className="h-4" />
      </main>
    </>
  );
}
