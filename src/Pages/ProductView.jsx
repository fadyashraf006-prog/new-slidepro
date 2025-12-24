import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { UserContext } from "../assets/context/UserContext";
import { useContext } from "react";
import ProductCard from '../Components/sharedcomponent/ProductCard'



export default function ProductView() {

    const { products } = useContext(UserContext);

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (products) {
            const found = products.find((p) => p.id === Number(id));
            setProduct(found);
        }
    }, [id, products])

    return <>

          {product ? ( <div className=" container mx-auto py-5  px-3 rounded-2xl bg-neutral-500">
            <ProductCard {...product}   /><p className=" py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur ducimus illum quisquam praesentium  optio ea magnam earum officiis itaque? Ad voluptatibus dolor ex repudiandae.</p>
           
          </div>) : (<div>Loading product…</div>)}

    </>
}
