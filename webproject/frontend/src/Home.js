import Navbar1 from "./navbar1";
import Navbar2 from "./navbar";
import Shopeur from "./shopeur";
import Catagory from "./catagory";
import Cards from "./cards";
import { FeatureProduct } from "./featureProduct";
import { CatProd } from "./CatProd";
import Themeextimg from "./card2";
import LatestNews from "./latestNews";
import Footer from "./footer";
import  ProductList  from "./productcomponent/ProductList";
import TopCategory from "./topCategory";
import App from "./marqueeImg/App";
function Home() {
  return (
    <>
      <Navbar1 />
      <Shopeur />
      <Navbar2 />
  <Catagory/>
  <Cards />
<TopCategory/>
  
    
      <ProductList />
      <FeatureProduct />
      <CatProd />
      <Themeextimg />
      <LatestNews />
      <App />
      <Footer />
    </>
  );
}

export default Home;
