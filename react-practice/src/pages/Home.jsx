import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-xl rounded-xl p-10 w-[450px]">

        <h1 className="text-3xl font-bold text-center mb-8">
          Product Management
        </h1>

        <p className="text-center mb-8 text-gray-500">
          Choose Database
        </p>

        <div className="flex flex-col gap-5">

          <Link
            to="/sql"
            className="bg-blue-600 text-white py-3 rounded-lg text-center hover:bg-blue-700"
          >
            MySQL
          </Link>

          <Link
            to="/mongo"
            className="bg-green-600 text-white py-3 rounded-lg text-center hover:bg-green-700"
          >
            MongoDB
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Home;