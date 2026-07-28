import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "iPhone 17",
    category: "Electronics",
    price: 999,
    stock: 40,
  },
  {
    id: 2,
    name: "MacBook Air",
    category: "Electronics",
    price: 1299,
    stock: 8,
  },
  {
    id: 3,
    name: "Nike Air Max",
    category: "Footwear",
    price: 180,
    stock: 0,
  },
];

function SqlProducts() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-6xl mx-auto mt-10">

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-3xl font-bold">
            MySQL Products
          </h1>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
            + Add Product
          </button>

        </div>

        <div>
          <ProductCard products={products} onEdit={() => {}} onDelete={() => {}} />
        </div>

      </div>

    </div>
  );
}

export default SqlProducts;