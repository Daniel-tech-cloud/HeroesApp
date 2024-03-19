import { HeroCard } from "./";
import { getHeoresByPublisher } from "../helpers/";

export const HeroList = ({ publisher }) => {
    const heroes = getHeoresByPublisher(publisher);

    return (
        <>
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                { heroes.map(hero => (
                   
                       <HeroCard  
                            key={ hero.id }
                            { ...hero }
                       />
                    )
                )}

            </div>   
        </>
    )
}
