import { useState } from "react";

export interface Transaction {
  id: string;
  accountId: string;
  amount: number;
  description?: string;
  date: string;
}

export interface AccountItemProps {
  account: {
    id: string;
    name: string;
    type: string;
    balance: number;
  };
  onUpdate: (account: AccountItemProps["account"]) => void;
  onDelete: (id: string) => void;
  transactions: Transaction[];
}

export function AccountItem({ account, onUpdate, onDelete, transactions }: AccountItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(account.name);
  const [editType, setEditType] = useState(account.type);
  const [editBalance, setEditBalance] = useState(account.balance.toString());

  const handleSave = () => {
    onUpdate({
      ...account,
      name: editName,
      type: editType,
  balance: parseFloat(editBalance),
    });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <li
        className="text-gray-100 flex flex-row items-center gap-2"
        style={{ background: "rgb(28,30,31)" }}
      >
        <input
          type="text"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          className="bg-gray-800 text-gray-100 rounded px-2 py-1 w-32"
        />
        <select
          value={editType}
          onChange={(e) => setEditType(e.target.value)}
          className="bg-gray-800 text-gray-100 rounded px-2 py-1"
        >
          <option value="bank">Bank</option>
          <option value="crypto">Crypto</option>
          <option value="stocks">Stocks</option>
          <option value="other">Other</option>
        </select>
        <input
          type="number"
          value={editBalance}
          onChange={(e) => setEditBalance(e.target.value)}
          className="bg-gray-800 text-gray-100 rounded px-2 py-1 w-24"
        />
        <button
          onClick={handleSave}
          className="bg-green-600 rounded px-2 py-1 cursor-pointer hover:bg-green-700"
        >
          Save
        </button>
        <button
          onClick={() => setIsEditing(false)}
          className="bg-red-600 rounded px-2 py-1 cursor-pointer hover:bg-red-700"
        >
          Cancel
        </button>
      </li>
    );
  }

  return (
    <li
      className="text-gray-100 flex flex-col items-start p-4 mb-4 rounded-lg shadow-md"
      style={{ background: "rgb(28,30,31)" }}
    >
      <div className="flex flex-row items-center gap-4 w-full mb-2">
        <span className="font-semibold text-lg">{account.name}</span>
        <span className="px-2 py-1 rounded bg-gray-700 text-gray-200 text-xs">{account.type}</span>
        <span className="ml-auto font-mono text-blue-200">£{account.balance.toFixed(2)}</span>
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-600 rounded-lg px-3 py-1 cursor-pointer hover:bg-blue-700 text-white text-sm"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(account.id)}
          className="bg-red-600 rounded-lg px-3 py-1 cursor-pointer hover:bg-red-700 text-white text-sm"
        >
          Delete
        </button>
      </div>
      {/* Transactions list */}
      {transactions.length > 0 && (
        <div className="w-full mt-2 border-t border-gray-700 pt-2">
          <span className="text-xs text-gray-400 font-semibold mb-1 block">Transactions:</span>
          <ul className="text-sm text-gray-300">
            {transactions.map((t) => (
              <li key={t.id} className="mb-1">
                <span className="font-mono text-gray-400">{t.date.split("T")[0]}</span> — {t.description ?? "No description"}: <span className="font-mono text-blue-200">£{t.amount.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}
