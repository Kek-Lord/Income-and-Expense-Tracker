import AccountForm from "../components/AccountForm";
import AccountList from "../components/AccountList";

function Accounts({ accounts, onAddAccount, onUpdate, onDelete }) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-800 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-100">Accounts</h1>
        
        <div className="bg-gray-800 shadow-lg rounded-xl p-6">
          <AccountForm onAddAccount={onAddAccount} />
        </div>

        <div className="bg-gray-800 shadow-lg rounded-xl p-6 text-center">
          <AccountList
            accounts={accounts}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default Accounts;
