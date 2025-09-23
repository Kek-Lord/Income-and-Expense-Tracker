import { useState } from "react";

function AccountItem({ account, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(account.name);
  const [editType, setEditType] = useState(account.type);
  const [editBalance, setEditBalance] = useState(account.balance);

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
      <li className="text-gray-100 flex flex-row items-center gap-2">
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
    <li className="text-gray-100 gap-2 flex flex-row items-center">
      {account.name} ({account.type}) — £{account.balance.toFixed(2)}
      <button
        onClick={() => setIsEditing(true)}
        className="bg-gray-600 rounded-lg px-2 py-1 cursor-pointer hover:bg-gray-700"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(account.id)}
        className="bg-gray-600 rounded-lg px-2 py-1 cursor-pointer hover:bg-gray-700"
      >
        Delete
      </button>
    </li>
  );
}

export default AccountItem;
