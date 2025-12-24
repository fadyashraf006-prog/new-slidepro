
import { useContext } from 'react';
import Hero from '../Components/sharedcomponent/Hero';
import ProductSlider from './../Components/widghet/ProuductSlider'
import { UserContext } from './../assets/context/UserContext';


export default function Home() {

  const {products} = useContext(UserContext);

  return <>
    <Hero />
    <div className='mx-auto container py-5  text-center '>
      <h2>Most recent product</h2>
      <ProductSlider products={products} />
      
    </div>





  </>
}
