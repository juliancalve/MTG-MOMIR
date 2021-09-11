import React, { useState } from 'react'

const ManaSelector = ({cmc, setCmc, onClick, disabled}) => {

    const addOne = () => {
        setCmc(cmc+1);
    }

    const removeOne = () => {
        if(cmc != 0)
        setCmc(cmc-1)
    }

    const onGenerate = () => {
        setCmc(0);
        onClick && onClick();
    }

    return (
        <div className='row d-flex flex-column align-items-center m-auto'>
            <div className='col-sm-10 col-md-5 d-flex justify-content-between mt-3'>
                <button disabled={cmc === 0} onClick={removeOne} className='btn btn-primary col-4'>{'<'}</button>
                <div className='col-2'><h3>{cmc}</h3></div>
                <button onClick={addOne} className='btn btn-primary col-4'>{'>'}</button>
            </div>
            <div className='d-flex justify-content-center'>
                <button disabled={disabled} onClick={onGenerate} className='btn btn-success mt-3'>Generate</button>
            </div>
        </div>
    )
}

export default ManaSelector
