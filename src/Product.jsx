import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import './Product.css'
import Footer from './components/Footer/Footer';

function Product() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
    
      <Footer/>
    </div>
    );
}

export default Product;
