import React from 'react';
import {Field, reduxForm} from "redux-form";
import * as api from "../../api/api";
import {Input} from "../common/FormsControl/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from '../../components/common/FormsControl/FormsControls.module.css'


const LoginForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input} name={"email"} placeholder={"Email"}
                   validate={[required]}/>
        </div>
        <div>
            <Field component={Input} name={"password"} placeholder={"Password"}
                   validate={[required]} type={'password'}/>
        </div>
        <div>
            <Field component={Input} name={"rememberMe"} type="checkbox"/>
        </div>
        {props.error && <div className={styles.formSummaryError}>
            {props.error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
};

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    } else {
        return <div>
            <h1> Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    }
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login, logout})(Login);
