import { useContext, useEffect } from 'react';
import { Link } from 'react-router'




export default function ProuduCtcard({ title, price, image, id }) {

  
  




    useEffect(() => {


    }, [])

    return <>


        



            <div className='   bg-blue-100   max-h-3/4 rounded-2xl overflow-hidden '>
                <div className='flex flex-col justify-center items-center    mb-6'>
                    <div >
                        <img src={image} alt={title} className=' object-cover h-60 px-2 mt-4' />
                    </div>
                    <h2 className='p-4 text-cyan-950 text-2xl'>{title.slice(0, 20)}{title.length > 20 && '...'} </h2>
                    <h3 className='text-gray-400'>${price}</h3>
                    <div className='flex flex-col md:flex-row  gap-3  mb-4 justify-center items-center'>
                        <button onClick={()=>addToCardHandler(id)} className='bg-blue-900 text-amber-50 border rounded-lg  p-2 mt-3  '>Add to card</button>
                        <Link to={`/store/product/view/${id}`} className='bg-blue-200 hover:bg-blue-800 border rounded-lg p-2 cursor-pointer mt-3 '>View Product</Link>
                    </div>

                </div>
            </div>
     



    </>
}

