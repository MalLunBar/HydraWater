

const Hero = () => {
  return (
    <section className="bg-[url('/water-hero.webp')] bg-cover bg-center bg-no-repeat w-full h-[55vh] text-text px-8">
      <div className="w-full h-full flex flex-col  justify-center gap-6 pt-4">
        <h2 className="text-2xl font-heading">Welcome to HydraWater</h2>
        <div className="relative bg-white/30 backdrop-blur-md rounded-[2rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 px-8 py-6 max-w-xl mx-auto">
          <p className="text-md text-center font-body">
            Explore our range of products and services designed to keep you hydrated and healthy.
          </p>
        </div>
        <button className="bg-primary text-white px-6 py-3 rounded hover:bg-secondary transition-colors">
          Shop Now
        </button>

      </div>
    </section>
  )
}

export default Hero