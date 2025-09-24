export function NavBar() {
  const currentPath = window.location.pathname;

  return (
    <nav
      className=" w-64 bg-gray-950 text-white flex flex-col p-4"
      style={{ height: "100vh", background: "rgb(30,30,32)" }}
    >
      {/* Logo here */}
      {/* Links Below */}

      <div className="flex flex-col gap-4 text-lg">
        <a
          href="/"
          className={`px-4 py-2 rounded transition-colors
    ${currentPath === "/" ? "bg-[rgb(30,30,32)]" : ""}
    hover:bg-[rgb(15,15,15)]`}
        >
          Dashboard
        </a>

        <a
          href="/accounts"
          className={`px-4 py-2 rounded transition-colors
    ${currentPath === "/accounts" ? "bg-[rgb(30,30,32)]" : ""}
    hover:bg-[rgb(15,15,15)]`}
        >
          Accounts
        </a>
        <a
          href="/insights"
          className={`px-4 py-2 rounded transition-colors
    ${currentPath === "/insights" ? "bg-[rgb(30,30,32)]" : ""}
    hover:bg-[rgb(15,15,15)]`}
        >
          Insights
        </a>
        <a
          href="/reports"
          className={`px-4 py-2 rounded transition-colors
    ${currentPath === "/reports" ? "bg-[rgb(30,30,32)]" : ""}
    hover:bg-[rgb(15,15,15)]`}
        >
          Reports
        </a>
        <a
          href="/settings"
          className={`px-4 py-2 rounded transition-colors
    ${currentPath === "/settings" ? "bg-[rgb(30,30,32)]" : ""}
    hover:bg-[rgb(15,15,15)]`}
        >
          Settings
        </a>
      </div>
    </nav>
  );
}
