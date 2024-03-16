import { getHeoresByPublisher } from "../helpers/";

export const HeroList = ({ publisher }) => {
    const heroes = getHeoresByPublisher(publisher);

    return (
        <>
            <ul>
                { heroes.map(hero => (
                   
                        <li key={hero.id}>
                            {hero.superhero}
                        </li>
                    )
                )}

            </ul>   
        </>
    )
}
