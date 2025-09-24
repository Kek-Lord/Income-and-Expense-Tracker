import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Transaction } from "../App";

type TransactionFormProps = {
  accountId: string;
  onAddTransaction: (transaction: Transaction) => void;
};

export function TransactionForm({
  accountId,
  onAddTransaction,
}: TransactionFormProps) {
  const [amount, setAmount] = useState<string>(""); // empty string instead of 0
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount) return; // prevent submitting empty

    const transaction: Transaction = {
      id: uuid(),
      accountId,
      amount: Number(amount),
      description,
      date: new Date().toISOString(),
    };

    onAddTransaction(transaction);

    // reset form
    setAmount("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mt-4 p-4 rounded-lg"
      style={{background: "rgb(28,30,31"}}
    >
      <div className="flex flex-col items-center gap-2"
      style={{background: "rgb(28,30,31"}}>
        {/* label centered relative to inputs */}
        <h2 className="text-white text-lg font-semibold">Add Transaction</h2>

        <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            className="flex-1 px-3 py-2 rounded border border-gray-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="flex-2 px-3 py-2 rounded border border-gray-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-semibold shadow"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
