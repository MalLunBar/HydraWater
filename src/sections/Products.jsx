

const Products = () => {
  return (
    <section className="p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-heading mb-4">Our Products</h2>
        <p className="text-lg mb-6 font-heading">
          Explore our range of products designed to keep you hydrated and healthy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product cards will go here */}
        </div>
      </div>
    </section>
  )
}

export default Products