import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Dashboard } from "./pages/Dashboard";
import { Accounts } from "./pages/Accounts";
import { NavBar } from "./components/common/NavBar";

type Account = {
    id: string;
    name: string;
    type: string;
    balance: number;
}

export function App() {
  const [accounts, setAccounts] = useState<Account[]>(() =>
    JSON.parse(localStorage.getItem("accounts")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }, [accounts]);

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

  return (
    <div className="bg-gray-900 font-sans flex min-h-screen">
      <NavBar className="flex-shrink-0" />

      <main className="flex-1 p-6 text-white">
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
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}
