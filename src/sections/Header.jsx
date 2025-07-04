

const Header = () => {
  return (
    <header className="bg-primary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-special">HydraWater</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-secondary">Home</a></li>
            <li><a href="#about" className="hover:text-secondary">About</a></li>
            <li><a href="#contact" className="hover:text-secondary">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header