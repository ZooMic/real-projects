import React from 'react'
import { wrapper, modal, typeSign, content } from './Modal.module.css';

const Modal = ({ type, children }) => {
    return (
        <div className={wrapper} >
            <div className={modal}>
                <div className={typeSign}></div>
                MODAL AS FUCK
            </div>
        </div>
    )
}

export default Modal;