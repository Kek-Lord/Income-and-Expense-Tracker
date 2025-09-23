import { AccountItem } from "./AccountItem";

export function AccountList({ accounts, onUpdate, onDelete }) {
  if (accounts.length === 0) 
    return <p className="text-gray-100">No accounts yet</p>;

  return (
    <ul className="flex flex-col gap-2">
      {accounts.map((acc) => (
        <AccountItem
          key={acc.id}
          account={acc}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
