import React, { useEffect, useState } from 'react'
import CreatureCard from '../../Components/CreatureCard/CreatureCard'
import Field from '../../Components/Field/Field';
import ManaSelector from '../../Components/ManaSelector/ManaSelector'
import { getCreature } from '../../Services/Creature';

const Home = () => {

    

    const [creature, setCreature] = useState(null);
    const [showCreature, setShowCreature] = useState(null);
    const [cmc, setCmc] = useState(0);
    const [loading, setLoading] = useState(false);
    const [creatureList, setCreatureList] = useState([]);


    const onClick = async () => {
        setLoading(true);
        setCreature(null);
        setShowCreature(null);
        setCreature( await getCreature({cmc}));
        setLoading(false);
    }

    useEffect(() => {
        if(creature) {
            setCreatureList([...creatureList, creature]);
            setShowCreature(creature);
        }
    }, [creature]);

    const removeCreature = (toRemove) => {
        const aux = [...creatureList];
        aux.splice(aux.indexOf(toRemove));
        setCreatureList(aux);
        setShowCreature(null);
    };

    return (
        <div className='col-12 row m-0 p-0'>
                <CreatureCard showCreature={showCreature} creature={creature} loading={loading}/>
                <ManaSelector disabled={loading} cmc={cmc} setCmc={(manaValue) => {setCmc(manaValue)}} onClick={onClick}/>
                <Field removeCreature={removeCreature} onShowCreature={(c) => setShowCreature(c)} selectedCreature={showCreature} creatureList={creatureList}/>
        </div>
    )
}

export default Home
