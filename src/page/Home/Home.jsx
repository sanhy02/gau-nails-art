import pageBody1 from '../../assets/mong1.jpg'
import pageBody2 from '../../assets/mong2.jpg'
import pageBody3 from '../../assets/mong3.jpg'
import Hero from '../../components/Hero/Hero.jsx'
import ProductList from '../../components/ProductList/ProductList.jsx'
import Banner from '../../components/Banner/Banner.jsx'
import { products } from '../../data/products.js'
import './Home.css'


const Home = () => {
  
  return (
    <>
      <Hero img1={pageBody1} img2={pageBody2} img3={pageBody3} />
      <Banner title="Get Your Nails Done Today!" buttonText="Book Now" />
      <ProductList products={products} />
      <Banner title="Get Your Nails Done Today!" buttonText="Book Now" />
      <ProductList products={[...products].reverse()} />
    </>
  )
}
export default Home