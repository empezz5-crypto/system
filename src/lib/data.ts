export type TransactionType = 'income' | 'expense' | 'transfer';

export interface Account {
  id: string;
  bankName: string;
  bankColor: string;
  accountNumber: string;
  balance: number;
  type: 'checking' | 'savings' | 'card';
}

export interface Transaction {
  id: string;
  title: string;
  description: string;
  amount: number;
  type: TransactionType;
  date: string;
  category: string;
  icon: string;
}

export interface Asset {
  id: string;
  name: string;
  value: number;
  change: number;
  changePercent: number;
  type: 'stock' | 'fund' | 'coin';
}

export const accounts: Account[] = [
  {
    id: '1',
    bankName: '토스뱅크',
    bankColor: '#3182f6',
    accountNumber: '1000-1234-5678',
    balance: 2481500,
    type: 'checking',
  },
  {
    id: '2',
    bankName: '카카오뱅크',
    bankColor: '#FAE100',
    accountNumber: '3333-01-1234567',
    balance: 850000,
    type: 'savings',
  },
  {
    id: '3',
    bankName: '신한은행',
    bankColor: '#0046ff',
    accountNumber: '110-123-456789',
    balance: 320000,
    type: 'checking',
  },
];

export const transactions: Transaction[] = [
  {
    id: '1',
    title: '스타벅스',
    description: '카드결제',
    amount: -6500,
    type: 'expense',
    date: '오늘',
    category: '카페',
    icon: '☕',
  },
  {
    id: '2',
    title: '급여',
    description: '주식회사 테크',
    amount: 3200000,
    type: 'income',
    date: '오늘',
    category: '급여',
    icon: '💼',
  },
  {
    id: '3',
    title: '김민준',
    description: '토스 송금',
    amount: -50000,
    type: 'transfer',
    date: '어제',
    category: '송금',
    icon: '💸',
  },
  {
    id: '4',
    title: '쿠팡',
    description: '카드결제',
    amount: -34800,
    type: 'expense',
    date: '어제',
    category: '쇼핑',
    icon: '🛒',
  },
  {
    id: '5',
    title: '배달의민족',
    description: '카드결제',
    amount: -18500,
    type: 'expense',
    date: '5월 20일',
    category: '음식',
    icon: '🍔',
  },
];

export const assets: Asset[] = [
  {
    id: '1',
    name: '삼성전자',
    value: 1250000,
    change: 12500,
    changePercent: 1.01,
    type: 'stock',
  },
  {
    id: '2',
    name: 'TIGER 미국S&P500',
    value: 876500,
    change: -4300,
    changePercent: -0.49,
    type: 'fund',
  },
  {
    id: '3',
    name: '비트코인',
    value: 425000,
    change: 8900,
    changePercent: 2.14,
    type: 'coin',
  },
];

export const totalAssets = accounts.reduce((sum, a) => sum + a.balance, 0)
  + assets.reduce((sum, a) => sum + a.value, 0);

export const formatAmount = (amount: number): string => {
  return Math.abs(amount).toLocaleString('ko-KR') + '원';
};

export const formatBalance = (amount: number): string => {
  return amount.toLocaleString('ko-KR') + '원';
};
