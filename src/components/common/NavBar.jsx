

export default function Navbar() {
  return (
    <nav className="w-full p-0 flex justify-center items-center">
      {/* Logo here */}
      
      <div className="flex p-2 bg-gray-800 w-full justify-center gap-8 text-2xl">
        <a href="/" className="">Dashboard</a>
        <a href="/accounts" className="">Accounts</a>
      </div>
    </nav>
  );
}