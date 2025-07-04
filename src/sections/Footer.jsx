
export const Footer = () => {
  return (
    <footer className="bg-secondary text-white p-4">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-2">© 2023 HydraWater. All rights reserved.</p>
        <nav>
          <ul className="flex justify-center space-x-4">
            <li><a href="#privacy" className="">Privacy Policy</a></li>
            <li><a href="#terms" className="">Terms of Service</a></li>
            <li><a href="#contact" className="">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer