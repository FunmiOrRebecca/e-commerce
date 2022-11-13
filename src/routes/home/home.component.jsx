import './home.styles.css';
import MainDisplay from '../../components/main display/main.display.component';
import FlashSales from '../../components/flash sales/flash.sales.component'
import TopCategories from '../../components/top categories/top.categories.component';
import TopBrands from '../../components/top brands/top.brands.component';
import Footer from '../../components/footer/footer.component';
import OutstandingSales from '../../components/outstanding sales/outstanding.sales.components';
import LuckyGuess from '../../components/lucky guess/lucky.guess.component';
import {motion} from "framer-motion";
import A from '../../components/a/a';


const Home = () => {
  
    return(
         <motion.div initial={{width: 0}} animate={{width: "100%"}} transition={{duration: 0.2}} exit={{width: window.innerWidth}}>    

         <MainDisplay />
         <FlashSales />
          <TopCategories />
          <LuckyGuess />
           <TopBrands />
           <OutstandingSales />
           <Footer />
          
         </motion.div>
    )
}


export default Home;

// <FlashSales />