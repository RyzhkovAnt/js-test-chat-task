import React from 'react'
import './Modal.css'

export const Modal=({isShow,closeHandler,children})=>{
    return (
        <div className='modal'
        hidden={!isShow}>
            {children}
            <button className='button-wrapper' onClick={closeHandler}>Close</button>
        </div>
    )
}