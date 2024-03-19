import { Navigate, useParams } from "react-router-dom";
import { getHeoresById } from "../helpers";

export const HeroPage = () => {

    const { id } = useParams();
    const hero = getHeoresById( id );
    
    if( !hero ){
      return <Navigate to="/marvel" />
    }

    return (
      <>
          <h1> { hero.superhero } </h1> 
      </>
  )
}


