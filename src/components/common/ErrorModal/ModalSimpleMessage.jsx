import React from 'react';

const Modal = ({children, ...props}) => {

    if (!props.show) return null;

    return (
        <>
            {props.blackout && <div style={{
                position: "fixed",
                top: '0px',
                left: '0px',
                width: '100vw',
                height: '100vh',
                backgroundColor: "red",
                opacity: "0.3"
            }}> </div>}
            <div style={{
                position: "fixed",
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                width: '200px',
                height: '100px',
                borderRadius: '10px',
                backgroundColor: "white",
                top: `${props.top}px`
            }}>
                {children}
            </div>
        </>
    );
};

export default Modal;
