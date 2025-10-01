import { type FormEvent, useState } from "react";
import type { Account } from "../App";

interface AccountFormProps {
  onAddAccount: (account: Account) => void;
}

export function AccountForm({ onAddAccount }: Readonly<AccountFormProps>) {
  const [name, setName] = useState("");
  const [type, setType] = useState("bank");
  const [balance, setBalance] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || balance === "") return;

    const newAccount = {
      id: Date.now().toString(),
      name,
      type,
      balance: parseFloat(balance),
    };

    onAddAccount(newAccount);

    setName("");
    setType("bank");
    setBalance("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-100">Add New Account</h2>

      {/* Account Name */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-100">Account Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Chase Bank"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                     bg-gray-50 dark:bg-gray-900 
                     focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-100"
        />
      </div>

      {/* Type */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-100">Type:</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                     bg-gray-50 dark:bg-gray-900 
                     focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-100"
        >
          <option value="bank">Bank</option>
          <option value="crypto">Crypto</option>
          <option value="stocks">Stocks</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Balance */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-100">Starting Balance:</label>
        <input
          type="number"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
          placeholder="0.00"
          step="0.01"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                     bg-gray-50 dark:bg-gray-900 
                     focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-100"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 
                   rounded-lg shadow-md transition-colors duration-200"
      >
        Add Account
      </button>
    </form>
  );
}

