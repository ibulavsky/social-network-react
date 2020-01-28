import React from 'react';
import ModalsContainer from "./ModalsContainer";
import {useSelector} from "react-redux"

const ModalsPage = () => {

    const errorMessage = useSelector((state) => state.app.errorMessage)

    return (
        <>
            <ModalsContainer errorMessage={errorMessage}/>
        </>
    );
};

export default ModalsPage;
