export function NavBar() {
  const currentPath = window.location.pathname;

  return (
    <nav className=" w-64 bg-gray-950 text-white flex flex-col p-4"
    style={{height: "100vh"}}>
      {/* Logo here */}
      {/* Links Below */}

      <div className="flex flex-col gap-4 text-lg">
        <a
          href="/"
          className={`px-4 py-2 rounded hover:bg-gray-700 transition-colors ${
            currentPath === "/" ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
        >
          Dashboard
        </a>
        <a
          href="/accounts"
          className={`px-4 py-2 rounded hover:bg-gray-700 transition-colors ${
            currentPath === "/accounts" ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
          >
          Accounts
        </a>
        <a
          href="/insights"
          className={`px-4 py-2 rounded hover:bg-gray-700 transition-colors ${
            currentPath === "/insights" ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
          >
          Insights
        </a>
        <a
          href="/reports"
          className={`px-4 py-2 rounded hover:bg-gray-700 transition-colors ${
            currentPath === "/reports" ? "bg-gray-700" : "hover:bg-gray-700"
          }`}>
          Reports
        </a>
        <a
          href="/settings"
          className={`px-4 py-2 rounded hover:bg-gray-700 transition-colors ${
            currentPath === "/settings" ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
          >
          Settings
        </a>
      </div>
    </nav>
  );
}
