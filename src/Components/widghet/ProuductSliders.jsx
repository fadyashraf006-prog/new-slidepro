import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProuduCtcard from '../sharedcomponent/Prouductcard';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay  } from 'swiper/modules';
 import 'swiper/css/autoplay';





export default function ProuductSliders({products}) {



  return <>

  < Swiper

  
  spaceBetween={20}
   modules={[Navigation, Pagination, Scrollbar, A11y ,EffectFade ,Autoplay]}

  autoplay={{  delay: 500}}
  loop={true}
  speed={800}
  
  
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
  
  {products&&products.map((product,index) => <SwiperSlide key={index} >< ProuduCtcard  {...product} /></SwiperSlide>)}   
  
  
  </Swiper>





  
  
  
  </>
}
