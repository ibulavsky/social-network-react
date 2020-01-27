import React from "react";
import styles from "./FormsControls.module.css"
import {Field} from "redux-form"

const FormControl = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {/*<br/>*/}
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <textarea {...input} {...restProps} /></FormControl>
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <input {...input} {...restProps} /></FormControl>
};

export const createField = (placeholder, name, validators, component, props, text) => (
    <div style={{display: 'flex', width: '150px', marginBottom: '5px', alignItems: 'center'}}>
        <Field
            placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
            {...props}/>
        <span style={{width: '200px', marginLeft: '-70px'}}>
            {text}
        </span>
    </div>
)
