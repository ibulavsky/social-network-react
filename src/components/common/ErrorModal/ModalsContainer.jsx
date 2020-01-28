import React from 'react';
import Modals from "./ModalSimpleMessage";
import {useDispatch} from "react-redux"
import {setError} from "../../../redux/main/app-reducer"

const ModalContainer = ({errorMessage}) => {

    const dispatch = useDispatch()

    const onSetError = () => {
        dispatch(setError(''))
    }

    return (
        <>
            <Modals top={200} show={errorMessage} blackout={true}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <div style={{margin: '10px'}}>
                        {errorMessage}
                    </div>
                    <div style={{position: 'absolute', right: '10px', top: '10px'}}>
                        <button style={{height: '22px', padding: '2px'}} onClick={() => onSetError()}>X</button>
                    </div>
                </div>
            </Modals>
        </>
    );
};

export default ModalContainer;
