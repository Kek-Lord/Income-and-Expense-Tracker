import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Dashboard } from "./pages/Dashboard";
import { Accounts } from "./pages/Accounts";
import { NavBar } from "./components/common/NavBar";

export type Account = {
  id: string;
  name: string;
  type: string;
  balance: number;
};

export type Transaction = {
  id: string;
  accountId: string;
  amount: number; // positive = money in, negative = money out
  description?: string;
  date: string;
};

export function App() {
  const [accounts, setAccounts] = useState<Account[]>(() => {
    const stored = localStorage.getItem("accounts");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }, [accounts]);

  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const stored = localStorage.getItem("transactions");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addAccount = (account: Account) => {
    const exists = accounts.some(
      (acc) => acc.name.toLowerCase() === account.name.toLowerCase()
    );
    if (exists) return;
    setAccounts((prev) => [...prev, account]);
  };

  const updateAccount = (updatedAccount: Account) => {
    setAccounts((prev) =>
      prev.map((acc) => (acc.id === updatedAccount.id ? updatedAccount : acc))
    );
  };

  const deleteAccount = (id: Account["id"]) => {
    setAccounts((prev) => prev.filter((acc) => acc.id !== id));
  };

  const addTransaction = (transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]);

    setAccounts((prev) =>
      prev.map((acc) =>
        acc.id === transaction.accountId
          ? { ...acc, balance: acc.balance + transaction.amount }
          : acc
      )
    );
  };

  return (
    <div
      className="font-sans flex min-h-screen"
      style={{ background: "rgb(18,20,22)" }}
    >
      <NavBar />

      <main
        className="flex-1 p-6 text-white"
        style={{ background: "rgb(18,20,22)" }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/accounts"
            element={
              <Accounts
                accounts={accounts}
                onAddAccount={addAccount}
                onUpdate={updateAccount}
                onDelete={deleteAccount}
                transactions={transactions}
                onAddTransaction={addTransaction}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}
