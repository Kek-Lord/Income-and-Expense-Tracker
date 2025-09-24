import { AccountForm } from "../components/AccountForm";
import { AccountList } from "../components/AccountList";
import type { Account, Transaction } from "../App";

type AccountsProps = {
  accounts: Account[];
  onAddAccount: (account: Account) => void;
  onUpdate: (account: Account) => void;
  onDelete: (id: string) => void;
  transactions: Transaction[];
  onAddTransaction: (transaction: Transaction) => void;
};

export function Accounts({
  accounts,
  onAddAccount,
  onUpdate,
  onDelete,
  transactions,
}: Readonly<AccountsProps>) {
  return (
    <div
      className="min-h-screen text-gray-800 p-6"
      style={{ background: "121416" }}
    >
      <h1 className="text-3xl font-bold text-left text-gray-100 mb-6">
        Accounts
      </h1>

  {/* Flex container for AccountForm and AccountList */}
  <div className="max-w-6xl mx-auto flex flex-row gap-0">
        {/* Add new account form */}
        <div
          className="flex-1 shadow-lg rounded-tl-xl rounded-bl-xl  p-6"
          style={{ background: "rgb(28, 30, 31)" }}
        >
          <AccountForm onAddAccount={onAddAccount} />
        </div>

        {/* Accounts list with edit/delete buttons */}
        <div
          className="flex-2 bg-gray-800 shadow-lg rounded-tr-xl rounded-br-xl p-6 text-center"
          style={{ background: "rgb(23,25,26)" }}
        >
          <AccountList
            accounts={accounts}
            onUpdate={onUpdate}
            onDelete={onDelete}
            transactions={transactions}
          />
        </div>
      </div>
    </div>
  );
}
