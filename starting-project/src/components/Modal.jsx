import { useNavigate } from 'react-router-dom';

import classes from './Modal.module.css';

function Modal({ children }) {
    const navigate = useNavigate();

    function closeHandler() {
        navigate('..'); //simlar like cd command up to parent 

    }
    return (
        <>
            <div className={classes.backdrop} onClick = {closeHandler} />
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    );
}

export default Modal;