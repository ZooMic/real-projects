import React from 'react'
import { wrapper, modal, content, /*typeSignBackground, typeSign, warning, info, error, success*/  } from './Modal.module.css';

// const selectClassByType = type => {
//     switch (type) {
//         case 'warning': return warning;
//         case 'info': return info;
//         case 'error': return error;
//         case 'success': return success;
//         default: return info;
//     }
// }

const Modal = ({ type = 'warning', children, visible = false }) => {
    // const [sign, setSign] = useState(selectClassByType(type))
    // useEffect(() => {
    //     setSign(selectClassByType(type))
    // }, [type])

    return visible ?
        <div className={wrapper} >
            <div className={modal}>
                {/* <div className={typeSignBackground}>
                    <div className={`${typeSign} ${sign}`} />
                </div> */}
                <div className={content}>
                    {children}
                </div>
            </div>
        </div> : null;
}

export default Modal;