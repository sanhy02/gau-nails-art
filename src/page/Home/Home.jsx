import pageBody1 from '../../assets/mong4.jpg'
import pageBody2 from '../../assets/mong16.jpg'
import pageBody3 from '../../assets/mong17.jpg'
import Hero from '../../components/Hero/Hero.jsx'
import ProductList from '../../components/ProductList/ProductList.jsx'
import Banner from '../../components/Banner/Banner.jsx'
import { products } from '../../data/products.js'
import './Home.css'


const Home = () => {
  
  return (
    <>
      <Hero img1={pageBody1} img2={pageBody2} img3={pageBody3} />
      <Banner title="Ưu đãi khi đặt lịch!" buttonText="Đạt lịch ngay để có ưu đãi" />
      <ProductList products={products} />
      <Banner title="Bảo hành mẫu nail" buttonText="Đạt lịch ngay để có ưu đãi" />
      <ProductList products={[...products].reverse()} />
    </>
  )
}
export default Home