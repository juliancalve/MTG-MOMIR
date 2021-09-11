import React from 'react'

const CreatureCard = ({showCreature, loading}) => {
    return (
        <div className="card col-12 pt-2 p-0 m-0" style={{height: '500px'}}>
            <picture className='d-flex align-items-center justify-content-center h-100'>
            {loading && <div className="spinner-grow h-5" role="status">
            </div>}
            {showCreature && <img src={showCreature.imageUrl}  className="h-100" alt="..."/>}
            </picture>
        </div>
    )
}

export default CreatureCard
