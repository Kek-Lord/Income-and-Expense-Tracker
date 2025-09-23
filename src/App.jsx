// src/App.jsx
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Accounts";
import Navbar from "./components/common/NavBar";

function App() {
  const [accounts, setAccounts] = useState([]);

  const addAccount = (account) => {
    const exists = accounts.some(
      (acc) => acc.name.toLowerCase() === account.name.toLowerCase()
    );
    if (exists) return;
    setAccounts((prev) => [...prev, account]);
  };

  const updateAccount = (updatedAccount) => {
    setAccounts((prev) =>
      prev.map((acc) => (acc.id === updatedAccount.id ? updatedAccount : acc))
    );
  };

  const deleteAccount = (id) => {
    setAccounts((prev) => prev.filter((acc) => acc.id !== id));
  };

  return (
    <div className="bg-gray-900 font-sans">
      <Navbar />

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
    </div>
  );
}

export default App;
