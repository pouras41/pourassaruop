

function ProductCard({ products, onEdit, onDelete }) {
  
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
        >
          {/* Product Name */}
          <h2 className="text-xl font-bold text-gray-800">
            {product.name}
          </h2>

          {/* Category */}
          <p className="text-gray-500 mt-1">
            {product.category}
          </p>

          {/* Price */}
          <div className="mt-4">
            <p className="text-2xl font-bold text-blue-600">
              ${product.price}
            </p>
          </div>

          {/* Stock */}
          <div className="mt-3">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                product.stock > 10
                  ? "bg-green-100 text-green-700"
                  : product.stock > 0
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {product.stock} in stock
            </span>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={() => onEdit(product)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(product.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;