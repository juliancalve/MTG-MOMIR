import mtg from 'mtgsdk';

export const getCreature = async ({cmc}) => {
    let hasImg = false;
    let random = null;
    try{
        while(!hasImg){

            const response = await mtg.card.where({ cmc, type: 'Creature' });
            random = response[Math.floor(Math.random() * response.length)];
            if(random.imageUrl && random.setName !== 'Unstable' && random.setName !== 'Unsanctioned') {
                hasImg = true;
            }
        }
        return random;
    } catch( error ) {
        alert(error);
    }
}
