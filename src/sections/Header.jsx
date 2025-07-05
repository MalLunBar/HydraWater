

const Header = () => {
  return (
    <header className="p-4 bg-transparent absolute top-0 left-0 w-full text-text">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-heading">HydraWater</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="">Home</a></li>
            <li><a href="#about" className="">About</a></li>
            <li><a href="#contact" className="">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header