import React from 'react'
import './Field.css'
const Field = ({creatureList, onShowCreature, removeCreature, selectedCreature}) => {
    return (
        <div className="card col-12 pt-2 d-flex justify-content-around mt-4" style={{height: '50'}}>
            <picture>
            {creatureList.map( creature => {
             return <img src={creature.imageUrl} height='100' onClick={() => onShowCreature(creature)} className={`cursor-pointer ${selectedCreature === creature ? 'is-showing' : ''}`} alt="..."/>
            })}
            </picture>
            <div className='mt-4'>
                <button disabled={!selectedCreature} onClick={removeCreature} className='btn btn-danger'>Delete</button>
            </div>
        </div>
    )
}

export default Field
