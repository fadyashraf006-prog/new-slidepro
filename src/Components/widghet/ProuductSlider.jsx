import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../sharedcomponent/ProductCard';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay  } from 'swiper/modules';
 import 'swiper/css/autoplay';





export default function ProductSlider({products}) {



  return <>

  < Swiper

  
  spaceBetween={20}
   modules={[Navigation, Pagination, Scrollbar, A11y ,EffectFade ,Autoplay]}

  autoplay={{  delay: 800}}
  loop={true}
  speed={2000}
  
  
  slidesPerView={1}
   breakpoints={{
     320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
  
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
   
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    992: {
      slidesPerView :3,
      spaceBetween :20
    }

   }}

  
  >
  
  {products&&products.map((product,index) => <SwiperSlide key={index} >< ProductCard  {...product} /></SwiperSlide>)}   
  
  
  </Swiper>





  
  
  
  </>
}
