

const Hero = () => {
  return (
    <section className="bg-[url('/water-hero.webp')] bg-cover bg-center bg-no-repeat w-full h-[50vh] text-text px-10 py-15 ">
      <div>
        <h2 className="text-2xl font-heading mb-4">Welcome to HydraWater</h2>
        <p className="text-md mb-6 font-body">
          Explore our range of products and services designed to keep you hydrated and healthy.
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded hover:bg-secondary transition-colors">
          Shop Now
        </button>

      </div>
    </section>
  )
}

export default Hero