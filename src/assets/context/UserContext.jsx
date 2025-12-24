import { createContext, useEffect, useState } from "react";
import { ApiAxios } from "../../../ApiAxios";

export const UserContext = createContext()


export const UserContextProvider = ({ children }) => {


    const [products, setProduct] = useState([])

   



    useEffect(() => {
        ApiAxios.get('/products')
            .then((res) => res.data)
            .then(data => {
               setProduct(data)

            })


    }, [])

    return <UserContext.Provider value={{products }}>

        {children}
    </UserContext.Provider>

}