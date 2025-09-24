import { AccountItem } from "./AccountItem";

export interface Transaction {
  id: string;
  accountId: string;
  amount: number;
  description?: string;
  date: string;
}

export interface AccountListProps {
  accounts: {
    id: string;
    name: string;
    type: string;
    balance: number;
  }[];
  onUpdate: (account: AccountListProps["accounts"][0]) => void;
  onDelete: (id: string) => void;
  transactions: Transaction[];
}

export function AccountList({ accounts, onUpdate, onDelete, transactions }: AccountListProps) {
  if (accounts.length === 0) 
    return <p className="text-gray-100"
    style={{background: "rgb(28,30,31"}}>No accounts yet</p>;

  return (
    <ul
      className="flex flex-col gap-2"
      style={{ background: "rgb(28,30,31)" }}
    >
      {accounts.map((acc: AccountListProps["accounts"][0]) => (
        <AccountItem
          key={acc.id}
          account={acc}
          onUpdate={onUpdate}
          onDelete={onDelete}
          transactions={transactions.filter(t => t.accountId === acc.id)}
        />
      ))}
    </ul>
  );
}
