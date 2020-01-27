import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControl/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth/auth-thunks";
import {Redirect} from "react-router-dom";
import styles from '../../components/common/FormsControl/FormsControls.module.css'


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return <form className={styles.loginWrapper} onSubmit={handleSubmit}>
        {createField('Email', 'email', [required], Input)}
        {createField('Password', 'password', [required], Input, {type: 'password'})}
        <div className={styles.checkboxWrapper}>
            {createField(null, 'rememberMe', null, Input, {type: 'checkbox'}, 'remember me')}
        </div>
        {captchaUrl && <div>
            <img className={styles.captcha} src={captchaUrl} alt={"captcha"}/>
            {createField('Symbols from image', 'captcha', [required], Input)}
        </div>}
        {error && <div className={styles.formSummaryError}>
            {error}
        </div>}
        <button style={{height: '30px'}}>Login</button>
    </form>
};

const Login = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };
    if (isAuth) {
        return <Redirect to={"/profile"}/>
    } else {
        return <div className={styles.loginPage}>
            <h1 className={styles.loginHeader}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    }
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth, captchaUrl: state.auth.captchaUrl});

export default connect(mapStateToProps, {login, logout})(Login);
