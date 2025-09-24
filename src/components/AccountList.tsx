import { AccountItem } from "./AccountItem";
import type { Account } from "../App";

export interface Transaction {
  id: string;
  accountId: string;
  amount: number;
  description?: string;
  date: string;
}

export interface AccountListProps {
  accounts: Account[];
  onUpdate: (account: Account) => void;
  onDelete: (id: Account["id"]) => void;
  transactions: Transaction[];
}

export function AccountList({ accounts, onUpdate, onDelete, transactions }: Readonly<AccountListProps>) {
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
