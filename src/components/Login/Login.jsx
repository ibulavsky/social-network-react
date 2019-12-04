import React from 'react';
import {reduxForm} from "redux-form";
// import * as api from "../../api/api";
import {createField, Input} from "../common/FormsControl/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from '../../components/common/FormsControl/FormsControls.module.css'


const LoginForm = ({handleSubmit, error}) => {

    return <form onSubmit={handleSubmit}>
        {createField('Email', 'email', [required], Input)}
        {createField('Password', 'password', [required], Input, {type: 'password'})}
        <div className={styles.checkboxWrapper}>
            {createField(null, 'rememberMe', null, Input, {type: 'checkbox'}, 'remember me')}
        </div>
        {error && <div className={styles.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
};

const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe);
    };
    if (isAuth) {
        return <Redirect to={"/profile"}/>
    } else {
        return <div>
            <h1> Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    }
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth});

export default connect(mapStateToProps, {login, logout})(Login);
