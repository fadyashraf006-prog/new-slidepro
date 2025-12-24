import { UserContext } from "../assets/context/UserContext";
import { useContext } from "react";
import ProductCard from "../Components/sharedcomponent/ProductCard";






export default function Store() {

  const {products }= useContext(UserContext);


  return <>


    <h1 className="text-center text-gray-950 text-6xl font-extrabold mt-5">Store</h1>

    <div className="container mx-auto  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5 ">


      {products && products.map((product, index) => <div key={index} className='h-200 mb-4' ><ProductCard {...product} /></div>)}



    </div>



  </>
}
