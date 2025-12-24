
import { useState } from "react";
import { Link } from "react-router";
import { appRouter } from "../../../Routes";

export default function Nav() {
    const [route , _ ] =useState(appRouter)
    
  return <>
  
  <nav className="bg-blue-700 py-3">

    <ul className="flex flex-row gap-3 px-4 justify-center text-1/2">
        {
          appRouter&&appRouter.map((route,index)=>(<li key={index} className=" hover:text-amber-50  transition-all ">
            <Link  to={route.to}> {route.title} </Link></li> ))
        }
    </ul>

  </nav>
  
  </>
}
