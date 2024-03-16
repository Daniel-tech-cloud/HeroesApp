import { heroes } from '../data/heroes';


export const getHeoresByPublisher = ( publisher ) => {
    const validPublisher = ['DC Comics','Marvel Comics'];
    if( !validPublisher.includes( publisher )){
        throw new Error(`${ publisher } is no a valid puclisher`);
    }

    return heroes.filter( heroe => heroe.publisher === publisher );
}
