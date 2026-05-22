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
  quantity?: number;
  avgPrice?: number;
}

export interface Card {
  id: string;
  name: string;
  issuer: string;
  color: string;
  last4: string;
  monthlySpend: number;
  limit: number;
  type: 'credit' | 'debit';
}

export interface Contact {
  id: string;
  name: string;
  bank: string;
  accountNumber: string;
  recent: boolean;
  emoji: string;
}

export interface SpendingCategory {
  category: string;
  amount: number;
  icon: string;
  color: string;
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
  {
    id: '6',
    title: 'CGV',
    description: '카드결제',
    amount: -14000,
    type: 'expense',
    date: '5월 19일',
    category: '문화',
    icon: '🎬',
  },
  {
    id: '7',
    title: '올리브영',
    description: '카드결제',
    amount: -43500,
    type: 'expense',
    date: '5월 18일',
    category: '뷰티',
    icon: '💄',
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
    quantity: 16,
    avgPrice: 75000,
  },
  {
    id: '2',
    name: 'TIGER 미국S&P500',
    value: 876500,
    change: -4300,
    changePercent: -0.49,
    type: 'fund',
    quantity: 50,
    avgPrice: 17200,
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

export const cards: Card[] = [
  {
    id: '1',
    name: '토스 체크카드',
    issuer: '토스뱅크',
    color: '#3182f6',
    last4: '1234',
    monthlySpend: 287400,
    limit: 0,
    type: 'debit',
  },
  {
    id: '2',
    name: '신한 Deep Dream',
    issuer: '신한카드',
    color: '#0046ff',
    last4: '5678',
    monthlySpend: 412000,
    limit: 3000000,
    type: 'credit',
  },
  {
    id: '3',
    name: '현대 ZEROㅤ에디션',
    issuer: '현대카드',
    color: '#191f28',
    last4: '9012',
    monthlySpend: 155000,
    limit: 2000000,
    type: 'credit',
  },
];

export const contacts: Contact[] = [
  { id: '1', name: '김민준', bank: '토스뱅크', accountNumber: '1000-9876-5432', recent: true, emoji: '👦' },
  { id: '2', name: '이수진', bank: '카카오뱅크', accountNumber: '3333-02-9876543', recent: true, emoji: '👧' },
  { id: '3', name: '박지호', bank: '신한은행', accountNumber: '110-456-789012', recent: true, emoji: '🧑' },
  { id: '4', name: '최예린', bank: '국민은행', accountNumber: '123-456-78-9012', recent: false, emoji: '👩' },
  { id: '5', name: '정우현', bank: '하나은행', accountNumber: '123-456789-01234', recent: false, emoji: '👨' },
];

export const spendingCategories: SpendingCategory[] = [
  { category: '식비', amount: 187000, icon: '🍔', color: '#ff6b6b' },
  { category: '쇼핑', amount: 143500, icon: '🛒', color: '#ffa94d' },
  { category: '카페', amount: 52000, icon: '☕', color: '#a9e34b' },
  { category: '문화', amount: 42000, icon: '🎬', color: '#4dabf7' },
  { category: '뷰티', amount: 43500, icon: '💄', color: '#da77f2' },
  { category: '교통', amount: 38400, icon: '🚇', color: '#63e6be' },
];

export const totalAssets =
  accounts.reduce((sum, a) => sum + a.balance, 0) +
  assets.reduce((sum, a) => sum + a.value, 0);

export const formatAmount = (amount: number): string =>
  Math.abs(amount).toLocaleString('ko-KR') + '원';

export const formatBalance = (amount: number): string =>
  amount.toLocaleString('ko-KR') + '원';
