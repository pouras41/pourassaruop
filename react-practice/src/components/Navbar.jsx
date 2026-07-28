import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        Product Manager
      </Link>

      <div className="flex gap-4">
        <Link
          to="/sql"
          className={`px-4 py-2 rounded ${
            location.pathname === "/sql"
              ? "bg-blue-600"
              : "hover:bg-slate-700"
          }`}
        >
          MySQL
        </Link>

        <Link
          to="/mongo"
          className={`px-4 py-2 rounded ${
            location.pathname === "/mongo"
              ? "bg-green-600"
              : "hover:bg-slate-700"
          }`}
        >
          MongoDB
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;