import Hero from './Hero'
import Products from './Products'
import Stamps from './Stamps'

const MainSection = () => {
  return (
    <main className="max-h-full">
      <Hero />
      <Stamps />
      <Products />
    </main>
  )
}

export default MainSection