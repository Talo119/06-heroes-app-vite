import { heroes } from '../data/heroes'


export const getHeroesByPublisher = ( publisher ) => {
    const validPublishers = ['DC Comics','Marvel Comics'];
    if (!validPublishers.includes( publisher )) {
        throw new Error(`${ publisher } is not as valid publisher`)
    }

    return heroes.filter( heroes => heroes.publisher === publisher );
}