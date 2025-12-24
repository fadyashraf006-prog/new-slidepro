import { Children, createContext, useEffect, useState } from "react"



export  const CardContext = createContext()

export default function CardContextProvider({ Children }) {


    const [card, setCard] = useState([])

    const addToCardHandler=((product)=>{
        const newCard = card.puch(product);
        console.log(newCard);
        
        
       
        
    })


    return <CardContext.Provider value={ {addToCardHandler  } }>
        
        {Children}
    </CardContext.Provider>

}





